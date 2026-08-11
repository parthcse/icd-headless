"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Touch / mouse drag-to-swipe for the sliders (Owl gave us this for free; the
 * dependency-free carousels need it explicitly).
 *
 * Behaviour worth knowing:
 * - **Axis lock.** The first few pixels of movement decide whether the gesture is
 *   horizontal (we take it) or vertical (we ignore it, so the page still scrolls
 *   normally under the slider). Pair with `touch-action: pan-y` in CSS.
 * - **Pointer events**, so one code path covers touch, pen and mouse.
 * - **Click suppression.** A drag that ends on top of a card would otherwise fire
 *   that card's link on release, so the following click is swallowed once.
 *
 * Returns `dragX` (live pixel offset — apply it to your own transform) and the
 * handlers to spread onto the scrolling element.
 */
export default function useDragSwipe({ onNext, onPrev, threshold = 45, onDragChange } = {}) {
  const [dragX, setDragX] = useState(0);
  const st = useRef({ active: false, x0: 0, y0: 0, dx: 0, axis: null, moved: false });

  const onPointerDown = useCallback(
    (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return; // left button only
      st.current = { active: true, x0: e.clientX, y0: e.clientY, dx: 0, axis: null, moved: false };
      onDragChange?.(true);
    },
    [onDragChange]
  );

  const onPointerMove = useCallback((e) => {
    const s = st.current;
    if (!s.active) return;
    const dx = e.clientX - s.x0;
    const dy = e.clientY - s.y0;

    // Decide the gesture's axis once, after a few pixels of travel.
    if (!s.axis) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      s.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (s.axis === "x") {
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          /* capture unsupported — dragging still works while the pointer stays inside */
        }
      }
    }
    if (s.axis !== "x") return; // vertical → let the page scroll

    s.dx = dx;
    if (Math.abs(dx) > 6) s.moved = true;
    setDragX(dx);
  }, []);

  const endDrag = useCallback(() => {
    const s = st.current;
    if (!s.active) return;
    const { dx } = s;
    s.active = false;
    s.axis = null;
    s.dx = 0;
    setDragX(0);
    onDragChange?.(false);
    if (dx <= -threshold) onNext?.();
    else if (dx >= threshold) onPrev?.();
  }, [onNext, onPrev, threshold, onDragChange]);

  // Runs before the card's own onClick, so a drag never triggers navigation.
  const onClickCapture = useCallback((e) => {
    if (!st.current.moved) return;
    st.current.moved = false;
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return {
    dragX,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onClickCapture,
      onDragStart: (e) => e.preventDefault(), // stop native image/text dragging
    },
  };
}

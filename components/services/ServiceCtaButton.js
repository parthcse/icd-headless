"use client";

/**
 * Service CTA button.
 *
 * - href === "popup"  → renders a <button> that opens the site-wide
 *   GetQuotePopup (via the shared `icd:open-quote-popup` event). This is an
 *   explicit opt-in: only CTAs whose data href is literally "popup" become
 *   popup triggers — a bare "#"/empty href is NOT treated as a popup.
 * - any real URL       → renders a normal <a href>.
 *
 * Keeps the same btn markup + optional arrow the sections used before.
 */
export default function ServiceCtaButton({ href, label, btnArrow, className = "btn btn-primary" }) {
  const inner = (
    <>
      {label}
      {btnArrow && (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
          <path d={btnArrow} />
        </svg>
      )}
    </>
  );

  if (href === "popup") {
    return (
      <button
        type="button"
        className={className}
        onClick={() => window.dispatchEvent(new Event("icd:open-quote-popup"))}
      >
        {inner}
      </button>
    );
  }

  return (
    <a href={href || "#"} className={className}>
      {inner}
    </a>
  );
}

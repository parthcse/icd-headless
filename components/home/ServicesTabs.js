"use client";

import { useState } from "react";

/**
 * "Creative Services" tab strip + panels (home page). Content lives in
 * ServicesSection.js; this only owns which tab is active.
 *
 * Below 768px the six tab buttons are a NATIVE horizontal scroller (overflow-x),
 * not the JS Carousel: native scrolling follows the finger 1:1 with the phone's
 * own momentum, where the carousel jumps one slot per swipe and feels stop-start.
 * The strip bleeds to the screen edges (-mx-6 px-6 = the container padding) and
 * hides its scrollbar (.no-scrollbar). From md up it's the usual 3/6-column grid.
 *
 * The `animate zoomIn` / `animate fadeUp` reveal classes sit on WRAPPERS whose
 * className never changes. src/js/common-next.js adds `start` to them straight
 * on the DOM; if they shared an element with the `active` toggle, React would
 * rewrite the className on every tab change, drop `start`, and the tab would
 * vanish back to its pre-animation opacity.
 *
 * @param {{ tabs: { id: string, label: string[], icon: React.ReactNode, panel: React.ReactNode }[] }} props
 */
export default function ServicesTabs({ tabs }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  const select = (e, id) => {
    setActiveId(id);
    // A half-visible tab at the strip's edge slides fully into view when tapped.
    e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  };

  return (
    <>
      {/* data-lenis-prevent: let the browser, not Lenis, own scrolling inside the strip. */}
      <div
        className="tabs no-scrollbar -mx-6 flex gap-4 overflow-x-auto overscroll-x-contain px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-2 md:overflow-visible md:px-0 lg:grid-cols-6 text-center font-22 leading-tight pb-space-mini xl:pb-14"
        data-lenis-prevent
      >
        {tabs.map((tab) => {
          const active = tab.id === activeId;
          return (
            <div key={tab.id} className="animate zoomIn w-[42%] shrink-0 min-[480px]:w-[29%] md:w-auto">
              <button
                type="button"
                className={`tab-btn${active ? " active" : ""} group h-full w-full cursor-pointer small transition-all duration-500 font-semibold px-[0.5em] py-[1em] md:p-[1em] hover:bg-[linear-gradient(0deg,rgb(27,27,27)_50%,rgba(255,255,255,0)_100%)] border-b-2 border-white/10 hover:border-primary`}
                aria-controls={tab.id}
                aria-pressed={active}
                onClick={(e) => select(e, tab.id)}
              >
                <div className="icon group-hover:text-primary font-48 mb-[0.5em] md:mb-[0.3em] transition-all duration-500 group-hover:-translate-y-2">
                  {tab.icon}
                </div>
                <p className="text-[1rem] leading-[1.3rem] md:text-[1em] md:leading-[inherit]">
                  {tab.label[0]} <br />
                  {tab.label[1]}
                </p>
              </button>
            </div>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div key={tab.id} id={tab.id} className={`tab-content${tab.id === activeId ? " active" : ""}`}>
          <div className="animate fadeUp">{tab.panel}</div>
        </div>
      ))}
    </>
  );
}

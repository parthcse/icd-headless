"use client";

import { useState } from "react";
import Carousel from "@/components/common/Carousel";

// Tabs visible per breakpoint. Fractions leave a peek of the next tab as a swipe
// hint; below 360px it drops to 2.1 so "Development" still fits its slot.
// Module-level so it keeps one identity across renders (a Carousel effect dependency).
const TAB_SLIDES = { 0: 2.1, 360: 2.4, 480: 3.4 };

/**
 * "Creative Services" tab strip + panels (home page). Content lives in
 * ServicesSection.js; this only owns which tab is active.
 *
 * Below 768px the six tab buttons are a swipeable slider (a 2x3 grid of big
 * buttons pushed the panel far down the screen); from md up they're the usual
 * grid. `loop={false}` matters: loop clones are `inert`, so a looping strip would
 * show buttons that can't be tapped.
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

  return (
    <>
      <Carousel
        mobileOnly
        loop={false}
        nav={false}
        responsive={TAB_SLIDES}
        gap={8}
        className="tabs text-center font-22 leading-tight pb-space-mini xl:pb-14"
        stageClassName="md:grid-cols-3 lg:grid-cols-6 md:gap-2"
      >
        {tabs.map((tab) => {
          const active = tab.id === activeId;
          return (
            <div key={tab.id} className="animate zoomIn h-full">
              <button
                type="button"
                className={`tab-btn${active ? " active" : ""} group h-full w-full cursor-pointer small transition-all duration-500 font-semibold px-[0.5em] py-[1em] md:p-[1em] hover:bg-[linear-gradient(0deg,rgb(27,27,27)_50%,rgba(255,255,255,0)_100%)] border-b-2 border-white/10 hover:border-primary`}
                aria-controls={tab.id}
                aria-pressed={active}
                onClick={() => setActiveId(tab.id)}
              >
                <div className="icon group-hover:text-primary font-48 mb-[0.3em] transition-all duration-500 group-hover:-translate-y-2">
                  {tab.icon}
                </div>
                <p>
                  {tab.label[0]} <br />
                  {tab.label[1]}
                </p>
              </button>
            </div>
          );
        })}
      </Carousel>

      {tabs.map((tab) => (
        <div key={tab.id} id={tab.id} className={`tab-content${tab.id === activeId ? " active" : ""}`}>
          <div className="animate fadeUp">{tab.panel}</div>
        </div>
      ))}
    </>
  );
}

"use client";

import { useState } from "react";

// Bullet with the "Label : text" part bolded (matches the live job copy format).
function BulletItem({ text }) {
  const idx = text.indexOf(" : ");
  const label = idx > 0 ? text.slice(0, idx) : null;
  const rest = idx > 0 ? text.slice(idx + 3) : text;
  return (
    <li className="flex gap-2.5">
      <svg viewBox="0 0 20 20" fill="currentColor" className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.415l-7.5 7.6a1 1 0 0 1-1.424 0l-3.5-3.55a1 1 0 1 1 1.424-1.404l2.788 2.826 6.788-6.883a1 1 0 0 1 1.418-.004Z" />
      </svg>
      <span>{label ? (<><strong className="font-semibold text-white">{label}:</strong> {rest}</>) : rest}</span>
    </li>
  );
}

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">{children}</span>
);

export default function CareerOpenings({ openings, applyUrl }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {openings.map((job, i) => {
        const isOpen = openIndex === i;
        const hasMeta = job.experience || job.location || job.type;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-colors duration-300 ${
              isOpen
                ? "border-primary/40 bg-gradient-to-br from-primary/[0.08] to-transparent"
                : "border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-primary/30"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="min-w-0">
                <span className={`block font-22 font-semibold leading-snug transition-colors ${isOpen ? "text-primary" : ""}`}>{job.title}</span>
                {hasMeta && (
                  <span className="mt-2.5 flex flex-wrap gap-2">
                    {job.experience && <Badge>{job.experience}</Badge>}
                    {job.location && <Badge>{job.location}</Badge>}
                    {job.type && <Badge>{job.type}</Badge>}
                  </span>
                )}
              </span>
              <span
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 bg-primary text-white"
                    : "bg-gradient-to-br from-primary/25 to-primary/[0.05] text-primary ring-1 ring-inset ring-primary/25"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            <div className={`grid transition-[grid-template-rows,opacity] duration-[400ms,300ms] ease-in-out ${isOpen ? "[grid-template-rows:1fr] opacity-100" : "[grid-template-rows:0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="space-y-5 border-t border-white/10 px-5 pb-6 pt-5 leading-relaxed text-white/75 sm:px-6">
                  {job.about && <p>{job.about}</p>}
                  {job.sections.map((sec, k) => (
                    <div key={k}>
                      <h4 className="mb-2.5 font-semibold text-white">{sec.heading}</h4>
                      <ul className="space-y-2">
                        {sec.items.map((it, m) => <BulletItem key={m} text={it} />)}
                      </ul>
                    </div>
                  ))}
                  {applyUrl && (
                    <div className="pt-1">
                      <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Apply for this role
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

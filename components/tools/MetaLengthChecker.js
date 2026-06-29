"use client";

import { useEffect, useMemo, useState } from "react";

// Google's rough rendering limits (desktop).
const TITLE = { min: 50, max: 60, px: 600, font: "700 20px Arial" };
const DESC = { min: 120, max: 158, px: 920, font: "400 14px Arial" };

// Measure rendered pixel width the way Google does (character counts alone lie —
// "WWWW" is far wider than "iiii"). Uses a single reused canvas.
let _canvas;
function measurePx(text, font) {
  if (typeof document === "undefined" || !text) return 0;
  _canvas = _canvas || document.createElement("canvas");
  const ctx = _canvas.getContext("2d");
  ctx.font = font;
  return Math.round(ctx.measureText(text).width);
}

function statusOf(chars, cfg) {
  if (chars === 0) return "empty";
  if (chars < cfg.min) return "short";
  if (chars > cfg.max) return "over";
  return "good";
}

const STATUS_TEXT = {
  empty: "text-muted",
  short: "text-amber-400",
  good: "text-green-500",
  over: "text-red-500",
};
const STATUS_BAR = {
  empty: "bg-white/15",
  short: "bg-amber-400",
  good: "bg-green-500",
  over: "bg-red-500",
};
const STATUS_LABEL = {
  empty: "Start typing…",
  short: "A little short",
  good: "Looks great",
  over: "Too long — Google may truncate",
};

function breadcrumb(link) {
  if (!link) return "https://example.com";
  try {
    const u = new URL(link.startsWith("http") ? link : `https://${link}`);
    const parts = u.pathname.split("/").filter(Boolean);
    return `${u.protocol}//${u.hostname}${parts.length ? " › " + parts.join(" › ") : ""}`;
  } catch {
    return link;
  }
}

function Meter({ label, chars, px, cfg }) {
  const status = statusOf(chars, cfg);
  const pct = Math.min(100, (chars / cfg.max) * 100);
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="font-semibold">{label}</span>
        <span className={`text-sm font-semibold ${STATUS_TEXT[status]}`}>{STATUS_LABEL[status]}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full transition-all duration-200 ${STATUS_BAR[status]}`} style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-1.5 flex justify-between text-sm text-muted">
        <span>
          <span className={STATUS_TEXT[status]}>{chars}</span> / {cfg.max} characters
        </span>
        <span>
          <span className={STATUS_TEXT[status]}>{px}</span> / {cfg.px} px
        </span>
      </div>
    </div>
  );
}

export default function MetaLengthChecker() {
  const [company, setCompany] = useState("Icecube Digital");
  const [title, setTitle] = useState("Meta Length Checker - Free SEO Title & Description Tool");
  const [link, setLink] = useState("https://www.icecubedigital.com/meta-length-checker/");
  const [description, setDescription] = useState(
    "Optimize your meta titles and descriptions with our free meta length checker. Preview your Google result and stay within the ideal character and pixel limits."
  );

  // Pixel width needs the browser canvas, which doesn't exist during SSR. Measure
  // only after mount so the first client render matches the server (both 0) and
  // we avoid a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const titlePx = useMemo(() => (mounted ? measurePx(title, TITLE.font) : 0), [title, mounted]);
  const descPx = useMemo(() => (mounted ? measurePx(description, DESC.font) : 0), [description, mounted]);

  const inputCls =
    "w-full rounded-lg border border-[#2d2d2d] bg-[#1c1c1c] px-4 py-3 outline-none transition-colors focus:border-primary";

  return (
    <section className="full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48 font-normal">Title Tag &amp; Meta Description</h3>
          <h2 className="main-title">Length Checker Tool</h2>
          <p className="mx-auto max-w-3xl">This tool updates as you type. Add your content and preview your result instantly.</p>
        </div>

        <div className="grid animate fadeUp gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Inputs */}
          <div className="flex flex-col gap-5 border border-[#272727] bg-black-light p-6 lg:p-8">
            <div>
              <label htmlFor="ml-company" className="mb-1.5 block font-semibold">Company Name</label>
              <input id="ml-company" type="text" className={inputCls} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your brand name" />
            </div>
            <div>
              <label htmlFor="ml-title" className="mb-1.5 block font-semibold">Meta Title</label>
              <input id="ml-title" type="text" className={inputCls} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Your page title…" />
            </div>
            <div>
              <label htmlFor="ml-link" className="mb-1.5 block font-semibold">Page URL</label>
              <input id="ml-link" type="text" className={inputCls} value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://example.com/page" />
            </div>
            <div>
              <label htmlFor="ml-desc" className="mb-1.5 block font-semibold">Meta Description</label>
              <textarea id="ml-desc" rows={4} className={`${inputCls} resize-none`} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Your meta description…" />
            </div>
          </div>

          {/* Preview + meters */}
          <div className="flex flex-col gap-6">
            {/* Google SERP preview (light card, like real search results) */}
            <div className="rounded-xl bg-white p-5 shadow-lg shadow-black/30">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Google preview</p>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f1f3f4] text-[11px] font-bold text-gray-600">
                  {(company || "•").trim().charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-[13px] font-medium text-[#202124]">{company || "Company Name"}</p>
                  <p className="truncate text-[12px] text-[#4d5156]">{breadcrumb(link)}</p>
                </div>
              </div>
              <h3 className="mt-1.5 truncate text-[20px] leading-snug text-[#1a0dab]">{title || "Your meta title appears here"}</h3>
              <p className="mt-1 line-clamp-2 text-[14px] leading-snug text-[#4d5156]">
                {description || "Your meta description appears here. Keep it within the ideal length so Google shows it in full."}
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-5 border border-[#272727] bg-black-light p-6 lg:p-7">
              <Meter label="Meta Title" chars={title.length} px={titlePx} cfg={TITLE} />
              <Meter label="Meta Description" chars={description.length} px={descPx} cfg={DESC} />
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-sm text-muted">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> Ideal length</span>
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400" /> A bit short</span>
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-500" /> Too long</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

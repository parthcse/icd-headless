"use client";

// Glyph-only brand marks (the letter/symbol itself, no filled circle/square bg),
// each with its own viewBox so the path isn't distorted.
const NETWORKS = [
  {
    key: "facebook",
    label: "Share on Facebook",
    href: (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    viewBox: "0 0 320 512",
    icon: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
  },
  {
    key: "x",
    label: "Share on X",
    href: (u, t) => `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
    viewBox: "0 0 24 24",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    key: "linkedin",
    label: "Share on LinkedIn",
    href: (u, t) => `https://www.linkedin.com/shareArticle?mini=true&url=${u}&title=${t}`,
    viewBox: "0 0 24 24",
    icon: "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3 8.5h3.9V22H3zM9.5 8.5h3.7v1.84h.05c.52-.94 1.8-1.94 3.7-1.94 3.96 0 4.7 2.45 4.7 5.64V22h-3.9v-6.13c0-1.46-.03-3.35-2.04-3.35-2.05 0-2.36 1.6-2.36 3.25V22H9.5z",
  },
  {
    key: "pinterest",
    label: "Share on Pinterest",
    href: (u, t) => `https://pinterest.com/pin/create/button/?url=${u}&description=${t}`,
    viewBox: "0 0 384 512",
    icon: "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.8 0 154.8-104.1 154.8-197.7C384 71.3 298.2 6.5 204 6.5z",
  },
];

export default function BlogShare({ url, title }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const open = (e, href) => {
    e.preventDefault();
    window.open(href, "share", "width=640,height=560,noopener,noreferrer");
  };

  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-5">
      <span className="font-semibold">Share this article</span>

      <div className="flex items-center gap-2.5">
        {NETWORKS.map((n) => (
          <a
            key={n.key}
            href={n.href(u, t)}
            onClick={(e) => open(e, n.href(u, t))}
            aria-label={n.label}
            title={n.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg viewBox={n.viewBox} fill="currentColor" className="h-[17px] w-auto" aria-hidden="true">
              <path d={n.icon} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

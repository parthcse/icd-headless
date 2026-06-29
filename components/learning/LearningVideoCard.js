"use client";

import { useState } from "react";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 translate-x-0.5" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

/**
 * Lite YouTube card — shows the thumbnail + play button and only loads the
 * heavy iframe after the visitor clicks (keeps the listing page fast).
 */
export default function LearningVideoCard({ videoId, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-110">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
      <h3 className="font-22 mt-4 font-semibold leading-snug">{title}</h3>
    </div>
  );
}

"use client";

import { useState } from "react";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 translate-x-0.5" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function TestimonialVideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
            title={`${video.name} — video testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.name}'s video testimonial`}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
              alt={`${video.name} testimonial`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/35" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-110">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-lg font-bold text-primary">
          {video.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="font-semibold leading-tight">{video.name}</p>
          {video.role && <p className="text-sm text-muted">{video.role}</p>}
        </div>
      </div>
    </div>
  );
}

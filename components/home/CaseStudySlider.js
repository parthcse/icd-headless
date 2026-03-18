"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

function truncate(text, maxWords = 30) {
  if (!text) return "";
  const clean = text.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
  const words = clean.split(" ");
  if (words.length <= maxWords) return clean;
  return words.slice(0, maxWords).join(" ") + "...";
}

export default function CaseStudySlider({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".cs-next",
          prevEl: ".cs-prev",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-2"
      >
        {items.map((item) => {
          const imgSrc = item.featuredImage?.node?.sourceUrl;
          const alt = item.featuredImage?.node?.altText || item.title;
          const desc = truncate(item.content, 30);

          return (
            <SwiperSlide key={item.databaseId}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group/card rounded-2xl border border-zinc-800 bg-zinc-950/70 overflow-hidden h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-[16px] font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  {desc && (
                    <p className="text-[13px] text-zinc-400 leading-relaxed line-clamp-3">
                      {desc}
                    </p>
                  )}
                  <a
                    href={item.uri || "#"}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Read More
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className="cs-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-black/80 border border-zinc-700 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-200 opacity-0 group-hover:opacity-100">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="cs-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-black/80 border border-zinc-700 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-200 opacity-0 group-hover:opacity-100">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

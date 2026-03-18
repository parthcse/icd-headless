"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

export default function TestimonialSlider({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".tm-next",
          prevEl: ".tm-prev",
        }}
        pagination={{ clickable: true, el: ".tm-pagination" }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((item) => {
          const imgSrc = item.featuredImage?.node?.sourceUrl;
          const alt = item.featuredImage?.node?.altText || item.title;
          const quote = stripHtml(item.content);
          const designation = item.designation || "";

          return (
            <SwiperSlide key={item.databaseId}>
              <figure className="flex flex-col h-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-zinc-800 shrink-0 border-2 border-orange-500/30">
                    {imgSrc ? (
                      <Image
                        src={imgSrc}
                        alt={alt}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-600 text-lg font-bold">
                        {item.title?.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-white">{item.title}</p>
                    {designation && (
                      <p className="text-[12px] text-zinc-400 mt-0.5">{designation}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4 text-orange-400 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-[14px] text-zinc-300 leading-relaxed flex-1">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button className="tm-prev w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-200">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="tm-pagination flex gap-2" />
        <button className="tm-next w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-200">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

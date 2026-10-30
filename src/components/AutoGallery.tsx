/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

export function AutoGallery({
  slides,
  slideLabel,
  perPage = 3,
  interval = 3500,
}: {
  slides: Slide[];
  slideLabel: string;
  perPage?: number;
  interval?: number;
}) {
  const pages: Slide[][] = [];
  for (let i = 0; i < slides.length; i += perPage) pages.push(slides.slice(i, i + perPage));
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (pages.length < 2) return;
    const id = window.setInterval(() => setPage((p) => (p + 1) % pages.length), interval);
    return () => window.clearInterval(id);
  }, [pages.length, interval]);

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((group, gi) => (
            <div key={gi} className="w-full shrink-0 grid grid-cols-3 gap-2 md:gap-4 px-0.5">
              {group.map((slide) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {pages.length > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {pages.map((_, gi) => (
            <button
              key={gi}
              type="button"
              aria-label={`${slideLabel} ${gi + 1}`}
              onClick={() => setPage(gi)}
              className={`h-3 rounded-full transition-all ${
                gi === page ? "w-8 bg-[var(--brand-orange)]" : "w-3 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

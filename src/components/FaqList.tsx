"use client";

import { useState } from "react";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 divide-y divide-stone-100 overflow-hidden">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="w-full flex items-center justify-between text-left px-4 md:px-5 py-3.5 gap-3 hover:bg-stone-50/60 transition-colors"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span
                className={`font-semibold text-sm md:text-[15px] leading-snug ${
                  isOpen
                    ? "text-[var(--brand-orange)]"
                    : "text-[var(--brand-green)]"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 bg-[var(--brand-orange)] text-white"
                    : "bg-[var(--brand-cream)] text-[var(--brand-green)]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 md:px-5 pb-4 text-sm text-foreground/75 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

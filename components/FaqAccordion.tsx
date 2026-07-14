"use client";

import { useState } from "react";
import type { Faq } from "@/lib/data";

export default function FaqAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: Faq[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="divide-y divide-falah-border border-y border-falah-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-btn-${i}`;
        return (
          <div key={item.question}>
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg font-semibold text-falah-text">
                {item.question}
              </span>
              <span
                className={`flex-none text-xl text-falah-accentSoft transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-falah-subtext">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

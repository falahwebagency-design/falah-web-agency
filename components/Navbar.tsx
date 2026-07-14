"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-falah-bg/90 backdrop-blur border-b border-falah-border" : ""
      }`}
    >
      <div className="h-[3px] w-full bg-gradient-to-r from-falah-accent via-falah-accentSoft to-falah-amber opacity-90" />
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-falah-accent to-falah-amber font-display text-base font-bold text-white shadow-lg shadow-falah-accent/20">
            F
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-falah-text">
            Falah
          </span>
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-sm text-falah-subtext transition hover:text-falah-text"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-falah-accent to-falah-amber transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow hidden rounded-full bg-gradient-to-r from-falah-accent to-[#5B45E0] px-5 py-2.5 text-sm font-semibold text-white sm:inline-block"
          >
            Book your free call
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-falah-border text-falah-text md:hidden"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-falah-border bg-falah-bg/95 px-6 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-falah-subtext"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-falah-accent to-[#5B45E0] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book your free call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

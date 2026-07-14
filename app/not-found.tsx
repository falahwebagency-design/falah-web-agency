import Link from "next/link";
import type { Metadata } from "next";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-falah-accent/10 blur-[130px]" />

      <p className="eyebrow mb-6">404</p>
      <h1 className="mx-auto max-w-lg font-display text-4xl font-semibold leading-tight text-falah-text sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-falah-subtext">
        You might have followed an old link or mistyped the URL. The page
        you&apos;re looking for has either moved or was never here.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="btn-glow rounded-full bg-gradient-to-r from-falah-accent to-[#5B45E0] px-7 py-3.5 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
        <a
          href={whatsappLink("Hi, I need help finding something on your site.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-falah-border px-7 py-3.5 text-sm font-semibold text-falah-text transition hover:border-falah-accentSoft hover:text-falah-accentSoft"
        >
          Contact us
        </a>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-falah-subtext">
        <Link href="/#services" className="hover:text-falah-accentSoft">
          Services
        </Link>
        <Link href="/#work" className="hover:text-falah-accentSoft">
          Work
        </Link>
        <Link href="/about" className="hover:text-falah-accentSoft">
          About
        </Link>
        <Link href="/faq" className="hover:text-falah-accentSoft">
          FAQ
        </Link>
        <Link href="/contact" className="hover:text-falah-accentSoft">
          Contact
        </Link>
      </div>
    </section>
  );
}

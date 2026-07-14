import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

const stats = [
  { value: "40+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "1.2s", label: "Avg. load time" },
  { value: "3–6wk", label: "Typical delivery" },
];

const avatars = [
  "https://images.unsplash.com/photo-1758518727888-ffa196002e59?fm=jpg&q=70&w=200&auto=format&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1649768996403-455e21e6e4ec?fm=jpg&q=70&w=200&auto=format&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1569925444984-9e2e5fc3d1fb?fm=jpg&q=70&w=200&auto=format&fit=crop&crop=faces",
];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 sm:pt-52 sm:pb-40">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fm=jpg&q=80&w=2400&auto=format&fit=crop"
          alt="Designer working on a website layout on a laptop"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-falah-accent/45 via-falah-bg/45 to-falah-amber/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_38%,rgba(7,8,13,0.94),rgba(7,8,13,0.6)_45%,rgba(7,8,13,0.18)_78%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-falah-bg via-transparent to-falah-bg/35" />
      </div>
      <div className="grain absolute inset-0 -z-10" />
      <svg
        className="pointer-events-none absolute -right-24 top-24 hidden h-[420px] w-[420px] opacity-50 lg:block"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 150 C 20 120, 30 70, 70 55 C 100 43, 110 75, 90 90 C 70 105, 55 90, 65 70 C 75 50, 110 45, 130 65 C 150 85, 140 130, 110 145"
          stroke="#B7A6FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={1}
          className="stroke-draw"
        />
      </svg>
      <div className="relative mx-auto grid max-w-content gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="eyebrow mb-6">Falah Web Agency</p>
          <h1 className="max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-falah-text sm:text-6xl">
            Websites that make people{" "}
            <span className="gradient-text">trust you</span> before they call
            you.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-falah-subtext">
            We design and build sites for Pakistani and international
            businesses that turn visitors into inquiries — fast pages, clear
            messaging, and search visibility built in from day one, not
            bolted on after launch.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow rounded-full bg-gradient-to-r from-falah-accent to-[#5B45E0] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Book your free call
            </a>
            <Link
              href="/#work"
              className="rounded-full border border-falah-border px-7 py-3.5 text-sm font-semibold text-falah-text transition hover:border-falah-accentSoft hover:text-falah-accentSoft"
            >
              See the work
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-falah-bg object-cover"
                />
              ))}
            </div>
            <div className="text-sm text-falah-subtext">
              <span className="font-semibold text-falah-text">4.9/5</span>{" "}
              average client rating &middot; 40+ projects shipped
            </div>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-falah-text">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest2 text-falah-subtext">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-falah-accent/25 via-transparent to-falah-amber/20 blur-2xl" />
          <div className="absolute -top-6 -right-5 z-10 flex items-center gap-2 rounded-full border border-falah-border bg-falah-surface/95 px-4 py-2.5 shadow-xl backdrop-blur">
            <span className="text-falah-amber">★</span>
            <span className="text-xs font-medium text-falah-subtext">
              <span className="font-semibold text-falah-text">SEO</span> built
              in, not bolted on
            </span>
          </div>
          <div className="animate-floatY rounded-2xl bg-gradient-to-br from-falah-accent/40 via-falah-border to-falah-amber/30 p-[1px] shadow-2xl shadow-black/40">
            <div className="overflow-hidden rounded-2xl bg-falah-surface">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#171034] px-3 py-2.5">
                <span className="h-2 w-2 rounded-full bg-falah-accent" />
                <span className="h-2 w-2 rounded-full bg-falah-amber" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="ml-3 rounded-full bg-white/5 px-3 py-0.5 text-[10px] text-falah-subtext">
                  falahwebagency.com
                </span>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1639170952854-16636715af61?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                alt="A professionally designed website interface open on a laptop screen"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-xl border border-falah-border bg-falah-surface/95 px-4 py-3 shadow-xl backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-falah-accent/15 text-falah-accentSoft">
              ✓
            </span>
            <div className="text-xs leading-tight">
              <p className="font-semibold text-falah-text">Design → Launch</p>
              <p className="text-falah-subtext">in 3–6 weeks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { footerNav, legalNav, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-falah-surface py-16 text-falah-subtext">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-falah-accent to-falah-amber font-display text-sm font-bold text-white">
                F
              </span>
              <span className="font-display text-lg font-semibold text-falah-text">
                Falah
              </span>
            </Link>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed">
              Websites engineered to generate trust, leads, and revenue.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-falah-subtext/70">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-falah-accentSoft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-falah-subtext/70">
              Services
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>Website design & development</li>
              <li>Next.js development</li>
              <li>WordPress development</li>
              <li>SEO</li>
              <li>Maintenance</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-falah-subtext/70">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-falah-accentSoft">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-falah-accentSoft">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-falah-accentSoft"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-falah-border pt-8 text-xs text-falah-subtext/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {legalNav.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-falah-accentSoft">
                {item.label}
              </Link>
            ))}
          </div>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

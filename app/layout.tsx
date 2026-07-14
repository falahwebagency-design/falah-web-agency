import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — Websites built to earn trust and leads`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} — Websites built to earn trust and leads`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Websites built to earn trust and leads`,
    description: site.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: site.domain,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.domain,
    email: site.email,
    telephone: site.phone,
    areaServed: ["Pakistan", "United States", "United Kingdom"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    sameAs: [`https://wa.me/${site.whatsapp}`],
    makesOffer: [
      "Website design & development",
      "Next.js development",
      "WordPress development",
      "Landing pages",
      "E-commerce development",
      "SEO",
      "Website maintenance",
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

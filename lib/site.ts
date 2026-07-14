export const site = {
  name: "Falah Web Agency",
  tagline: "Success that lasts.",
  domain: "https://falahwebagency.com",
  description:
    "Falah Web Agency designs and builds fast, search-optimized websites for Pakistani and international businesses — turning visitors into inquiries with custom Next.js and WordPress development, SEO, and ongoing site care.",
  email: "falahwebagency@gmail.com",
  phone: "+92 335 6976972",
  phoneDisplay: "0335 6976972",
  whatsapp: "923356976972",
  whatsappMessage: "Hi Falah Web Agency, I'd like to book a free call.",
  founder: "Taha Ikram",
  locations: ["Lahore", "Karachi", "Islamabad"],
  keywords: [
    "web design agency Pakistan",
    "Next.js development agency",
    "WordPress development Pakistan",
    "website design Lahore",
    "SEO agency Pakistan",
    "small business website design",
    "landing page design",
    "e-commerce website development",
  ],
};

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Results", href: "/#results" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

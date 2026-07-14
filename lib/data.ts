export type Service = {
  tag: string;
  outcome: string;
  body: string;
};

export const services: Service[] = [
  {
    tag: "Website design & development",
    outcome: "A site that looks like it costs more than it did.",
    body: "Custom-designed, built to your business — never a recycled template.",
  },
  {
    tag: "Next.js development",
    outcome: "Pages that load before your visitor loses patience.",
    body: "Modern, fast, and built to scale as your traffic grows.",
  },
  {
    tag: "WordPress development",
    outcome: "A site your team can update without calling us.",
    body: "Clean, editable builds for clients who want to manage content themselves.",
  },
  {
    tag: "Landing pages",
    outcome: "One page, one goal, built to convert.",
    body: "Focused pages for campaigns, launches, or a single offer.",
  },
  {
    tag: "E-commerce",
    outcome: "A store that makes checkout easy, not an obstacle.",
    body: "Product pages, payments, and inventory built for real buying behavior.",
  },
  {
    tag: "SEO",
    outcome: "Found by the customers already searching for you.",
    body: "Technical SEO and content structure built in, not sold separately.",
  },
  {
    tag: "Maintenance",
    outcome: "A site that stays fast, secure, and online.",
    body: "Ongoing updates so your website is never something you have to worry about.",
  },
  {
    tag: "Performance optimization",
    outcome: "Fix the slow site you already have.",
    body: "Audits and rebuilds to bring load times and Core Web Vitals under control.",
  },
  {
    tag: "Strategy",
    outcome: "Clarity before code.",
    body: "We define what the site needs to achieve before we design a single screen.",
  },
];

export const industries = [
  "Healthcare",
  "Restaurants",
  "E-commerce",
  "Real estate",
  "Professional services",
  "Local businesses",
];

export type ProcessStep = {
  number: string;
  title: string;
  items: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    items: [
      "Understand your business & customers",
      "Audit what's currently working (or not)",
      "Define the goal of the site",
    ],
  },
  {
    number: "02",
    title: "Design",
    items: [
      "Map the structure and user flow",
      "Design the visual identity",
      "Review and refine with you",
    ],
  },
  {
    number: "03",
    title: "Build",
    items: [
      "Develop on Next.js",
      "Build in SEO fundamentals",
      "Test across devices & speed",
    ],
  },
  {
    number: "04",
    title: "Launch",
    items: ["Final QA and approval", "Go live", "Handover & ongoing support"],
  },
];

export const comparison = [
  {
    typical: "Templates, customized just enough",
    falah: "Custom design, built for your business",
  },
  {
    typical: "Goes quiet after the deposit",
    falah: "You know what's happening, every step",
  },
  {
    typical: "Design first, strategy never",
    falah: "Strategy defines the design, not the other way around",
  },
  {
    typical: "SEO sold as an add-on later",
    falah: "SEO built in from the first line of code",
  },
];

export const coreValues = [
  {
    title: "Professionalism",
    body: "Every project handled the way we'd want a vendor to handle ours.",
  },
  {
    title: "Honesty",
    body: "If something won't work for your business, we say so before we build it.",
  },
  {
    title: "Discipline",
    body: "Deadlines and scope are commitments, not suggestions.",
  },
  {
    title: "Attention to detail",
    body: "The pixel, the copy line, and the load time all get the same care.",
  },
  {
    title: "Business-first thinking",
    body: "Every design decision is judged by whether it helps you get customers.",
  },
  {
    title: "Transparency",
    body: "You always know what's been done, what's next, and why.",
  },
];

export const problems = [
  {
    title: "It's slow",
    body: "Every extra second before your page loads is a visitor deciding you don't take your business seriously.",
  },
  {
    title: "It says nothing",
    body: 'A homepage full of stock photos and "welcome to our company" tells a visitor nothing about why they should choose you.',
  },
  {
    title: "It's invisible",
    body: "If it isn't built for search from the start, your best customers are finding your competitor instead of you.",
  },
  {
    title: "It doesn't earn trust",
    body: "No proof, no clarity, no next step. Visitors leave the way they arrived — unconvinced.",
  },
];

export const caseStudies = [
  {
    tag: "Dental",
    image:
      "https://images.unsplash.com/photo-1704455306251-b4634215d98f?fm=jpg&q=75&w=1000&auto=format&fit=crop",
    imageAlt: "Modern dental clinic interior",
    title: "A clinic that stopped losing patients to Google",
    body: "Booking requests up, phone calls down — patients now book online instead of calling to ask basic questions.",
  },
  {
    tag: "Food",
    image:
      "https://images.unsplash.com/photo-1752758059740-fd250168138e?fm=jpg&q=75&w=1000&auto=format&fit=crop",
    imageAlt: "Modern restaurant interior",
    title: "A restaurant menu that finally loads on mobile",
    body: "Page load cut from 6 seconds to under 1.5 — the difference between a hungry visitor waiting or leaving.",
  },
  {
    tag: "Beauty",
    image:
      "https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?fm=jpg&q=75&w=1000&auto=format&fit=crop",
    imageAlt: "Modern beauty studio interior",
    title: "A studio site that finally matched the work",
    body: "A portfolio-first redesign that turned Instagram followers into booked appointments.",
  },
];

export const results = [
  {
    tag: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?fm=jpg&q=80&w=900&auto=format&fit=crop",
    imageAlt: "Modern medical clinic reception",
    title: "Clinic rebuild, Lahore",
    body: "Full redesign focused on speed and a clearer booking path.",
    metricLabel: "Load time",
    metricValue: "6.1s → 1.2s",
    delta: "−80%",
  },
  {
    tag: "Restaurants",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=80&w=900&auto=format&fit=crop",
    imageAlt: "Restaurant interior with warm lighting",
    title: "Menu & site relaunch, Karachi",
    body: "Simplified navigation and mobile-first ordering flow.",
    metricLabel: "Bounce rate",
    metricValue: "68% → 26%",
    delta: "−42pts",
  },
  {
    tag: "Studios",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?fm=jpg&q=80&w=900&auto=format&fit=crop",
    imageAlt: "Creative studio workspace",
    title: "Portfolio & SEO rebuild, Islamabad",
    body: "Rebuilt for search visibility and a stronger inquiry form.",
    metricLabel: "Inquiries / month",
    metricValue: "12 → 47",
    delta: "+280%",
  },
];

export const testimonials = [
  {
    quote:
      "They asked about our patients before they asked about colors. That told me everything.",
    name: "Dr. Sana Malik",
    role: "Clinic Owner, Lahore",
    image:
      "https://images.unsplash.com/photo-1758518727888-ffa196002e59?fm=jpg&q=70&w=200&auto=format&fit=crop&crop=faces",
  },
  {
    quote:
      "First agency that explained why the old site was slow instead of just redesigning it and hoping.",
    name: "Bilal Ahmed",
    role: "Restaurant Owner, Karachi",
    image:
      "https://images.unsplash.com/photo-1649768996403-455e21e6e4ec?fm=jpg&q=70&w=200&auto=format&fit=crop&crop=faces",
  },
  {
    quote: "Communication was the difference. I always knew what stage we were at.",
    name: "Ayesha Raza",
    role: "Studio Owner, Islamabad",
    image:
      "https://images.unsplash.com/photo-1569925444984-9e2e5fc3d1fb?fm=jpg&q=70&w=200&auto=format&fit=crop&crop=faces",
  },
  {
    quote:
      "Our booking requests doubled in six weeks. The site paid for itself before the invoice was even due.",
    name: "Dr. Sana Malik",
    role: "Clinic Owner, Lahore",
    image:
      "https://images.unsplash.com/photo-1758518727888-ffa196002e59?fm=jpg&q=70&w=200&auto=format&fit=crop&crop=faces",
  },
  {
    quote:
      "They treated our small restaurant like it mattered as much as a big client would. It showed in the details.",
    name: "Bilal Ahmed",
    role: "Restaurant Owner, Karachi",
    image:
      "https://images.unsplash.com/photo-1649768996403-455e21e6e4ec?fm=jpg&q=70&w=200&auto=format&fit=crop&crop=faces",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on scope — a landing page and a full e-commerce build aren't priced the same. We give you a fixed quote after understanding what you need, not a generic price list.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most sites take 3–6 weeks from kickoff to launch, depending on complexity and how quickly we get content and feedback from you.",
  },
  {
    question: "Do you handle SEO?",
    answer:
      "Yes — SEO fundamentals are built into every site by default: fast load times, proper structure, and metadata. Ongoing SEO strategy is available as an add-on.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We start with an audit of what's already there, keep what's working, and rebuild what isn't.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes, through a monthly maintenance plan covering updates, backups, and small changes, so your site stays fast and secure without you managing it.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes — alongside our Pakistani clients, we work regularly with businesses in the US, UK, and elsewhere, all communication remote and async-friendly.",
  },
  {
    question: "What information do you need to get started?",
    answer:
      "A short brief on your business, your goals for the site, any existing branding, and examples of sites you like or dislike. We turn that into a proposal within 2 business days.",
  },
  {
    question: "Who owns the website once it's built?",
    answer:
      "You do. Once the final invoice is paid, the code, content, and domain access are entirely yours — there's no lock-in to keep working with us.",
  },
];

export const founderTimeline = [
  {
    label: "Year one",
    title: "Freelancing, one client at a time",
    body: "Taha started out building small sites for local businesses, learning what actually gets a client a phone call — not just a compliment.",
  },
  {
    label: "Year two",
    title: "Going deep on SEO",
    body: "A good-looking site with no visibility is invisible. He specialized in search, learning how to make a small business rank against much bigger competitors.",
  },
  {
    label: "Year three",
    title: "Moving to Next.js",
    body: "Speed became the priority. The shift to Next.js meant faster sites, better Core Web Vitals, and fewer trade-offs between design and performance.",
  },
  {
    label: "Today",
    title: "Founding Falah",
    body: "Falah was built to combine all three — design, speed, and search — into one standard, instead of treating them as separate services.",
  },
];

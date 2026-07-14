const items = [
  "More trust",
  "More leads",
  "More customers",
  "Less guesswork",
];

export default function TrustStrip() {
  return (
    <div className="overflow-hidden border-y border-falah-border bg-falah-surface py-4">
      {/* Duplicate the set so CSS -50% translateX creates a seamless loop */}
      <div className="flex w-max animate-marquee gap-10">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm uppercase tracking-widest2 text-falah-text/70"
          >
            {text} <span className="text-falah-amber">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

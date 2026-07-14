export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-xl ${className}`}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-falah-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-sm text-falah-subtext">{description}</p>
      )}
    </div>
  );
}

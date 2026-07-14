export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative border-b border-falah-border pt-40 pb-20 sm:pt-48 sm:pb-24">
      <div className="grain absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-falah-text sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-falah-subtext">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

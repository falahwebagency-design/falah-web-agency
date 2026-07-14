export default function Meaning() {
  return (
    <section className="bg-falah-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-5">The name</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-falah-text sm:text-5xl">
            Falah.
          </h2>
          <p className="mt-2 font-display text-xl italic text-falah-amber">
            Success that lasts.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-5 text-lg leading-relaxed text-falah-subtext">
          <p>
            Not the kind of success that shows up in a launch-week screenshot
            and fades by the following month. The kind that compounds — built
            on a site that keeps earning trust long after the invoice is
            paid.
          </p>
          <p>
            That&apos;s the standard we hold every project to. We&apos;re not
            measuring ourselves by how a homepage looks the day it ships.
            We&apos;re measuring it by the calls it&apos;s still generating a
            year later.
          </p>
        </div>
      </div>
    </section>
  );
}

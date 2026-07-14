export default function MissionVision() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-10 px-6 sm:grid-cols-2">
        <div className="card-hover rounded-2xl border border-falah-border p-10">
          <p className="eyebrow mb-4">Mission</p>
          <p className="font-display text-2xl font-semibold leading-snug text-falah-text">
            Build websites that make small and growing businesses impossible
            to overlook.
          </p>
        </div>
        <div className="card-hover rounded-2xl border border-falah-border p-10">
          <p className="eyebrow mb-4">Vision</p>
          <p className="font-display text-2xl font-semibold leading-snug text-falah-text">
            To be the agency Pakistani businesses point to as proof that
            local work can compete anywhere in the world.
          </p>
        </div>
      </div>
    </section>
  );
}

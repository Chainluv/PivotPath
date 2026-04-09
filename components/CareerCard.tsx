type CareerCardProps = {
  title: string;
  salary: string;
  reason: string;
  steps: string[];
  funding: string[];
  jobs: string[];
};

export default function CareerCard({
  title,
  salary,
  reason,
  steps,
  funding,
  jobs,
}: CareerCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">
            Recommended Path
          </p>
          <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm">
          <p className="text-white/50">Estimated Salary</p>
          <p className="mt-1 font-medium text-white">{salary}</p>
        </div>
      </div>

      <p className="mt-6 max-w-4xl text-base leading-7 text-white/72">{reason}</p>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <h4 className="text-base font-semibold">How to get started</h4>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-white/70">
            {steps.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-[7px] h-2 w-2 rounded-full bg-cyan-300" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <h4 className="text-base font-semibold">Funding directions</h4>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-white/70">
            {funding.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[7px] h-2 w-2 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <h4 className="text-base font-semibold">Example fresh opportunities</h4>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-white/70">
            {jobs.map((job) => (
              <li key={job} className="flex gap-3">
                <span className="mt-[7px] h-2 w-2 rounded-full bg-cyan-300" />
                <span>{job}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

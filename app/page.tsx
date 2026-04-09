import InputForm from "@/components/InputForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2937_0%,_#0b0f17_35%,_#05070b_100%)] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              Career Pivot Discovery
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Find your next career path, funding options, and real opportunities.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              PivotPath helps adults explore second-career options, discover grants
              and scholarships, and uncover real job paths without digging through
              scattered websites.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-white/60">Explore</p>
                <p className="mt-1 text-base font-medium">Second-career paths</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-white/60">Discover</p>
                <p className="mt-1 text-base font-medium">Scholarships & grants</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-white/60">Filter</p>
                <p className="mt-1 text-base font-medium">Fresh opportunities only</p>
              </div>
            </div>
          </div>

          <div>
            <InputForm />
          </div>
        </div>
      </section>
    </main>
  );
}

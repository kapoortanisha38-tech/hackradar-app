export default function Hero() {
  return (
    <section className="min-h-[85vh] bg-[#0B0E14] text-white px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
          ● 1,284 hackathons currently being tracked
        </p>

        <h1 className="mt-8 max-w-3xl text-5xl md:text-7xl font-bold leading-tight">
          Never Miss a <span className="text-cyan-300">Hackathon</span> Again.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-8">
          Discover hackathons from Unstop, Devfolio, Devpost, HackerEarth and more — aggregated into one place. Track deadlines, find teammates, and win more opportunities.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-cyan-300 px-7 py-4 font-bold text-black hover:bg-cyan-200">
            Scan the Radar →
          </button>

          <button className="rounded-xl border border-gray-700 px-7 py-4 font-bold text-gray-300 hover:bg-gray-900">
            See how it works
          </button>
        </div>

        <div className="mt-16 flex flex-wrap gap-12">
          <div>
            <h2 className="text-4xl font-bold">1,284</h2>
            <p className="text-gray-500">Active hackathons</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">₹38.6 Cr</h2>
            <p className="text-gray-500">Prize money tracked</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">6</h2>
            <p className="text-gray-500">Sources unified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
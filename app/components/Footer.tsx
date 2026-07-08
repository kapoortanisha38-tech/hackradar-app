export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black px-8 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">HackRadar</h2>
          <p className="mt-2 text-sm text-gray-500">
            Discover, track, and prepare for hackathons smarter.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
          <a href="#">Discover</a>
          <a href="#">Dashboard</a>
          <a href="#">Teams</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-sm text-gray-600">
        © 2026 HackRadar. Built for students.
      </p>
    </footer>
  );
}
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-black text-white border-b border-gray-800">
      <h1 className="text-3xl font-bold text-cyan-400">
        HackRadar
      </h1>

      <div className="flex gap-4">
        <button className="px-5 py-2 rounded-lg border border-gray-700">
          Log In
        </button>

        <button className="px-5 py-2 rounded-lg bg-cyan-400 text-black font-semibold">
          Get Started Free
        </button>
      </div>
    </nav>
  );
}
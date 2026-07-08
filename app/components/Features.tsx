const features = [
  {
    icon: "🎯",
    title: "Smart Recommendations",
    desc: "Get hackathons suggested based on your skills, interests, and goals.",
  },
  {
    icon: "🔔",
    title: "Deadline Alerts",
    desc: "Track closing dates so you never miss an important registration again.",
  },
  {
    icon: "🔍",
    title: "Powerful Search",
    desc: "Search hackathons by domain, mode, difficulty, location, and prize pool.",
  },
  {
    icon: "👥",
    title: "Team Finder",
    desc: "Find teammates with matching skills for upcoming hackathons.",
  },
  {
    icon: "📊",
    title: "Personal Dashboard",
    desc: "Save opportunities, track progress, and manage your hackathon journey.",
  },
  {
    icon: "🤖",
    title: "AI Mentor",
    desc: "Get AI-powered project ideas, preparation tips, and submission guidance.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-gray-800 bg-[#0B0E14] px-8 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold">Why students use HackRadar</h2>
        <p className="mt-2 text-gray-400">
          Everything you need to discover, track, and prepare for hackathons.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-800 bg-[#11151D] p-6 hover:border-cyan-400/40"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
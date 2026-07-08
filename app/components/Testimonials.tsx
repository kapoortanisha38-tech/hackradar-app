const testimonials = [
  {
    quote:
      "HackRadar helped me find hackathons I would have completely missed otherwise.",
    name: "Riya Kapoor",
    role: "CSE Student",
  },
  {
    quote:
      "The platform makes it easier to track deadlines and compare opportunities in one place.",
    name: "Aman Singh",
    role: "Full-stack Developer",
  },
  {
    quote:
      "I like how clean the interface is. It feels useful for students preparing for hackathons.",
    name: "Priya Verma",
    role: "UI/UX Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-gray-800 bg-[#0B0E14] px-8 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold">
          Built for students who hate missing out
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-800 bg-[#11151D] p-6"
            >
              <p className="text-amber-400">★★★★★</p>
              <p className="mt-4 leading-7 text-gray-300">“{item.quote}”</p>
              <div className="mt-6">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
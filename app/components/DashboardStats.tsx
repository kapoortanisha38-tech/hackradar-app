import { hackathons } from "../data/hackathons";
import { calculateMatchScore } from "../utils/calculateMatchScore";

type DashboardStatsProps = {
  resumeSkills: string[];
};

export default function DashboardStats({ resumeSkills }: DashboardStatsProps) {
  const matchScores = hackathons.map((hackathon) =>
    calculateMatchScore(resumeSkills, hackathon.requiredSkills).score
  );

  const bestMatch =
    matchScores.length > 0 ? Math.max(...matchScores) : 0;

  const averageMatch =
    matchScores.length > 0
      ? Math.round(
          matchScores.reduce((total, score) => total + score, 0) /
            matchScores.length
        )
      : 0;

  const recommendedCount = matchScores.filter((score) => score >= 70).length;

  const stats = [
    {
      icon: "📄",
      number: resumeSkills.length,
      label: "Resume skills found",
    },
    {
      icon: "⭐",
      number: `${bestMatch}%`,
      label: "Best AI match",
    },
    {
      icon: "📊",
      number: `${averageMatch}%`,
      label: "Average match score",
    },
    {
      icon: "🎯",
      number: recommendedCount,
      label: "Recommended hackathons",
    },
  ];

  return (
    <section className="bg-[#0B0E14] px-8 py-20 text-white border-t border-gray-800">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold">Your Opportunity Dashboard</h2>

        <p className="mt-2 text-gray-400">
          A personalized summary based on your uploaded resume skills.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-800 bg-[#11151D] p-6"
            >
              <div className="text-2xl">{stat.icon}</div>
              <h3 className="mt-5 text-3xl font-bold">{stat.number}</h3>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 text-gray-300">
          {resumeSkills.length > 0 ? (
            <>
              Your resume currently matches best with{" "}
              <span className="font-bold text-cyan-300">{bestMatch}%</span>{" "}
              compatibility. Keep improving your missing skills to unlock more
              recommended hackathons.
            </>
          ) : (
            <>
              Upload your resume to generate personalized dashboard insights and
              AI match scores.
            </>
          )}
        </div>
      </div>
    </section>
  );
}
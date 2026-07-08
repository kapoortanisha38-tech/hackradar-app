"use client";

type ProfileProps = {
  resumeSkills: string[];
};

export default function Profile({ resumeSkills }: ProfileProps) {
  const programmingSkills = ["python", "java", "c++", "javascript", "typescript"];
  const frameworkSkills = ["react", "next.js", "node.js", "firebase"];
  const aiSkills = ["ai", "ml", "machine learning", "genai"];
  const cloudSkills = ["cloud", "azure", "aws"];

  const normalizedSkills = resumeSkills.map((skill) => skill.toLowerCase());

  const countMatches = (category: string[]) => {
    return category.filter((skill) => normalizedSkills.includes(skill)).length;
  };

  const programmingScore = countMatches(programmingSkills);
  const frameworkScore = countMatches(frameworkSkills);
  const aiScore = countMatches(aiSkills);
  const cloudScore = countMatches(cloudSkills);

  const totalScore =
    programmingScore + frameworkScore + aiScore + cloudScore;

  const getStrengthLevel = () => {
    if (totalScore >= 8) return "Advanced";
    if (totalScore >= 4) return "Intermediate";
    if (totalScore >= 1) return "Beginner";
    return "Not analyzed yet";
  };

  return (
    <section className="bg-[#0B0E14] px-8 py-20 text-white border-t border-gray-800">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold">👤 My AI Profile</h2>

        <p className="mt-3 text-gray-400">
          Resume-based skill profile and AI readiness summary.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-[#11151D] p-6">
            <h3 className="text-2xl font-bold">Resume Strength</h3>

            <p className="mt-4 text-4xl font-bold text-cyan-300">
              {getStrengthLevel()}
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Based on skills extracted from your uploaded resume.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#11151D] p-6">
            <h3 className="text-2xl font-bold">Skills Found</h3>

            <p className="mt-4 text-4xl font-bold text-cyan-300">
              {resumeSkills.length}
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Total skills detected from your resume.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-800 bg-[#11151D] p-6">
          <h3 className="text-2xl font-bold">Skill Categories</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl bg-[#161B25] p-4">
              <p className="text-sm text-gray-400">Programming</p>
              <p className="mt-2 text-2xl font-bold">{programmingScore}</p>
            </div>

            <div className="rounded-xl bg-[#161B25] p-4">
              <p className="text-sm text-gray-400">Frameworks</p>
              <p className="mt-2 text-2xl font-bold">{frameworkScore}</p>
            </div>

            <div className="rounded-xl bg-[#161B25] p-4">
              <p className="text-sm text-gray-400">AI/ML</p>
              <p className="mt-2 text-2xl font-bold">{aiScore}</p>
            </div>

            <div className="rounded-xl bg-[#161B25] p-4">
              <p className="text-sm text-gray-400">Cloud</p>
              <p className="mt-2 text-2xl font-bold">{cloudScore}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-800 bg-[#11151D] p-6">
          <h3 className="text-2xl font-bold">Extracted Skills</h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {resumeSkills.length > 0 ? (
              resumeSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-400">
                Upload your resume to generate your AI profile.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
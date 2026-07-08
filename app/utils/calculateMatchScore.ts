export function calculateMatchScore(
  resumeSkills: string[],
  requiredSkills: string[]
) {
  const normalizedResumeSkills = resumeSkills.map((skill) =>
    skill.toLowerCase().trim()
  );

  const normalizedRequiredSkills = requiredSkills.map((skill) =>
    skill.toLowerCase().trim()
  );

  const matchedSkills = normalizedRequiredSkills.filter((skill) =>
    normalizedResumeSkills.includes(skill)
  );

  const missingSkills = normalizedRequiredSkills.filter(
    (skill) => !normalizedResumeSkills.includes(skill)
  );

  const score =
    normalizedRequiredSkills.length === 0
      ? 0
      : Math.round((matchedSkills.length / normalizedRequiredSkills.length) * 100);

  return {
    score,
    matchedSkills,
    missingSkills,
  };
}
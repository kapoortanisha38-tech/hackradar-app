export function calculateMatch(
  userSkills: string[],
  hackathonTags: string[]
) {
  const matchedSkills = hackathonTags.filter((tag) =>
    userSkills.some(
      (skill) => skill.toLowerCase() === tag.toLowerCase()
    )
  );

  const score = Math.round(
    (matchedSkills.length / hackathonTags.length) * 100
  );

  return {
    score,
    matchedSkills,
  };
}
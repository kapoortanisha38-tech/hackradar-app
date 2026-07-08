type RecommendationInput = {
  score: number;
  matchedSkills: string[];
  prize: string;
  mode: string;
};

export function getRecommendationReason({
  score,
  matchedSkills,
  prize,
  mode,
}: RecommendationInput) {
  let level = "Low Match";
  let confidence = "Low";

  if (score >= 70) {
    level = "Excellent Match";
    confidence = "High";
  } else if (score >= 40) {
    level = "Good Match";
    confidence = "Medium";
  }

  const reasons: string[] = [];

  if (matchedSkills.length > 0) {
    reasons.push(`Matches your skills: ${matchedSkills.join(", ")}`);
  }

  if (prize.includes("$") || prize.includes("₹")) {
    reasons.push("Has a strong prize opportunity");
  }

  if (mode === "Online") {
    reasons.push("Easy to join because it is online");
  }

  if (score < 40) {
    reasons.push("You may need to learn more related skills");
  }

  return {
    level,
    confidence,
    reasons,
  };
}
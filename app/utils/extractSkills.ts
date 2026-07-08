const knownSkills = [
  "AI",
  "ML",
  "Machine Learning",
  "Deep Learning",
  "Python",
  "Java",
  "C++",
  "C",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Firebase",
  "MongoDB",
  "SQL",
  "HTML",
  "CSS",
  "Tailwind",
  "Git",
  "GitHub",
  "Cloud",
  "AWS",
  "UI/UX",
  "Figma",
];

export function extractSkillsFromText(text: string) {
  const lowerText = text.toLowerCase();

  return knownSkills.filter((skill) =>
    lowerText.includes(skill.toLowerCase())
  );
}
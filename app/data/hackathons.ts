export interface Hackathon {
  id: number;
  title: string;
  organizer: string;
  mode: string;
  location: string;
  prize: string;
  deadline: string;
  teamSize: string;
  tags: string[];
  requiredSkills: string[];
  applyLink: string;
}

export const hackathons: Hackathon[] = [
  {
    id: 1,
    title: "AI Innovation Challenge",
    organizer: "Google",
    mode: "Online",
    location: "Worldwide",
    prize: "$10,000",
    deadline: "15 July 2026",
    teamSize: "4 Members",
    tags: ["AI", "ML", "GenAI"],
    requiredSkills: ["Python", "Machine Learning", "AI", "React"],
    // AI Innovation Challenge
applyLink: "https://developers.google.com/community"
  },
  {
    id: 2,
    title: "Smart India Hackathon",
    organizer: "Government of India",
    mode: "Offline",
    location: "India",
    prize: "₹1,00,000",
    deadline: "30 July 2026",
    teamSize: "6 Members",
    tags: ["Web", "IoT", "AI"],
    requiredSkills: ["React", "Firebase", "JavaScript", "Python"],
    // Smart India Hackathon
applyLink: "https://www.sih.gov.in/"
  },
  {
    id: 3,
    title: "Microsoft Imagine Cup",
    organizer: "Microsoft",
    mode: "Online",
    location: "Global",
    prize: "$100,000",
    deadline: "20 August 2026",
    teamSize: "3 Members",
    tags: ["Cloud", "AI", "Web"],
    requiredSkills: ["Azure", "Python", "AI", "Cloud"],
   // Microsoft Imagine Cup
applyLink: "https://imaginecup.microsoft.com/"
  },
  {
    id: 4,
    title: "Open Source Sprint",
    organizer: "GitHub",
    mode: "Online",
    location: "Worldwide",
    prize: "$5,000",
    deadline: "5 August 2026",
    teamSize: "5 Members",
    tags: ["Open Source", "React", "Node"],
    requiredSkills: ["React", "Node", "Git", "JavaScript"],
    // Open Source Sprint
applyLink: "https://github.com/events",
  },
];
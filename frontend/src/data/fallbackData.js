// Shown if the backend API isn't reachable yet, so the site still works
// during local development or before you've deployed/seeded the database.

export const fallbackProjects = [
  {
    _id: "fallback-1",
    title: "Food Ordering Chatbot (BudgetBite)",
    description:
      "A full-stack food ordering website built with Node.js and Express, featuring multi-cuisine restaurant menus priced in INR, a floating chatbot widget with voice input for placing orders, and an admin dashboard to manage listings.",
    techStack: ["Node.js", "Express", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/keerthuv11",
    featured: true,
  },
  {
    _id: "fallback-2",
    title: "Smart Campus Student Safety & Emergency System",
    description:
      "A system concept for improving safety on campus, aimed at helping students quickly reach help and alerting relevant contacts during emergencies.",
    techStack: ["Java", "Networking Concepts"],
    githubUrl: "https://github.com/keerthuv11",
    featured: true,
  },
  {
    _id: "fallback-3",
    title: "BudgetBite Console & Browser Chatbot (Java)",
    description:
      "A Java-based console chatbot built for a college project, later extended into a browser-based version using Java's built-in HTTP server with no external dependencies.",
    techStack: ["Java"],
    githubUrl: "https://github.com/keerthuv11",
    featured: false,
  },
];

export const fallbackSkills = [
  { _id: "s1", category: "Languages", name: "Java" },
  { _id: "s2", category: "Languages", name: "JavaScript" },
  { _id: "s3", category: "Frontend", name: "HTML/CSS" },
  { _id: "s4", category: "Frontend", name: "React" },
  { _id: "s5", category: "Backend", name: "Node.js" },
  { _id: "s6", category: "Backend", name: "Express" },
  { _id: "s7", category: "Database", name: "MongoDB" },
  { _id: "s8", category: "Tools", name: "Git" },
  { _id: "s9", category: "Tools", name: "VS Code" },
];

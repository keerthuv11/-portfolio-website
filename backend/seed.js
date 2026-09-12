// Populates the database with your projects and skills.
// Run once after setting up your .env: npm run seed

require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");
const Skill = require("./models/Skill");

const projects = [
  {
    title: "Food Ordering Chatbot (BudgetBite)",
    description:
      "A full-stack food ordering website built with Node.js and Express, featuring multi-cuisine restaurant menus priced in INR, a floating chatbot widget with voice input for placing orders, and an admin dashboard to manage listings.",
    techStack: ["Node.js", "Express", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/keerthuv11",
    featured: true,
    order: 1,
  },
  {
    title: "Smart Campus Student Safety & Emergency System",
    description:
      "A system concept for improving safety on campus, aimed at helping students quickly reach help and alerting relevant contacts during emergencies.",
    techStack: ["Java", "Networking Concepts"],
    githubUrl: "https://github.com/keerthuv11",
    featured: true,
    order: 2,
  },
  {
    title: "BudgetBite Console & Browser Chatbot (Java)",
    description:
      "A Java-based console chatbot for a college project, later extended into a browser-based version using Java's built-in HTTP server with no external dependencies.",
    techStack: ["Java"],
    githubUrl: "https://github.com/keerthuv11",
    featured: false,
    order: 3,
  },
];

const skills = [
  { category: "Languages", name: "Java", order: 1 },
  { category: "Languages", name: "JavaScript", order: 2 },
  { category: "Frontend", name: "HTML/CSS", order: 1 },
  { category: "Frontend", name: "React", order: 2 },
  { category: "Backend", name: "Node.js", order: 1 },
  { category: "Backend", name: "Express", order: 2 },
  { category: "Database", name: "MongoDB", order: 1 },
  { category: "Tools", name: "Git", order: 1 },
  { category: "Tools", name: "VS Code", order: 2 },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB, seeding data...");

    await Project.deleteMany({});
    await Skill.deleteMany({});

    await Project.insertMany(projects);
    await Skill.insertMany(skills);

    console.log("Seed complete: projects and skills added.");
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
}

seed();

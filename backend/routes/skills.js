const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");

// GET /api/skills - list all skills, grouped by category on the frontend
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, order: 1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch skills" });
  }
});

// POST /api/skills - add a skill
router.post("/", async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: "Could not create skill" });
  }
});

// DELETE /api/skills/:id
router.delete("/:id", async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ error: "Skill not found" });
    res.json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ error: "Could not delete skill" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET /api/projects - list all projects, featured first
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ featured: -1, order: 1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch projects" });
  }
});

// GET /api/projects/:id - single project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch project" });
  }
});

// POST /api/projects - add a new project (use for your own admin updates)
router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: "Could not create project" });
  }
});

// PUT /api/projects/:id - update a project
router.put("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: "Could not update project" });
  }
});

// DELETE /api/projects/:id - remove a project
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ error: "Could not delete project" });
  }
});

module.exports = router;

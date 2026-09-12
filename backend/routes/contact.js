const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST /api/contact - save a message sent from the contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message are required" });
    }
    const saved = await new Message({ name, email, message }).save();
    res.status(201).json({ message: "Message received, thank you!", id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Could not send message" });
  }
});

// GET /api/contact - view received messages (for your own use, protect this in production)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch messages" });
  }
});

module.exports = router;

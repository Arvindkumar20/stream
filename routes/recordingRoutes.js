const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const recordingsPath = path.join(__dirname, "../recordings");

// Get all recorded files
router.get("/", (req, res) => {
  fs.readdir(recordingsPath, (err, files) => {
    if (err) return res.status(500).json({ error: "Error reading recordings" });
    res.json(files);
  });
});

// Download a specific recorded file
router.get("/:filename", (req, res) => {
  const filePath = path.join(recordingsPath, req.params.filename);
  res.download(filePath);
});

module.exports = router;

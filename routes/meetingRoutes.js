const express = require("express");
const { generateMeetingLink } = require("../controllers/meetingController");

const router = express.Router();

// Generate a meeting link
router.get("/generate", generateMeetingLink);

module.exports = router;

const express = require("express");
const { getParticipants } = require("../controllers/participantController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getParticipants());
});

module.exports = router;

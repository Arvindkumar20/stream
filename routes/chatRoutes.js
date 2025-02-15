const express = require("express");
const { getMessages } = require("../controllers/chatController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getMessages());
});

module.exports = router;

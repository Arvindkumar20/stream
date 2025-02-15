const express = require("express");
const { getScreenSharingUsers } = require("../controllers/screenShareController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getScreenSharingUsers());
});

module.exports = router;

const { v4: uuidv4 } = require("uuid");

const generateMeetingLink = (req, res) => {
  const meetingId = uuidv4(); // Unique Meeting ID
  const meetingLink = `${req.protocol}://${req.get("host")}/meeting/${meetingId}`;
  res.json({ meetingId, meetingLink });
};

module.exports = { generateMeetingLink };

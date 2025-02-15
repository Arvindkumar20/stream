const { addParticipant, removeParticipant, getParticipants } = require("../controllers/participantController");

module.exports = (io, socket) => {
  socket.on("join-meeting", (username) => {
    addParticipant(username, socket.id);
    io.emit("update-participants", getParticipants());
  });

  socket.on("disconnect", () => {
    removeParticipant(socket.id);
    io.emit("update-participants", getParticipants());
  });
};

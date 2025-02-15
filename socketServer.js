const chatSocket = require("./socket/chatSocket");
const participantSocket = require("./socket/participantSocket");
const screenShareSocket = require("./socket/screenShareSocket");
const recordingSocket = require("./socket/recordingSocket");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    chatSocket(io, socket);
    participantSocket(io, socket);
    screenShareSocket(io, socket);
    recordingSocket(io, socket);

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

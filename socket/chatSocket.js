const { addMessage, getMessages } = require("../controllers/chatController");

module.exports = (io, socket) => {
  socket.on("send-message", (message) => {
    addMessage(message);
    io.emit("receive-message", message);
  });
};

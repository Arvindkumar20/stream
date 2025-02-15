const { saveRecording } = require("../controllers/recordingController");

module.exports = (io, socket) => {
  socket.on("recording-data", (data) => {
    const { fileBuffer, fileName } = data;
    saveRecording(Buffer.from(fileBuffer, "base64"), fileName);
    io.emit("recording-saved", { fileName });
  });
};

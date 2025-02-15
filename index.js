const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const meetingRoutes = require("./routes/meetingRoutes");
const chatRoutes = require("./routes/chatRoutes");
const participantRoutes = require("./routes/participantRoutes");
const screenShareRoutes = require("./routes/screenShareRoutes");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

app.use("/chat", chatRoutes);
app.use("/participants", participantRoutes);
app.use("/screen-share", screenShareRoutes);
app.use("/meeting", meetingRoutes);
require("./socketServer")(io);

server.listen(5000, () => console.log("Server running on port 5000"));

module.exports = (io, socket) => {
    // Notify all users that a user started screen sharing
    socket.on("start-screen-share", ({ userId, streamId }) => {
      io.emit("screen-share-started", { userId, streamId });
    });
  
    // Notify all users when screen sharing stops
    socket.on("stop-screen-share", ({ userId }) => {
      io.emit("screen-share-stopped", { userId });
    });
  };
  
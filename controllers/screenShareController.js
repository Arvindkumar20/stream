let screenSessions = [];

const startScreenShare = (socketId) => {
  screenSessions.push(socketId);
};

const stopScreenShare = (socketId) => {
  screenSessions = screenSessions.filter((id) => id !== socketId);
};

const getScreenSharingUsers = () => screenSessions;

module.exports = { startScreenShare, stopScreenShare, getScreenSharingUsers };

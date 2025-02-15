let participants = [];

const addParticipant = (username, socketId) => {
  participants.push({ username, socketId });
};

const removeParticipant = (socketId) => {
  participants = participants.filter((user) => user.socketId !== socketId);
};

const getParticipants = () => participants;

module.exports = { addParticipant, removeParticipant, getParticipants };

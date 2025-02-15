let messages = [];

const addMessage = (msg) => {
  messages.push(msg);
};

const getMessages = () => messages;

module.exports = { addMessage, getMessages };

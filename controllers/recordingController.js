const fs = require("fs");
const path = require("path");

const saveRecording = (fileBuffer, fileName) => {
  const filePath = path.join(__dirname, "../recordings", fileName);
  fs.writeFileSync(filePath, fileBuffer);
  return filePath;
};

module.exports = { saveRecording };

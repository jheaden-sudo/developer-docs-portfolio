const fs = require("fs");
const path = require("path");

function loadGames() {
  const filePath = path.join(__dirname, "data", "games.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(rawData);
}

module.exports = {
  loadGames
};

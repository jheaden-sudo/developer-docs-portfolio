const express = require("express");
const app = express();
const PORT = 3000;

const games = require("./data/games.json");

app.use(express.static("public"));

app.get("/games", (req, res) => {
  res.json({
    data: games
  });
});

app.listen(PORT, () => {
  console.log(`Tiny Improv API running at http://localhost:${PORT}`);
});
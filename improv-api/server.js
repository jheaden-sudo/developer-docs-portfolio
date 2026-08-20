const express = require("express");
<<<<<<< Updated upstream
const fs = require("fs");
const path = require("path");
=======
const { loadGames } = require("./gameData");

>>>>>>> Stashed changes
const app = express();
const PORT = 3000;
const gamesFilePath = path.join(__dirname, "data", "games.json");

<<<<<<< Updated upstream
let games = require("./data/games.json");

app.use(express.json());
app.use(express.static("public"));

=======
>>>>>>> Stashed changes
app.get("/games", (req, res) => {
  const games = loadGames();
  res.json({
    data: games
  });
});

app.post("/games", (req, res) => {
  const { name, description, categories, skills_practiced, player_format, notes } = req.body || {};

  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }

  const newGame = {
    id: `game_${String(games.length + 1).padStart(3, "0")}`,
    name,
    description,
    categories: Array.isArray(categories) ? categories : [],
    skills_practiced: Array.isArray(skills_practiced) ? skills_practiced : [],
    player_format: player_format || "group",
    notes: notes || ""
  };

  games = [...games, newGame];
  fs.writeFileSync(gamesFilePath, JSON.stringify(games, null, 2));

  return res.status(201).json({ data: newGame });
});

app.listen(PORT, () => {
  console.log(`Tiny Improv API running at http://localhost:${PORT}`);
});
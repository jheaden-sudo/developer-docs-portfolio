const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadGames } = require('../gameData');

test('loadGames returns the latest data from games.json', () => {
  const filePath = path.join(__dirname, '..', 'data', 'games.json');
  const original = fs.readFileSync(filePath, 'utf8');

  try {
    fs.writeFileSync(filePath, JSON.stringify([{ id: 'temp_game', name: 'Temp Game' }], null, 2));
    const games = loadGames();
    assert.deepEqual(games, [{ id: 'temp_game', name: 'Temp Game' }]);
  } finally {
    fs.writeFileSync(filePath, original);
  }
});

const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { spawn } = require('node:child_process');

let server;

async function waitForServer() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      const response = await fetch('http://127.0.0.1:3000/games');
      if (response.ok) {
        return;
      }
    } catch {
      // Ignore and retry
    }

    await new Promise(resolve => setTimeout(resolve, 100));
  }

  throw new Error('Server did not become ready in time');
}

test('POST /games adds a game and returns it', async () => {
  server = spawn(process.execPath, ['server.js'], {
    cwd: path.join(__dirname, '..'),
    stdio: ['ignore', 'pipe', 'pipe']
  });

  try {
    await waitForServer();

    const response = await fetch('http://127.0.0.1:3000/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Game',
        description: 'A game for testing',
        categories: ['warmup'],
        skills_practiced: ['listening'],
        player_format: 'pairs',
        notes: 'Created during tests'
      })
    });

    assert.equal(response.status, 201);
    const payload = await response.json();
    assert.equal(payload.data.name, 'Test Game');
    assert.equal(payload.data.player_format, 'pairs');
  } finally {
    if (server) {
      server.kill();
    }
  }
});

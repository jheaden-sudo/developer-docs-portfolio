# Tiny Improv API

This API serves a small collection of improv game ideas as JSON. It is a simple Express server that currently exposes an endpoint for retrieving available games.

An Express server is a lightweight web framework for Node.js that makes it easy to build APIs and web applications. It helps you define routes, handle requests, and send responses in a simple way.

For more information, see the official Express documentation: https://expressjs.com/

## What the API does

- Returns improv game data from the endpoint /games
- Responds with JSON so it can be used in web apps or other APIs
- Runs locally on port 3000 by default

## Available Endpoints

### GET /games

Returns a list of available improv games.

Example response:

```json
{
  "data": [
    {
      "id": "game_001",
      "name": "Yes, And Circle",
      "category": "warmup",
      "difficulty": "easy"
    }
  ]
}
```

## Requirements

- Node.js 18 or later
- npm

## How to install it

1. Open a terminal in the improv-api directory.
2. Run:

   ```bash
   npm install
   ```

## How to run it

1. Start the server with:

   ```bash
   npm start
   ```

2. Open the following URL in your browser or API client:

   ```text
   http://localhost:3000/games
   ```
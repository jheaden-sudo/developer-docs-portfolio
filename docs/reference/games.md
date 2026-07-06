# Games API Reference

## GET /games

Returns a list of available improv games.

## Request

### Endpoint

GET /games

### Example Request

curl http://localhost:3000/games

## Response

200 OK

Example response:

```
{
  "data": [
    {
      "id": "game_001",
      "name": "Yes, And Circle",
      "category": "warmup",
      "difficulty": "easy"
    },
    {
      "id": "game_002",
      "name": "Word Association Chain",
      "category": "focus",
      "difficulty": "easy"
    }
  ]
}
```

## Response Fields

| Field | Type | Description |
|---|---|---|
| id | string | Unique identifier for the game |
| name | string | Name of the improv game |
| category | string | Game category: Warm-up, Skill, Performance, Other |
| difficulty | string | Difficulty level: Beginner, Pro |

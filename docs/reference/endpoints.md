# Endpoints

## GET /games

Returns a list of available improv games.

### Example Request

GET /games

### Example Response

```json
{
  "data": [
    {
      "id": "game_001",
      "name": "Yes, And Circle",
      "description": "Players stand in a circle and tell a story one line at a time.",
      "categories": ["warmup", "skills", "teambuilding"],
      "skills_practiced": ["listening", "agreement"],
      "player_format": "group",
      "notes": "After the first round, drop saying \"Yes, and...\"."
    }
  ]
}
```

For the full field list and descriptions, see the games reference.

# Games API

## GET /games

Returns all improv games.

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
      "categories": [
        "warmup",
        "skills",
        "teambuilding"
      ],
      "skills_practiced": [
        "listening",
        "agreement"
      ],
      "player_format": "group",
      "notes": "After the first round, drop saying \"Yes, and...\"."
    }
  ]
}
```

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| name | string | Game name |
| description | string | Instructions |
| categories | array | Categories |
| skills_practiced | array | Skills learned |
| player_format | string | Recommended participation format (solo, pairs, small_group, group, everyone) |
| notes | string | Teaching notes |
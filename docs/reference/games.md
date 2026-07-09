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
      "description": "Players stand in a circle...",
      "categories": [
        "warmup",
        "skills",
        "teambuilding"
      ],
      "skills_practiced": [
        "listening",
        "agreement"
      ],
      "player_count": "whole_class",
      "notes": "After the first round..."
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
| player_count | string | Suggested group size |
| notes | string | Teaching notes |
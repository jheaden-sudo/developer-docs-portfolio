# Games API Reference

## GET /games

Returns a list of improv games.

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
      "description": "Players build on each other's ideas while practicing agreement and listening.",
      "categories": [
        "warmup",
        "skills",
        "teambuilding"
      ],
      "skills_practiced": [
        "listening",
        "agreement",
        "risk_taking"
      ],
      "player_count": "whole_class",
      "notes": "A simple starting exercise that helps students embrace unexpected ideas."
    },
    {
      "id": "game_002",
      "name": "Word Association Chain",
      "description": "Players quickly respond with related words to build momentum and spontaneity.",
      "categories": [
        "warmup",
        "focus"
      ],
      "skills_practiced": [
        "listening",
        "quick_thinking",
        "focus"
      ],
      "player_count": "small_group",
      "notes": "Great for warming up attention and encouraging responsive thinking."
    },
    {
      "id": "game_003",
      "name": "Common Ground",
      "description": "Players discover shared and opposing preferences while practicing observation and risk-taking.",
      "categories": [
        "warmup",
        "teambuilding",
        "skills"
      ],
      "skills_practiced": [
        "listening",
        "observation",
        "risk_taking",
        "bold_choices"
      ],
      "player_count": "pairs",
      "notes": "Players directly learn about each other, indirectly learn that bold choices are more fun, even if their assumption is wrong."
    },
    {
      "id": "game_004",
      "name": "I Like Biscuits",
      "description": "Arrange players in a circle, say a random phrase (like I Like Biscuits!) as you walk across the circle and hold eye contact with one person to pass focus. Players attempt to mirror the phrase and action as exactly as possible.",
      "categories": [
        "warmup",
        "teambuilding",
        "skills"
      ],
      "skills_practiced": [
        "listening",
        "observation",
        "risk_taking",
        "bold_choices"
      ],
      "player_count": "whole_class",
      "notes": "The idea is for players to copy 'exactly what you see' and let your own natural physicality change the action. It's funniest if you don't try to be funny. This is very important. Best played in a safe space where 'mistakes' are celebrated. Should make class dissolve into fits of laugher if done correctly."
    }
  ]
}
```

## Response Fields

| Field | Type | Description |
|---|---|---|
| id | string | Unique identifier for the game |
| name | string | Name of the improv game |
| description | string | Instructions |
| categories | array | Game category: warmup, skill, performance, other |
| player_count | string | Intended number of players for a session of the game. |
| notes | string | Tips for gameplay, what students should learn, what to avoid. |

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
      "description": "Players stand in a circle and tell a story one line at a time. First time, a player says yes, and... then adds their own bit to the story.",
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
      "notes": "After the first round, drop saying yes, and... correct students immediately if someone says no or but."
    },
    {
      "id": "game_002",
      "name": "Word Association Chain",
      "description": "Players stand in a circle, one player says a word, next player says an associated word, and so on.",
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
      "notes": "Note exeptionally clever word associations that satisfy the other players. After going around the circle at least once, try to repeat everything in reverse to build short-term memory recall skills. Can also play this like Categories."
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
    },
    {
      "id": "game_005",
      "name": "New Choice",
      "description": "Players learn to adapt quickly to a new reality. During a scene, a leader can tell the players to make a new choice about what they said or did.",
      "categories": [
        "performance",
        "skills"
      ],
      "skills_practiced": [
        "listening",
        "observation",
        "risk_taking",
        "bold_choices"
      ],
      "player_count": "pairs",
      "notes": "This is also good for maintaining a safe environment in the classroom. If someone says something gross (intentionally or not) immediately correct with the phrase. This game works better after several rounds of Categories."
    },
    {
      "id": "game_006",
      "name": "Categories",
      "description": "Players in a circle or line, can be directed. Players are given a category and they must name things in that category, either one at a time in a circle, or keep naming while director is pointing at them. Tell players ahead of time if repeats are allowed.",
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
      "notes": "This is the essence of the 'and' of improv itself. Play early and often. As a performer, I am constantly playing this in my mind. Do this one before 'Jump-Out' games."
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
| categories | array | warmup, skill, performance, other |
| player_count | string | Intended number of players for a session of the game. |
| notes | string | Tips for gameplay, what students should learn, what to avoid. |

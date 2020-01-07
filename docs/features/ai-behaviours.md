---
id: ai-behaviours
title: AI Behaviours
---

Completely new AI behaviours that do not exist in the vanilla game.

- Follow Lance - Follows the player lance. Used by ally or player AI lances.

## Follow Lance

You can configure the follow lance AI with the follow `settings.json` options.

```json
"AI": {
  "FollowPlayer": {
    "Target": "HeaviestMech", // HeaviestMech or LanceOrder
    "StopWhen": "OnEnemyDetected", // OnEnemyDetected, OnEnemyVisible, WhenNotNeeded
    "MaxDistanceFromTargetBeforeSprinting": 200, // Distance beyond which the ally will only sprint to catch up
    "TargetZoneRadius": 120 // The zone radius the following mech will try to get within
  }
}
```

| Property                             | Default           | Details                                                                                                |
| ------------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------ |
| Target                               | `HeaviestMech`    | `HeaviestMech` follows heaviest mech. `LanceOrder` follows units 1 (if it dies they follow unit 2 etc) |
| StopWhen                             | `OnEnemyDetected` | `OnEnemyDetected`, `OnEnemyVisible`, `WhenNotNeeded`                                                   |
| MaxDistanceFromTargetBeforeSprinting | `200`             | Distance beyond which the ally will only sprint to catch up                                            |
| TargetZoneRadius                     | `120`             | Distance to keep within of the target. 1 grid point = 24 units. Straight line check.                   |

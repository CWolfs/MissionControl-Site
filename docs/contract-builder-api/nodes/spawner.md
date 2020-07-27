---
id: spawner
title: Spawner
sidebar_label: Spawner
---

The `Spawner` node allows for creation of lance spawns in the map. There are plans to extend this to building and general object spawns but that's future functionality.

## SimpleSpawner

This node swaps the contract override's employer and target team.

| Property          | Required | Default         | Details                                                               |
| ----------------- | -------- | --------------- | --------------------------------------------------------------------- |
| Name              | true     | -               | Name of the Node that will be used for the Unity game object          |
| Type              | true     | `Spawner`       | Type of node                                                          |
| SubType           | true     | `SimpleSpawner` | Subtype of node (probably to be renamed to `SimpleLanceSpawner` soon) |
| Position          | true     | -               | First team to swap                                                    |
| Rotation          | true     | -               | Second team to swap                                                   |
| Team              | true     | -               | Second team to swap                                                   |
| Guid              | true     | -               | Second team to swap                                                   |
| SpawnPoints       | true     | -               | Second team to swap                                                   |
| SpawnPointGuids   | true     | -               | Second team to swap                                                   |
| SpawnType         | true     | -               | Second team to swap                                                   |
| AI                | true     | -               | Second team to swap                                                   |
| AlertLanceOnSpawn | true     | -               | Second team to swap                                                   |

#### Example

```json
{
  "Name": "Lance_Enemy_OpposingForce",
  "Type": "Spawner",
  "SubType": "SimpleSpawner",
  "Position": {
    "Type": "World", // World, Local
    "Value": { "x": 0, "y": 0, "z": 0 }
  },
  "Rotation": {
    "Type": "World", // World, Local
    "Value": { "x": 0, "y": 0, "z": 0 }
  },
  "Team": "Target",
  "Guid": "f426f0dc-969d-477d-81a9-d02f9e1eff79", // Must match the spawner guids in the contract .json
  "SpawnPoints": 4,
  "SpawnPointGuids": [
    "6cd3107e-0f9d-4809-ab8c-fb30faf4cd80",
    "14c58a13-96a6-4f91-a1e5-47b5d02b81d1",
    "92ea4a9a-0ea5-4445-b8ba-89a167e478de",
    "0cf6442f-d67d-41e3-a658-c5e9f564cf9e"
  ], // Must match the unit spawn guids in the contract .json
  "SpawnType": "Leopard", // Leopard, DropPod, Instant
  "AI": [
    {
      "Type": "StayInsideRegion",
      "RegionGuid": "21a03616-c88b-4edd-a9a9-b4dd54b46d6c"
    },
    {
      "Type": "MagicKnowledgeByTag",
      "Action": "Add",
      "Tags": ["Player 1"]
    },
    {
      "Type": "PrioritiseTaggedUnit",
      "Tags": ["defend_building_3b"],
      "Priority": 1
    }
  ],
  "AlertLanceOnSpawn": true
}
```

---
id: spawner
title: Spawner
sidebar_label: Spawner
---

The `Spawner` node allows for creation of lance spawns in the map. There are plans to extend this to building and general object spawns but that's future functionality.

## SimpleSpawner

This node swaps the contract override's employer and target team.

| Property              | Required | Default         | Details                                                                                                                                                                                                                                                                                                   |
| --------------------- | -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                  | true     | -               | Name of the Node that will be used for the Unity game object                                                                                                                                                                                                                                              |
| Type                  | true     | `Spawner`       | Type of node                                                                                                                                                                                                                                                                                              |
| SubType               | true     | `SimpleSpawner` | Subtype of node (probably to be renamed to `SimpleLanceSpawner` soon)                                                                                                                                                                                                                                     |
| Position              | true     | -               | Position of the lance spawner                                                                                                                                                                                                                                                                             |
| Rotation              | true     | -               | Rotation of the lance spawner                                                                                                                                                                                                                                                                             |
| Team                  | true     | -               | Team key <br/><br/>Usable: `Player`, `Target`, `TargetAlly`, `Employer`, `NeutralToAll`, `HostileToAll`                                                                                                                                                                                                   |
| Guid                  | true     | -               | A [UUIDv4](https://www.uuidgenerator.net/) that you then use in the contract json                                                                                                                                                                                                                         |
| SpawnPoints           | false    | -               | **DEPRECATED**. <br/><br/>Will be removed in the future. `SpawnPointGuids` replaces it as the number of GUIDs provided determins the number of spawn points                                                                                                                                               |
| SpawnPointGuids       | true     | -               | An array of [UUIDv4](https://www.uuidgenerator.net/)s. One GUID for each spawn point in the lance. The spawner will use this to determine how many units should exist in a lance                                                                                                                          |
| MountOn               | false    |                 | An object mapping UUID of the lance unit (see `SpawnPointGuids`) to an object scene path within the map Unity/BattleTech scene. Use BTDebug mod to inspect the scene for the path. <br/><br/>The mount target will be found and the lance unit will be placed at that location. See below for an example. |
| PreciseSpawnPoints    | false    | `false`         | If `false` (default) the unit spawn positions will snap to the nearest hex point on the grid. <br/><br/> If `true`, then the exact positions will be used, with the addition of a height check on the position specified                                                                                  |
| SpawnType             | true     | -               | The type of spawn method. <br/><br/>Usable: `Leopard`, `DropPod`, `Instant`                                                                                                                                                                                                                               |
| AI                    | true     | -               | An array of [AI orders](../ai-orders).                                                                                                                                                                                                                                                                    |
| AlertLanceOnSpawn     | true     | -               | Specifies if the lance should be on alert after they spawn. Certain behaviours in the AI depend on a lance being in alert mode, such as the main combat behaviours and hunting last scene enemies                                                                                                         |
| DefaultDetectionRange | false    | `200`           | Specify the lance's default detection range of their enemies                                                                                                                                                                                                                                              |
| Tags                  | false    | -               | Specify the tags to be applied to the lance spawner for use in results/triggers                                                                                                                                                                                                                           |

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

#### MountOn Example

```json
// Use BTDebug mod to inspect the game scene for the correct path
"MountOn": {
  "38538181-1208-4cd1-bad9-7469f2cb9478": "PlotParent/FireMission_Turrets/PlotVariant1/envPrfFndn_turretTowerMount (1)",
  "6552d0c2-b705-49b8-a4f8-5205e537db05": "PlotParent/FireMission_Turrets/PlotVariant1/envPrfFndn_turretTowerMount (2)",
  "23e3c6ad-31e3-459b-9f0c-a7f5614e4662": "PlotParent/FireMission_Turrets/PlotVariant1/envPrfFndn_turretTowerMount (4)"
}
```

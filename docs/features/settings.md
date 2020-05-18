---
id: settings
title: Settings
---

Mission Control is designed from the very beginning to be entirely configurable for every feature. Due to this, there's a large level of control the player or modder has over the settings.

- [Settings Breakdown](#settings-breakdown)
- [Random Spawns](#random-spawns)

```json
{
  "DebugMode": true,
  "VersionCheck": true,
  "DebugSkirmishMode": true,
  "DisableIfFlashpointContract": true,
  "RandomSpawns": {
    "Enable": true,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"]
  },
  "HotDrop": {
    "Enable": true,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "GuardOnHotDrop": false,
    "EvasionPipsOnHotDrop": 6,
    "IncludeEnemies": true,
    "IncludeAllyTurrets": false,
    "IncludeEnemyTurrets": false
  },
  "AdditionalLances": {
    "Enable": true,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "IsPrimaryObjectiveIn": ["SimpleBattle", "ThreeWayBattle"],
    "HideObjective": true,
    "ShowObjectiveOnLanceDetected": true,
    "AlwaysDisplayHiddenObjectiveIfPrimary": false,
    "UseElites": true,
    "UseDialogue": true,
    "SkullValueMatters": true,
    "BasedOnVisibleSkullValue": true,
    "UseGeneralProfileForSkirmish": true,
    "DisableIfFlashpointContract": true,
    "DisableWhenMaxTonnage": {
      "Enable": true,
      "Limited": false,
      "LimitedToUnder": 300
    },
    "MatchAllyLanceCountToEnemy": false,
    "DropWeightInfluence": {
      "Enable": false,
      "GlobalEnemyChanceToSpawn": 0.05,
      "GlobalAllyChanceToSpawn": 0.8,
      "EnemySpawnInfluencePerHalfSkull": 0.1,
      "AllySpawnInfluencePerHalfSkull": -0.1
    },
    "DisableAllies": false,
    "DisableEnemies": false
  },
  "ExtendedLances": {
    "Enable": true,
    "Autofill": true,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "SkipWhenTaggedWithAny": ["lance_type_solo"],
    "SkipWhenTaggedWithAll": [],
    "SkipWhenExcludeTagsContain": ["no_extended_lance"],
    "LanceSizes": {
      "5": [],
      "6": []
    }
  },
  "ExtendedBoundaries": {
    "Enable": true,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "IncreaseBoundarySizeByPercentage": 0.3,
    "Overrides": [
      {
        "MapId": "mapGeneral_frigidSteppes_iTnd",
        "ContractTypeName": "CaptureBase",
        "IncreaseBoundarySizeByPercentage": 0.75
      },
      {
        "MapId": "mapGeneral_icyOutpost_iGlc",
        "ContractTypeName": "CaptureBase",
        "IncreaseBoundarySizeByPercentage": 0.75
      },
      {
        "MapId": "mapGeneral_highPeak_iGlc",
        "ContractTypeName": "SimpleBattle",
        "IncreaseBoundarySizeByPercentage": 0.75
      },
      {
        "ContractTypeName": "FireMission",
        "IncreaseBoundarySizeByPercentage": 0.5
      },
      {
        "MapId": "mapGeneral_desertDam_aDes",
        "ContractTypeName": "SimpleBattle",
        "IncreaseBoundarySizeByPercentage": 0.55
      }
    ]
  },
  "DynamicWithdraw": {
    "Enable": true,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "MinDistanceForZone": 50,
    "MaxDistanceForZone": 400,
    "DisorderlyWithdrawalCompatibility": false
  },
  "AI": {
    "FollowPlayer": {
      "Pathfinding": "Alternative",
      "Target": "HeaviestMech",
      "StopWhen": "OnEnemyDetected",
      "MaxDistanceFromTargetBeforeSprinting": 120,
      "TargetZoneRadius": 120
    }
  },
  "Spawners": {
    "SpawnLanceAtEdgeBoundary": {
      "MinBuffer": 100,
      "MaxBuffer": 200
    }
  }
}
```

### Settings Breakdown

| Path                        | Default                        | Example | Details                                                                                         |
| --------------------------- | ------------------------------ | ------- | ----------------------------------------------------------------------------------------------- |
| DebugMode                   | `false`                        | N/A     | Enable debug logging and debug skirmish mode, if it's enabled                                   |
| DebugSkirmishMode           | `false`                        | N/A     | Enables the 'Quick Skirmish' feature                                                            |
| DisableIfFlashpointContract | `true`                         | N/A     | Disables MC for Flashpoints if `true`                                                           |
| RandomSpawns                | [Object](#random-spawns)       | N/A     | Random spawn settings                                                                           |
| HotDrop                     | [Object](#hot-drop-protection) | N/A     | Hot drop protection protects you with extra evasion and brace/guard if dropped close to enemies |
| AdditionalLances            | [Object](#additional-lances)   | N/A     | Settings for dropping extra support lances into maps (allies and enemies)                       |
| ExtendedLances              | [Object](#extended-lances)     | N/A     | Settings for controlled extra lance spawns for AI lances (e.g. clan stars)                      |
| ExtendedBoundaries          | [Object](#extended-boundaries) | N/A     | Settings for increasing the boundaries of the encounters / maps                                 |
| DynamicWithdraw             | [Object](#dynamic-withdraw)    | N/A     | Settings for having a real withdraw. A extraction point appears and you must get there          |
| AI                          | [Object](#ai)                  | N/A     | Settings for AI                                                                                 |
| Spawners                    | [Object](#spawners)            | N/A     | Settings for the spawn system                                                                   |

### Random Spawns

| Path                   | Default                      | Example                                                                                                                | Details                                                                                                                                                             |
| ---------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable                 | `true`                       | N/A                                                                                                                    | Enables the Random Spawn feature                                                                                                                                    |
| IncludeContractTypes   | All available contract types | `["Rescue", "DestroyBase"]` would limit lances to these two contract types <br /><br /> `[]` would fallback to default | When set, it overrides `ExcludeContractTypes` for this level                                                                                                        |
| `ExcludeContractTypes` | Optional                     | No contract types                                                                                                      | `["Assasinate", "CaptureBase"]` would remove these two contract types from the entire list of available contract types. <br /><br /> `[]` would fallback to default | Allows you to explicitly exclude additional lance spawns for all teams for the specified contract types. Not used if `IncludeContractTypes` is set |

_**More to come soon**_

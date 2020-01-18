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
    "IncludeContractTypes": [],
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"]
  },
  "HotDrop": {
    "Enable": true,
    "IncludeContractTypes": [],
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "IsPrimaryObjectiveIn": ["SimpleBattle", "ThreeWayBattle"],
    "GuardOnHotDrop": false,
    "EvasionPipsOnHotDrop": 6,
    "IncludeEnemies": true,
    "IncludeAllyTurrets": false,
    "IncludeEnemyTurrets": false,
    "MatchAllyLanceCountToEnemy": false
  },
  "AdditionalLances": {
    "Enable": true,
    "IncludeContractTypes": [],
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
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
    }
  },
  "ExtendedLances": {
    "Enable": true,
    "Autofill": true,
    "IncludeContractTypes": [],
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
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
      }
    ]
  },
  "DynamicWithdraw": {
    "Enable": true,
    "IncludeContractTypes": [],
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "MinDistanceForZone": 50,
    "MaxDistanceForZone": 400,
    "DisorderlyWithdrawalCompatibility": false
  },
  "AI": {
    "FollowPlayer": {
      "Target": "HeaviestMech",
      "StopWhen": "OnEnemyDetected",
      "MaxDistanceFromTargetBeforeSprinting": 120,
      "TargetZoneRadius": 120
    }
  }
}
```

### Settings Breakdown

| Path                        | Default                  | Example | Details                                                       |
| --------------------------- | ------------------------ | ------- | ------------------------------------------------------------- |
| DebugMode                   | `false`                  | N/A     | Enable debug logging and debug skirmish mode, if it's enabled |
| DebugSkirmishMode           | `false`                  | N/A     | Enables the 'Quick Skirmish' feature                          |
| DisableIfFlashpointContract | `true`                   | N/A     | Disables MC for Flashpoints if `true`                         |
| RandomSpawns                | [Object](#random-spawns) | N/A     | Random spawn settings                                         |

_**More to come soon**_

### Random Spawns

| Path                   | Default                      | Example                                                                                                                | Details                                                                                                                                                             |
| ---------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable                 | `true`                       | N/A                                                                                                                    | Enables the Random Spawn feature                                                                                                                                    |
| IncludeContractTypes   | All available contract types | `["Rescue", "DestroyBase"]` would limit lances to these two contract types <br /><br /> `[]` would fallback to default | When set, it overrides `ExcludeContractTypes` for this level                                                                                                        |
| `ExcludeContractTypes` | Optional                     | No contract types                                                                                                      | `["Assasinate", "CaptureBase"]` would remove these two contract types from the entire list of available contract types. <br /><br /> `[]` would fallback to default | Allows you to explicitly exclude additional lance spawns for all teams for the specified contract types. Not used if `IncludeContractTypes` is set |

_**More to come soon**_

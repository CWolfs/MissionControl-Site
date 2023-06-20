---
id: settings
title: Settings
---

Mission Control is designed from the very beginning to be entirely configurable for every feature. Due to this, there's a large level of control the player or modder has over the settings.

### Modpack & User Overrides

Mission Control provides many configuration options. If a modpack or user modifies more than a few it can be hard to remember what options were changed when updating to a newer version of Mission Control. To solve this problem MC supports modpack and user overrides in the form of:

- `settings.modpack.json`
- `settings.user.json`

**NOTE:** These files do not exist in the main Mission Control releases. They are designed for a modpack or user to create them.

If the above files are provided in the same directory as the `settings.json` then any settings defined in them will override it. Not all settings need to exist in these override files - only the changes a modpack or user wishes to change themselves from the default.

In order of priority/override:

```
settings.user.json --overrides--> settings.modpack.json --overrides--> settings.json
```

### Settings Example

```json
{
  "DebugMode": true,
  "VersionCheck": true,
  "EnableSkirmishMode": true,
  "DebugSkirmishMode": false,
  "EnableFlashpointOverrides": false,
  "EnableAdditionalPlayerMechsForFlashpoints": false,
  "NeverFailSimGameInFlashpoints": true,
  "EnableStoryOverrides": false,
  "EnableAdditionalPlayerMechsForStory": false,
  "RandomSpawns": {
    "Enable": true,
    "EnableForFlashpoints": true,
    "EnableForStory": false,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"]
  },
  "HotDropProtection": {
    "Enable": true,
    "EnableForFlashpoints": true,
    "EnableForStory": false,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "GuardOnHotDrop": false,
    "EvasionPipsOnHotDrop": 6,
    "IncludeEnemies": true,
    "IncludeAllyTurrets": false,
    "IncludeEnemyTurrets": false
  },
  "AdditionalLances": {
    "Enable": true,
    "EnableForFlashpoints": true,
    "EnableForStory": false,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "IsPrimaryObjectiveIn": ["SimpleBattle", "CaptureBase"],
    "ExcludeFromAutocomplete": ["DefendBase", "FireMission"],
    "HideObjective": true,
    "ShowObjectiveOnLanceDetected": true,
    "AlwaysDisplayHiddenObjectiveIfPrimary": false,
    "UseElites": true,
    "UseDialogue": true,
    "SkullValueMatters": true,
    "BasedOnVisibleSkullValue": true,
    "UseGeneralProfileForSkirmish": true,
    "DisableWhenMaxTonnage": {
      "Enable": true,
      "Limited": false,
      "LimitedToUnder": 300
    },
    "MatchAllyLanceCountToEnemy": false,
    "DropWeightInfluence": {
      "Enable": false,
      "EnemySpawnInfluencePerHalfSkullAbove": 0.1,
      "AllySpawnInfluencePerHalfSkullAbove": -0.1,
      "EnemySpawnInfluencePerHalfSkullBelow": -0.1,
      "AllySpawnInfluencePerHalfSkullBelow": 0.1
    },
    "DisableAllies": false,
    "DisableEnemies": false
  },
  "ExtendedLances": {
    "Enable": true,
    "EnableForFlashpoints": true,
    "EnableForStory": false,
    "EnableForTargetAlly": true,
    "EnableForEmployerAlly": true,
    "EnableForHostileToAll": true,
    "EnableForNeutralToAll": true,
    "Autofill": true,
    "AutofillType": "RespectEmpty",
    "AutofillUnitCopyType": "RandomInLance",
    "AutofillStartingFromContractDifficulty": 3,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "SkipWhenTaggedWithAny": ["lance_type_solo"],
    "SkipWhenTaggedWithAll": [],
    "SkipWhenExcludeTagsContain": ["mc_no_extended_lance", "no_extended_lance"],
    "ForceLanceOverrideSizeWithTag": "mc_force_extended_lance",
    "ForceLanceDefSizeWithTag": "mc_force_extended_lance",
    "LanceSizes": {
      "5": [],
      "6": []
    }
  },
  "ExtendedBoundaries": {
    "Enable": true,
    "EnableForFlashpoints": true,
    "EnableForStory": false,
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
    "EnableForFlashpoints": true,
    "EnableForStory": false,
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "MinDistanceForZone": 50,
    "MaxDistanceForZone": 288,
    "DisorderlyWithdrawalCompatibility": false
  },
  "AI": {
    "FollowPlayer": {
      "Pathfinding": "Alternative",
      "Target": "LanceOrder",
      "StopWhen": "OnEnemyDetected",
      "MaxDistanceFromTargetBeforeSprinting": 120,
      "TargetZoneRadius": 120,
      "TimeToWaitForPathfinding": 60,
      "TicksToWaitForPathfinding": 20
    }
  },
  "Spawners": {
    "SpawnLanceAtEdgeBoundary": {
      "MinBuffer": 100,
      "MaxBuffer": 200
    }
  },
  "Misc": {
    "LanceSelectionDivergenceOverride": {
      "Enable": true,
      "Divergence": 20
    },
    "ContractOverrideDataCleanupMethod": "RestoreFromCopy"
  }
}
```

### Settings Breakdown

| Path                                      | Default                          | Example | Details                                                                                                                      |
| ----------------------------------------- | -------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| DebugMode                                 | `false`                          | N/A     | Enable debug logging and debug skirmish mode, if it's enabled                                                                |
| VersionCheck                              | `true`                           | N/A     | Controls if the MC version checker runs and displays a 'You should update' popup when github MC updates                      |
| EnableSkirmishMode                        | `true`                           | N/A     | Enables Skirmish to use MC features. This is overridden by DebugSkirmishMode` if both are enabled                            |
| DebugSkirmishMode                         | `false`                          | N/A     | Enables the 'Quick Skirmish' feature and spawns the player next to the enemy lance. Takes priority over `EnableSkirmishMode` |
| EnableFlashpointOverrides                 | `false`                          | N/A     | Enables MC for Flashpoints if `true` and MC setting's have their respective `EnableForFlashpoints` enabled                   |
| EnableAdditionalPlayerMechsForFlashpoints | `false`                          | N/A     | Enables 'Bigger Drops' support for Flashpoints if `true` without the other MC features being turned on                       |
| NeverFailSimGameInFlashpoints             | `true`                           | N/A     | Allows Story Flashpoints to return to the dropship / prevent forcing the user to restart mission or load save                |
| EnableStoryOverrides                      | `false`                          | N/A     | Enables MC for Story & Restoration contracts if `true` and MC setting's have their respective `EnableForStory` enabled       |
| EnableAdditionalPlayerMechsForStory       | `false`                          | N/A     | Enables 'Bigger Drops' support for Story & Restoration contracts if `true` without the other MC features being turned on     |
| RandomSpawns                              | [Object](random-spawns.md)       | N/A     | Random spawn settings                                                                                                        |
| HotDropProtection                         | [Object](#hot-drop-protection)   | N/A     | Hot drop protection protects you with extra evasion and brace/guard if dropped close to enemies                              |
| AdditionalLances                          | [Object](#additional-lances)     | N/A     | Settings for dropping extra support lances into maps (allies and enemies)                                                    |
| ExtendedLances                            | [Object](extended-lances.md)     | N/A     | Settings for controlled extra lance spawns for AI lances (e.g. clan stars)                                                   |
| ExtendedBoundaries                        | [Object](extended-boundaries.md) | N/A     | Settings for increasing the boundaries of the encounters / maps                                                              |
| DynamicWithdraw                           | [Object](dynamic-withdraw.md)    | N/A     | Settings for having a real withdraw. A extraction point appears and you must get there                                       |
| AI                                        | [Object](#ai)                    | N/A     | Settings for AI                                                                                                              |
| Spawners                                  | [Object](#spawners)              | N/A     | Settings for the spawn system                                                                                                |

### Random Spawns

See [Random Spawn Docs](random-spawns.md).

### Hot Drop Protection

**IMPORTANT - This controls the _PROTECTION_ when a hot drop happens and not like the property suggests - _hot drops_**

| Path                 | Default  | Example           | Details                                                                                                                                                                                                                                                                                                                            |
| -------------------- | -------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable               | `true`   | N/A               | Enables the feature of hot drop protection                                                                                                                                                                                                                                                                                         |
| EnableForFlashpoints | `true`   | N/A               | Enable feature for Flashpoints if `EnableFlashpointOverrides` is `true`                                                                                                                                                                                                                                                            |
| EnableForStory       | `false`  | N/A               | Enable feature for Story if `EnableStoryOverrides` is `true`                                                                                                                                                                                                                                                                       |
| ExcludeContractTypes | Optional | No contract types | Allows you to explicitly exclude additional lance spawns for all teams for the specified contract types. Not used if `IncludeContractTypes` is set.<br /><br />`["Assasinate", "CaptureBase"]` would remove these two contract types from the entire list of available contract types. <br /><br /> `[]` would fallback to default |
| GuardOnHotDrop       | `false`  | N/A               | Enables guard/brace protection bonus in a hot drop                                                                                                                                                                                                                                                                                 |
| EvasionPipsOnHotDrop | `6`      | N/A               | Sets evasion to 6 in a hot drop                                                                                                                                                                                                                                                                                                    |
| IncludeEnemies       | `true`   | N/A               | Sets if the enemy lances should also get the protection                                                                                                                                                                                                                                                                            |
| IncludeAllyTurrets   | `false`  | N/A               | Sets if ally turrets should get the protection                                                                                                                                                                                                                                                                                     |
| IncludeEnemyTurrets  | `false`  | N/A               | Sets if enemy turrets should get the protection                                                                                                                                                                                                                                                                                    |

### Additional Lances

| Path                                  | Default                                                 | Example            | Details                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------- | ------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable                                | `true`                                                  | N/A                | Enables the feature of Additional Lances                                                                                                                                                                                                                                                                                            |
| EnableForFlashpoints                  | `true`                                                  | N/A                | Enable feature for Flashpoints if `EnableFlashpointOverrides` is `true`                                                                                                                                                                                                                                                             |
| EnableForStory                        | `false`                                                 | N/A                | Enable feature for Story if `EnableStoryOverrides` is `true`                                                                                                                                                                                                                                                                        |
| ExcludeContractTypes                  | Optional                                                | No contract types  | Allows you to explicitly exclude additional lance spawns for all teams for the specified contract types. Not used if `IncludeContractTypes` is set. <br /><br />`["Assasinate", "CaptureBase"]` would remove these two contract types from the entire list of available contract types. <br /><br /> `[]` would fallback to default |
| IsPrimaryObjectiveIn                  | `[]`                                                    | `["SimpleBattle"]` | Sets contract types where the additional lances are classed as primary objectives so they would need to be destroyed to end a mission                                                                                                                                                                                               |
| HideObjective                         | `true`                                                  | N/A                | Hides the 'Destroy Support Lance' objective                                                                                                                                                                                                                                                                                         |
| ShowObjectiveOnLanceDetected          | `true`                                                  | N/A                | If `HideObjective` is `true` then once an Additional Lance is detected in the map the objective will appear                                                                                                                                                                                                                         |
| AlwaysDisplayHiddenObjectiveIfPrimary | `false`                                                 | N/A                | If the Additional Lance is a primary objective, then always show the objective regardless of `HideObjective` and `ShowObjectiveOnLanceDetected`                                                                                                                                                                                     |
| UseElites                             | `true`                                                  | N/A                | If `true`, then in the AL configs the `EliteLances` section of the `DifficultyX.json` files will be taken into account. For your Employer - if you are an ally with them they will field elites. For the enemies, if they are an enemy of your ally (if you have one) they will field elites                                        |
| UseDialogue                           | `true`                                                  | N/A                | Controls if the ally dialogue appears when you get ally Additional Lances                                                                                                                                                                                                                                                           |
| SkullValueMatters                     | `true`                                                  | N/A                | If `true`, then the skull value of the contract will determine which of the `DifficultyX.json` files are used for the AL drops in a contract. Otherwise if `false`, the `General.json` is used.                                                                                                                                     |
| BasedOnVisibleSkullValue              | `true`                                                  | N/A                | Vanilla contract difficulty has a 'real' value and 'visible' to simulate bad intel conditions in contracts. If `true`, this uses the `DifficultyX.json` file for the visible skull/difficulty of a contract while `false` uses the 'real' skull/difficulty value.                                                                   |
| UseGeneralProfileForSkirmish          | `true`                                                  | N/A                | Uses the `General.json` difficulty AL config for Skirmish. Otherwise, it uses tries to use a difficulty profile                                                                                                                                                                                                                     |
| DisableWhenMaxTonnage                 | [Object](#additional-lances---disable-when-max-tonnage) | N/A                | Settings for disabling AL if tonnage restrictions in contracts are active and set                                                                                                                                                                                                                                                   |
| MatchAllyLanceCountToEnemy            | `false`                                                 | N/A                | When `true`, whatever enemy lance count is selected for a contract, then the allies will have that same number of lances                                                                                                                                                                                                            |
| DropWeightInfluence                   | [Object](#additional-lances---drop-weight-influence)    | N/A                | **Alternative lance drop calculation system.** Drops lances based on the player's skull rating of mechs they take into combat. Higher rating means less chance of allies and more chance of enemies. Still uses the AL configs for everything else                                                                                  |
| DisableAllies                         | `false`                                                 | N/A                | Disables AL allies from dropping regardless of other settings                                                                                                                                                                                                                                                                       |
| DisableEnemies                        | `false`                                                 | N/A                | Disables AL enemies from dropping regardless of other settings                                                                                                                                                                                                                                                                      |

### Additional Lances - Disable When Max Tonnage

| Path             | Default | Example | Details                                                                                                                                                               |
| ---------------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable           | `true`  | N/A     | Enables the feature of Disable When Max Tonnage                                                                                                                       |
| Limited          | `false` | N/A     | If `true` and if a contract is limiting / restricting the player lance at all (number of mechs or drop tonnage allowance) then AL will auto-disable for that contract |
| `LimitedToUnder` | `300`   | N/A     | If the drop tonnage limit is restricted to under 300 tons, then AL will auto disable                                                                                  |

### Additional Lances - Drop Weight Influence

| Path                                 | Default | Example | Details                                                                                                                                                                                                                                              |
| ------------------------------------ | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable                               | `false` | N/A     | Enables the feature of Drop Weight Influence                                                                                                                                                                                                         |
| EnemySpawnInfluencePerHalfSkullAbove | `0.1`   | N/A     | The modifier to apply to the normal enemy AL `Chance` for every 1/2 skull difference between player drop force drop skull rating/difficulty vs. contact skull rating/difficulty. This modifier is for when the player is stronger than the contract. |
| AllySpawnInfluencePerHalfSkullAbove  | `-0.1`  | N/A     | The modifier to apply to the normal ally AL `Chance` for every 1/2 skull difference between player drop force drop skull rating/difficulty vs. contact skull rating/difficulty. This modifier is for when the player is stronger than the contract.  |
| EnemySpawnInfluencePerHalfSkullBelow | `-0.1`  | N/A     | The modifier to apply to the normal enemy AL `Chance` for every 1/2 skull difference between player drop force drop skull rating/difficulty vs. contact skull rating/difficulty. This modifier is for when the player is weaker than the contract.   |
| AllySpawnInfluencePerHalfSkullBelow  | `0.1`   | N/A     | The modifier to apply to the normal ally AL `Chance` for every 1/2 skull difference between player drop force drop skull rating/difficulty vs. contact skull rating/difficulty. This modifier is for when the player is weaker than the contract.    |

### Extended Lances

See [Extended Lances Docs](extended-lances.md).

### Extended Boundaries

See [Extended Boundaries Docs](extended-boundaries.md).

### Dynamic Withdraw

See [Dynamic Withdraw Docs](dynamic-withdraw.md)

### AI

| Path         | Default                       | Example | Details                             |
| ------------ | ----------------------------- | ------- | ----------------------------------- |
| FollowPlayer | [Object](#ai---follow-player) | N/A     | Settings for the 'Follow Player' AI |

### AI - Follow Player

| Path                                 | Default           | Example                                                | Details                                                                                                                                                                                                |
| ------------------------------------ | ----------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Pathfinding                          | `Alternative`     | `Original` or `Alternative`                            | Pathfinder algorithm to use. `Original` is MC `v0.4.6` version and earlier. `Alternative` might be better for longer range pathfinding                                                                 |
| Target                               | `HeaviestMech`    | `HeaviestMech` or `LanceOrder`                         | Which unit should be followed by the allies?                                                                                                                                                           |
| StopWhen                             | `OnEnemyDetected` | `OnEnemyDetected`, `OnEnemyVisible` or `WhenNotNeeded` | The `Follow AI` reverts to the vanilla AI system on one of these conditions. `WhenNotNeeded` always follows the player unless the ally is within the target zone radius                                |
| MaxDistanceFromTargetBeforeSprinting | `200`             | N/A                                                    | If an ally is beyond this distance the unit its following - it will sprint to catch up                                                                                                                 |
| TargetZoneRadius                     | `120`             | N/A                                                    | A zone is created around the unit being followed of radius specified. This is used to determine if the following unit is 'close enough'. If close enough, it will do other actions instead of movement |
| TimeToWaitForPathfinding             | `60`              | N/A                                                    | Maximum time in seconds for a unit to wait for pathfinding to be ready. If this limit is reached, the pathfinding is used in whatever state it is in                                                   |
| TicksToWaitForPathfinding            | `20`              | N/A                                                    | Maximum time in ticks for a unit to wait for pathfinding to be ready. If this limit is reached, the pathfinding is used in whatever state it is in                                                     |

### Spawners - Spawn Lance At Edge Boundary

| Path      | Default | Example | Details                                                                          |
| --------- | ------- | ------- | -------------------------------------------------------------------------------- |
| MinBuffer | `100`   | N/A     | The distance that a lance _must_ spawn beyond / away from the encounter boundary |
| MaxBuffer | `200`   | N/A     | The distance that a lance _must_ spawn within / close to the encounter boundary  |

### Misc

This contains various ungrouped settings.

| Path                              | Default                                            | Example | Details                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | -------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| LanceSelectionDivergenceOverride  | [Object](#misc---lanceselectiondivergenceoverride) | N/A     | Settings for 'LanceSelectionDivergenceOverride'                                                                                                                                                                                                                                                                    |
| ContractOverrideDataCleanupMethod | `RestoreFromCopy`                                  | N/A     | Determines which method MC cleans up old data between contracts.<br /><br />`RestoreFromCopy` uses copies of data taken before MC runs and restores the copied data back into the ContractOverride.<br /><br />`ScrubData` is the old method. It scans through the ContractOverride and removes the data MC added. |

### Misc - LanceSelectionDivergenceOverride

This overrides helps fix a vanilla infinite loading issue where, in rare situations, the lance selection would fail to pick a correct lance based on the divergence value. Vanilla is set to `10` so this fix sets it to `20` and seems to work.

| Path       | Default | Example | Details                                                                                                                                                                                                                                   |
| ---------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable     | true    | N/A     | Enables the lance selection divergence override value. Original defaults are `10`.<br /><br />Any mod or modpack that uses increased custom lance difficult values (RT, for example) should disable this or experiment with higher values |
| Divergence | `20`    | N/A     | The divergence value. Vanilla or if disabled will be `10`. If enabled then will be `20` or a custom set value                                                                                                                             |

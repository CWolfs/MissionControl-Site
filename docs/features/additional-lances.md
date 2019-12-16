---
id: additional-lances
title: Additional Lances
---

Additional enemy and ally lances can be spawned in all contract types based on contract type, biome type, percentage chances, maximum limits and lance configs. These are controlled by the `settings.json` section `AdditionalLances`.

Lances are defined using a similar configuration to how they are defined in the contract `.json` files. They can be lances with specific mechs, or make use of tags for the game to select an appropriate lance.

- [Settings Breakdown](#settings-breakdown)
- [Lance Definition Breakdown](#lance-definition-breakdown)

## Settings Breakdown

```json
  "AdditionalLances": {
    "IncludeContractTypes": [],
    "ExcludeContractTypes": [],
    "LancePool": {
      "ALL": ["GENERIC_BATTLE_LANCE"]
    },
    "RewardsPerLance": [
      {
        "Type": "ContractBonusRewardFlat",
        "Value": "3000000",
      },
      {
        "Type": "ContractBonusRewardPct",
        "Value": "0.4",
      },
      {
        "Type": "ContractBonusEmployerReputation",
        "Value": "1",
      },
      {
        "Type": "ContractBonusTargetReputation",
        "Value": "-1",
      },
    ],
    "Enemy": {
      "Max": 2,
      "ExcludeContractTypes": ["Rescue"],
      "ChanceToSpawn": 0.4,
      "EliteLances": {
        "Conditions": ["IsEnemy"],
        "Suffix": "_Elite",
        "Overrides": {
          "ChanceToSpawn": 0.6
        }
      },
      "LancePool": {
        "ALL": [
          "GENERIC_BATTLE_LANCE"
        ],
        "CONTRACT_TYPE:DestroyBase": [
          "BRAWLER_LANCE", "DEFENDING_LANCE"
        ],
        "CONTRACT_TYPE:DefendBase": [
          "HEAVY_MISSILE_LANCE", "ATTACKING_LANCE"
        ],
        "BIOME:DesertParched": [
          "BBQ_MASTERS"
        ],
        "BIOME:LowlandsSpring": [
          "IM_LIKE_A_TURRET_IN_WATER_I_RUN_SO_HOT"
        ],
        "FACTION:Davion:50:99": [
          "Heavy_Davion_Battle_Lance"
        ]
      },

    },
    "Allies": {
      "Max": 1,
      "ChanceToSpawn": 0.4,
      "EliteLances": {
        "Conditions": ["IsAlly"],
        "Overrides": {
          "Max": 2,
          "ChanceToSpawn": 0.6
        }
      },
      "LancePool": {
        "ALL": [
          "GENERIC_BATTLE_LANCE"
        ],
        "CONTRACT_TYPE:DestroyBase": [
          "HEAVY_MISSILE_LANCE", "ATTACKING_LANCE"
        ],
        "CONTRACT_TYPE:DefendBase": [
          "BRAWLER_LANCE", "DEFENDING_LANCE"
        ]
      }
    }
  }
```

| Path                   | Required? | Default                                          | Example                                                                                                                                                             | Details                                                                                                                                                                                                                                                                 |
| ---------------------- | --------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IncludeContractTypes` | Optional  | All available contract types                     | `["Rescue", "DestroyBase"]` would limit lances to these two contract types <br /><br /> `[]` would fallback to default                                              | When set, it overrides `ExcludeContractTypes` for this level                                                                                                                                                                                                            |
| `ExcludeContractTypes` | Optional  | No contract types                                | `["Assasinate", "CaptureBase"]` would remove these two contract types from the entire list of available contract types. <br /><br /> `[]` would fallback to default | Allows you to explicitly exclude additional lance spawns for all teams for the specified contract types. Not used if `IncludeContractTypes` is set                                                                                                                      |
| `LancePool`            | Optional  | `ALL` situations will use `GENERIC_BATTLE_LANCE` | See the above code as a full example. <br /> Can match to `ALL`, `CONTRACT_TYPE:{key}`, `BIOME:{key}` and `FACTION:{factionKey}:{startRepRange}:{endRepRange}`      | All matched conditions will be added to one list of lance pool keys. One key per lance spawn is selected at random for the specific lance. These lance keys reference the lances in the `/lances` folder. See [Lance Definition Breakdown](#lance-definition-breakdown) |
| `RewardsPerLance`      | Optional  | Children defaults                                | -                                                                                                                                                                   | Specifies which rewards to provide for every enenmy lance that the player destroys. Max 4.                                                                                                                                                                              |
| `Enemy`                | Optional  | Children defaults                                | -                                                                                                                                                                   | Controls enemy/target specific lance details                                                                                                                                                                                                                            |
| `Allies`               | Optional  | Children defaults                                | -                                                                                                                                                                   | Controls allies/employer specific lance details                                                                                                                                                                                                                         |

**RewardsPerLance**

| Path    | Required? | Default | Example                                                                                                                 | Details     |
| ------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------- | ----------- |
| `Type`  | Optional  | N/A     | `ContractBonusRewardFlat`, `ContractBonusRewardPct`, `ContractBonusEmployerReputation`, `ContractBonusTargetReputation` | Reward type |
| `Value` | Optional  | N/A     | Value for the appropriate type                                                                                          |

**Enemy or Allies**

| Path                   | Required? | Default           | Example                               | Details                                                                                |
| ---------------------- | --------- | ----------------- | ------------------------------------- | -------------------------------------------------------------------------------------- |
| `Max`                  | Optional  | `1`               | `3`                                   | Maximum number of lances to attempt to spawn                                           |
| `ExcludeContractTypes` | Optional  | No contract types | Same as parent `ExcludeContractTypes` | Allows you to specifically exclude additional lances for a team based on contract type |
| `ChanceToSpawn`        | Optional  | `0`               | `0.3`                                 | Float number from `0` to `1` to represent percentage. `1` being 100%                   |
| `EliteLances`          | Optional  | None              | -                                     | Specifies is elite lances should spawn based on set conditions                         |
| `LancePool`            | Optional  | Empty             | Same as parent `LancePool` example    | Additive process. Adds to the parent `LancePool`                                       |

**EliteLances**

| Path         | Required? | Default | Example      | Details                                                                                                                                                                                               |
| ------------ | --------- | ------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Conditions` | Optional  | None    | `["IsAlly"]` | Checks if the player merc company is an ally or enemy to the faction. If this check is true then the settings specified in this object override the general settings. Can match `IsAlly` or `IsEnemy` |
| `Overrides`  | Optional  | None    | -            | Specifies the overrides to use if the `Conditions` return true                                                                                                                                        |

**EliteLances - Overrides**

| Path            | Required? | Default | Example | Details                                                                                                             |
| --------------- | --------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| `Max`           | Optional  | `1`     | `3`     | Overrides the generic `Max` setting. Maximum number of lances to attempt to spawn                                   |
| `ChanceToSpawn` | Optional  | `0`     | `0.3`   | Overrides the generic `ChanceToSpawn` setting. Float number from `0` to `1` to represent percentage. `1` being 100% |

## Lance Definition Breakdown

Lance definitions are defined in `MissionControl/lances` folder. Each `.json` file should be its own Mission Control lance. You can specify exact lances, or use tagged lances for the game to select an appropriate lance.

Each

```json
{
  "lanceKey": "GENERIC_BATTLE_LANCE",
  "lanceDefId": "Tagged",
  "lanceTagSet": {
    "items": ["lance_type_battle"]
  },
  "lanceExcludedTagSet": {
    "items": []
  },
  "spawnEffectTags": {
    "items": []
  },
  "lanceDifficultyAdjustment": 0,
  "unitSpawnPointOverrideList": [
    {
      "unitType": "Mech",
      "unitDefId": "UseLance",
      "unitExcludedTagSet": {
        "items": []
      },
      "spawnEffectTags": {
        "items": ["spawn_poorly_maintained_50"]
      },
      "pilotDefId": "pilotDef_InheritLance",
      "pilotTagSet": {
        "items": []
      },
      "pilotExcludedTagSet": {
        "items": []
      }
    },
    {
      "unitType": "Mech"
    },
    {
      "unitType": "Vehicle",
      "unitTagSet": {
        "items": ["unit_vehicle_carrier"]
      }
    },
    {
      "unitType": "Mech"
    }
  ]
}
```

| Path                         | Required? | Default  | Example                                                               | Details                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | --------- | -------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lanceKey`                   | Required  | N/A      | `GENERIC_BATTLE_LANCE`                                                | Key must be unique. It is used by the mod in the `settings.json` LancePools to specify the lance selection                                                                                                                                                                                                                                                                           |
| `lanceDefId`                 | Optional  | `Tagged` | `Tagged`, `Manual` or lance def id (e.g. `lancedef_arena_light_fire`) | This specifies what type of lance this definition is. `Tagged` uses the lance tags to select an appropriate lance and `Manual` allows you to manually create a specific lance. If a specific lance def id is used then it ignores the units specified below and uses the full lance definition. `lanceTagSet` and `lanceExcludedTagSet` is ignored if a specific mech def id is set. |
| `supportAutofill`            | Optional  | `true`   | -                                                                     | When set to false, if MC has `Autofill` set to `true` in `ExtendedLances` config, this specific lance config will **not** autofill to the specified `EL` lance size                                                                                                                                                                                                                  |
| `lanceTagSet`                | Required  | N/A      | `"items": ["lance_type_battle", "lance_type_notallvehicles"]`         | Allows the lance definition to specify what type of lance to select by tags                                                                                                                                                                                                                                                                                                          |
| `lanceExcludedTagSet`        | Optional  | None     |                                                                       | Allows the lance definition to exclude specific tags when selecting by tag                                                                                                                                                                                                                                                                                                           |
| `spawnEffectTags`            | Optional  | None     | `"items": ["spawn_poorly_maintained_25"]`                             | Allows the lance definition to specify spawn specific tags that apply to the entire lance                                                                                                                                                                                                                                                                                            |
| `lanceDifficultyAdjustment`  | Optional  | `0`      | `1`                                                                   | +/- this amount for the lance difficulty                                                                                                                                                                                                                                                                                                                                             |
| `unitSpawnPointOverrideList` | Required  | N/A      | Array of lance members                                                |                                                                                                                                                                                                                                                                                                                                                                                      |

**unitSpawnPointOverrideList**

| Path                  | Required? | Default                 | Example                                                                                                                                                                                          | Details                                                                                                                     |
| --------------------- | --------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `unitType`            | Optional  | `Mech`                  | `Mech`, `Vehicle` or `Turret`                                                                                                                                                                    | Type of lance member                                                                                                        |
| `unitDefId`           | Optional  | `UseLance`              | `mechDef_None`, `mechDef_InheritLance`, `vehicleDef_None`, `vehicleDef_InheritLance`, `turretDef_None`, `turretDef_InheritLance`, `Tagged` or a specific mech def id (e.g `mechdef_orion_ON1-K`) | Determines how the unit is selected. `unitTagSet` is ignored if a specific mech def id is set                               |
| `unitTagSet`          | Optional  | None                    | `"items": ["unit_vehicle_carrier"]`                                                                                                                                                              | Tags for selecting the unit if `Tagged` is selected                                                                         |
| `unitExcludedTagSet`  | Optional  | None                    |                                                                                                                                                                                                  | Allows the unit definition to exclude specific tags when selecting by tag                                                   |
| `spawnEffectTags`     | Optional  | None                    | `"items": ["spawn_poorly_maintained_25"]`                                                                                                                                                        | Allows the unit definition to specify spawn specific tags that apply to the specific lance member                           |
| `pilotDefId`          | Optional  | `pilotDef_InheritLance` | `pilotDef_InheritLance`, `UseLance`, `Tagged`, `pilot_default`, `pilot_commander` or a specific pilot def id (e.g. `pilot_d7_defender`)                                                          | Allows for selection system for pilots. `pilotTagSet` and `pilotExcludedTagSet` is ignored if a specific mech def id is set |
| `pilotTagSet`         | Optional  | None                    | `"items": ["pilot_npc_outrider"]`                                                                                                                                                                | Tags for selecting the unit if `Tagged` is selected                                                                         |
| `pilotExcludedTagSet` | Optional  | None                    |                                                                                                                                                                                                  | Allows the pilot definition to exclude specific tags when selecting by tag                                                  |

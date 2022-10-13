---
id: per-contract-overrides
title: Per-Contract Overrides
---

A Per-Contract override, named this way to avoid confusion with the vanilla BT `ContractOverride` (contract json), is an MC setting override file for individual contracts. This allows you to override specific MC settings for special procedural or flashpoint contracts.

The per-contrat overrides are stored in `MissionControl/config/Contracts` and `MissionControl/config/Flashpoints`. These folders are effectively the same and are both supported purely for an organisational reason. You could just have the `Contracts` folder if that better fits your needs.

If specific property is not defined, the usual settings will take effect.

# Settings Breakdown

**NOTE:** Filename of the per-contract override is very important. It must match the ID of the `ContactOverride` (contract json) you wish to override. For the example below the filename would be `My_Contract_ID_Example.json` to override the contract with ID `My_Contract_ID_Example`.

```json
{
  "ID": "My_Contract_ID_Example",
  "RandomSpawns": {
    "Enable": true
  },
  "HotDropProtection": {
    "Enable": true
  },
  "AdditionalLances": {
    "Enable": true,
    "EnemyLanceCount": 2,
    "EnemyLances": [
      "Damaged_Assault_Battle_Lance",
      "lancedef_vehicle_d10_dynamic_convoy"
    ],
    "AllyLanceCount": 1,
    "AllyLances": ["Generic_Light_Battle_Lance"]
  },
  "ExtendedLances": {
    "Enable": true,
    "TargetLanceSize": 6,
    "EmployerLanceSize": 5,
    "TargetAllyLanceSize": 5,
    "EmployerAllyLanceSize": 5,
    "HostileToAllLanceSize": 5,
    "NeutralToAllLanceSize": 5
  },
  "ExtendedBoundaries": {
    "Enable": true,
    "IncreaseBoundarySizeByPercentage": 0.5
  },
  "DynamicWithdraw": {
    "Enable": true
  },
  "AdditionalPlayerMechs": {
    "Enable": true
  }
}
```

## General

| Property                     | Required? | Example                  | Details                                                                                                       |
| ---------------------------- | --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| ID                           | Optional  | `My_Contract_ID_Example` | Must be the same ID as the contract you want to override. The filename should also be the same name.          |
| RandomSpawns/Enable          | Optional  | `true` or `false`        | Override Random Spawns feature to be on or off on a contract.                                                 |
| HotDropProtection/Enable     | Optional  | `true` or `false`        | Override Hot Drop Protection feature to be on or off on a contract.                                           |
| Additional Lances            | Optional  | See Table Below          | -                                                                                                             |
| Extended Lances              | Optional  | See Table Below          | -                                                                                                             |
| Extended Boundaries          | Optional  | See Table Below          | -                                                                                                             |
| DynamicWithdraw/Enable       | Optional  | `true` or `false`        | Override Dynamic Withdraw feature to be on or off on a contract.                                              |
| AdditionalPlayerMechs/Enable | Optional  | `true` or `false`        | Override Additional Player Mechs to be on or off on a contract. This is what allows Bigger Drops mod to work. |

## Additional Lances

| Property                 | Required? | Example                                                                         | Details                                                                                                                                                                                |
| ------------------------ | --------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable                   | Required  | `true` or `false`                                                               | If AL config is provided then `Enable` is required.                                                                                                                                    |
| UseDialogue              | Optional  | `true` or `false`                                                               | Overrides if Ally AL dialogue should appear                                                                                                                                            |
| DialogueCastDefId        | Optional  | `castDef_DariusDefault`, `castDef_Commander`, `castDef_TeamPilot_Random_1`      | Sets the CastDef of the speaker. Can be a real CastDef or MC Dynamic CastDef (see [Dialogue System](./dialogue-system.md)).                                                            |
| Dialogue                 | Optional  | `Hello, this is what you'd see being spoken by the Ally AL lance`               | Overrides the actual dialogue spoken by the Ally AL lance                                                                                                                              |
| EnemyLanceCount          | Optional  | `2`                                                                             | Overrides the number of enemy/target AL lances that will spawn.                                                                                                                        |
| EnemyLances              | Optional  | `["Damaged_Assault_Battle_Lance",`<br/>`"lancedef_vehicle_d10_dynamic_convoy"]` | Manually specifies the exact MC lance or LanceDef you want to spawn for the enemy/target AL lances that spawn.                                                                         |
| EnemyLanceObjectiveNames | Optional  | `["Destroy Traitors Lance 1", "Destroy Traitors Lance 2"]`                      | Overrides the Enemy AL lance objective names. Taken on a first come basis.<br/><br/>If fewer names are provided then it will assign the custom names then return to the default names. |
| AllyLanceCount           | Optional  | `1`                                                                             | Overrides the number of ally/employer AL lances that will spawn.                                                                                                                       |
| AllyLances               | Optional  | `["Generic_Light_Battle_Lance"]`                                                | Manually specifies the exact MC lance or LanceDef you want to spawn for the ally/employer AL lances that spawn.                                                                        |

## Extended Lances

| Property              | Required? | Example           | Details                                                                                                                                      |
| --------------------- | --------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable                | Required  | `true` or `false` | If EL config is provided then `Enable` is required.                                                                                          |
| TargetLanceSize       | Optional  | `6`               | Overrides the number of enemy/target units in a lance.<br/><br/>**DEPRECATION**: Previously `EnemyLanceSize`. Still works but is deprecated. |
| EmployerLanceSize     | Optional  | `5`               | Overrides the number of ally/employer units in a lance.<br/><br/>**DEPRECATION**: Previously `AllyLanceSize`. Still works but is deprecated. |
| TargetAllyLanceSize   | Optional  | `5`               | Overrides the number of target ally units in a lance.                                                                                        |
| EmployerAllyLanceSize | Optional  | `5`               | Overrides the number of employer ally units in a lance.                                                                                      |
| HostileToAllLanceSize | Optional  | `5`               | Overrides the number of hostile to all units in a lance.                                                                                     |
| NeutralToAllLanceSize | Optional  | `5`               | Overrides the number of neutral to all units in a lance.                                                                                     |

## Extended Boundaries

| Property                         | Required? | Example           | Details                                                                                            |
| -------------------------------- | --------- | ----------------- | -------------------------------------------------------------------------------------------------- |
| Enable                           | Required  | `true` or `false` | If EB config is provided then `Enable` is required.                                                |
| IncreaseBoundarySizeByPercentage | Optional  | `0.5`             | Overrides the percentrage to increase the boundary size for this contract. Supports values 0 to 1. |

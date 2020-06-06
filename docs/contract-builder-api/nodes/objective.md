---
id: objective
title: Objective
sidebar_label: Objective
---

The `Objective` node allows for creation of any objective game logic.

There are various types of objectives and each suit a certain usecase.

## DefendXUnits

This node creates an objective that allows you to create a defend objective for tagged buildings or units.

| Property              | Required | Default                  | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | -------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                  | true     | -                        | Name of the Node that will be used for the Unity game object                                                                                                                                                                                                                                                                                                                            |
| Type                  | true     | `Objective`              | Type of node                                                                                                                                                                                                                                                                                                                                                                            |
| SubType               | true     | `DefendXUnits`           | Subtype of node                                                                                                                                                                                                                                                                                                                                                                         |
| Guid                  | true     | -                        | A [UUIDv4](https://www.uuidgenerator.net/) that you then use in the contract json                                                                                                                                                                                                                                                                                                       |
| ContractObjectiveGuid | true     | -                        | The UUIDv4 that you've specified for the contract objective (this is currently set in the contract json but in future versions of the contract type builder you'll be able to specify it in the contract build file)                                                                                                                                                                    |
| Title                 | true     | -                        | The default title for the objective. This is always overriden by the contract json for contract specific titles                                                                                                                                                                                                                                                                         |
| Priority              | true     | -                        | Specifies the priority, which is the order in the objective list it appears (higher or lower)                                                                                                                                                                                                                                                                                           |
| DisplayToUser         | false    | `true`                   | Controls if this objective should be displayed to the player or not. Useful for hidden objectives                                                                                                                                                                                                                                                                                       |
| IsPrimaryObjective    | true     | -                        | Controls if the objective should be a primary or secondary objective                                                                                                                                                                                                                                                                                                                    |
| RequiredTagsOnUnit    | true     | -                        | Specifies the tags of any building or unit that should be defended                                                                                                                                                                                                                                                                                                                      |
| NumberOfUnitsToDefend | false    | `1`                      | Specifies the number of units that should be defended. Be aware, if you specify too many units and you don't have enough tagged units to satisfy the objective - it will autofail                                                                                                                                                                                                       |
| DurationToDefend      | false    | `0`, which means forever | Controls how long to defend the objective for. Duration type is specified by `DurationType`                                                                                                                                                                                                                                                                                             |
| DurationType          | false    | `Rounds`                 | Specifies the type of duration to use if a `DurationToDefend` is set. <br /><br />Usable: `Rounds`, `Phases`                                                                                                                                                                                                                                                                            |
| ProgressFormat        | false    | -                        | The progress format has access to certain variables of the objective and can be set out in a title. <br /><br /> Usable: `[numberOfUnitsToDefend]`, `[numberOfUnitsToDefendRemaining]`, `[durationRemaining]`, `[durationToOccupy]`, `[percentageComplete]`, `[pluralDurationType]`<br /><br />Example: `[numberOfUnitsToDefend] Must Survive, [numberOfUnitsToDefendRemaining] Remain` |
| Description           | true     | -                        | Development description helpful for debugging but not displayed to the player                                                                                                                                                                                                                                                                                                           |

#### Example

```json
{
  "Name": "Objective_DefendBuildings",
  "Type": "Objective",
  "SubType": "DefendXUnits",
  "Guid": "67b973aa-d770-4be7-bfee-36b516bc4699", // Must match the objective guid in the contract .json
  "ContractObjectiveGuid": "73275787-720a-4c33-9f20-953b1bbf48bd", // Must match the contract guid in the contract .json
  "Title": "Defend buildings",
  "Priority": 1,
  "IsPrimaryObjective": true,
  "RequiredTagsOnUnit": ["defend_building_3b"],
  "ProgressFormat": "[numberOfUnitsToDefend] Must Survive, [numberOfUnitsToDefendRemaining] Remain",
  "Description": "The objective for the player to defend the buildings"
}
```

## DestroyLance

This node creates an objective that allows you to specify a lance that should be destroyed.

| Property              | Required | Default        | Details                                                                                                                                                                                                              |
| --------------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                  | true     | -              | Name of the Node that will be used for the Unity game object                                                                                                                                                         |
| Type                  | true     | `Objective`    | Type of node                                                                                                                                                                                                         |
| SubType               | true     | `DestroyLance` | Subtype of node                                                                                                                                                                                                      |
| Guid                  | true     | -              | A [UUIDv4](https://www.uuidgenerator.net/) that you then use in the contract json                                                                                                                                    |
| ContractObjectiveGuid | true     | -              | The UUIDv4 that you've specified for the contract objective (this is currently set in the contract json but in future versions of the contract type builder you'll be able to specify it in the contract build file) |
| Title                 | true     | -              | The default title for the objective. This is always overriden by the contract json for contract specific titles                                                                                                      |
| Priority              | true     | -              | Specifies the priority, which is the order in the objective list it appears (higher or lower)                                                                                                                        |
| DisplayToUser         | false    | `true`         | Controls if this objective should be displayed to the player or not. Useful for hidden objectives                                                                                                                    |
| IsPrimaryObjective    | true     | -              | Controls if the objective should be a primary or secondary objective                                                                                                                                                 |
| LanceToDestroyGuid    | true     | -              | UUIDv4 of the enemy lance spawner that you wish to link this objective to                                                                                                                                            |

#### Example

```json
{
  "Name": "Objective_DestroyLance",
  "Type": "Objective",
  "SubType": "DestroyLance",
  "Guid": "a96a7b04-85cf-4052-8ceb-1063b273c87f", // Must match the objective guid in the contract .json
  "ContractObjectiveGuid": "73275787-720a-4c33-9f20-953b1bbf48bd", // Must match the contract guid in the contract .json
  "Title": "Destroy the turret lance", // This would almost always be overridden by the contract override (json)
  "Priority": 1,
  "IsPrimaryObjective": true,
  "LanceToDestroyGuid": "223fd528-c333-4367-883c-a817acf24360" // UUIDv4 of the enemy lance spawner
}
```

## OccupyRegion

This node swaps the contract override's employer and target team.

| Property                  | Required | Default               | Details                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------- | -------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                      | true     | -                     | Name of the Node that will be used for the Unity game object                                                                                                                                                                                                                                                                                                     |
| Type                      | true     | `Objective`           | Type of node                                                                                                                                                                                                                                                                                                                                                     |
| SubType                   | true     | `OccupyRegion`        | Subtype of node                                                                                                                                                                                                                                                                                                                                                  |
| Guid                      | true     | -                     | A [UUIDv4](https://www.uuidgenerator.net/) that you then use in the contract json                                                                                                                                                                                                                                                                                |
| ContractObjectiveGuid     | true     | -                     | The UUIDv4 that you've specified for the contract objective (this is currently set in the contract json but in future versions of the contract type builder you'll be able to specify it in the contract build file)                                                                                                                                             |
| Title                     | true     | -                     | The default title for the objective. This is always overriden by the contract json for contract specific titles                                                                                                                                                                                                                                                  |
| Priority                  | true     | -                     | Specifies the priority, which is the order in the objective list it appears (higher or lower)                                                                                                                                                                                                                                                                    |
| DisplayToUser             | false    | `true`                | Controls if this objective should be displayed to the player or not. Useful for hidden objectives                                                                                                                                                                                                                                                                |
| IsPrimaryObjective        | true     | -                     | Controls if the objective should be a primary or secondary objective                                                                                                                                                                                                                                                                                             |
| RegionGuid                | true     | -                     | A [UUIDv4](https://www.uuidgenerator.net/) you create so you can reference this region for various things like `Triggers`                                                                                                                                                                                                                                        |
| LanceToUseRegionGuid      | true     | -                     | Lance spawner UUIDv4 of the lance you wish to track with this object heading to the region                                                                                                                                                                                                                                                                       |
| ProgressFormat            | false    | -                     | The progress format has access to certain variables of the objective and can be set out in a title. <br /><br /> Usable: `[occupyUnitsRemaining]`, `[unitsOccupyingSoFar]`, `[numberOfUnitsToOccupy]`, `[opposingUnitsInRegion]`, `[durationRemaining]`, `[pluralDurationType]`<br /><br />Example: `with [unitsOccupyingSoFar]/[numberOfUnitsToOccupy] unit(s)` |
| Description               | true     | -                     | Development description helpful for debugging but not displayed to the player                                                                                                                                                                                                                                                                                    |
| RequiredTagsOnUnit        | true     | -                     | The tags required on the units that trigger this region and occupy objective                                                                                                                                                                                                                                                                                     |
| RequiredTagsOpposingUnits | false    | -                     | The tags used to select who is classified as `OpposingUnits`                                                                                                                                                                                                                                                                                                     |
| NumberOfUnitsToOccupy     | true     | -                     | The number of units to occupy this region to satisfy the objective. This either instantly completes the objective or starts the duration countdown                                                                                                                                                                                                               |
| DurationToOccupy          | false    | `0`, which is forever | Specifies how long the units should remain in the region for                                                                                                                                                                                                                                                                                                     |
| UseDropship               | false    | `false`               | If set to `true`, once the occupy duration is over the Leopard dropship will appear                                                                                                                                                                                                                                                                              |

#### Example

```json
{
  "Name": "Objective_Investigate_Region",
  "Type": "Objective",
  "SubType": "OccupyRegion",
  "Guid": "786166e2-22ea-45c1-9786-68df31958bd8", // Must match the objective guid in the contract .json
  "ContractObjectiveGuid": "73275787-720a-4c33-9f20-953b1bbf48bd", // Must match the contract guid in the contract .json
  "Title": "Investigate the Blackout",
  "Priority": 1,
  "IsPrimaryObjective": true,
  "RegionGuid": "e7e9f35b-7ed8-404e-9dae-69be61de2dd3",
  "LanceToUseRegionGuid": "76b654a6-4f2c-4a6f-86e6-d4cf868335fe", // Player lance GUID
  "ProgressFormat": "with [unitsOccupyingSoFar]/[numberOfUnitsToOccupy] unit(s)",
  "Description": "The objective for the player to investigate the blackout",
  "RequiredTagsOnUnit": ["Player 1"],
  "NumberOfUnitsToOccupy": 2
}
```

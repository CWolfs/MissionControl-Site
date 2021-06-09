---
id: set-units-in-region-to-be-tagged-objective-targets-result
title: Set Units in Region to be Tagged Objective Targets Result
sidebar_label: Set Units In Region To Be Tagged Objective Targets
---

The `SetUnitsInRegionToBeTaggedObjectiveTargets` result is a helper result. It's an optimised combination of:

- `TagUnitsInRegion` result
- `SetTeamByTag` result
- `SetIsObjectiveTargetByTag` result

This selects a specified number of units within a `Region` to be tagged, set to a specified `Team` and have the `IsObjectiveTarget` flag set on it.

## Properties

| Property          | Required | Default                                      | Details                                                                                                                                                    |
| ----------------- | -------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type              | true     | `SetUnitsInRegionToBeTaggedObjectiveTargets` | -                                                                                                                                                          |
| RegionGuid        | true     | -                                            | Guid of the `Region`                                                                                                                                       |
| UnitType          | true     | -                                            | Type of Unit to tag.<br /><br />Current supports: `Building`                                                                                               |
| NumberOfUnits     | false    | `1`                                          | Number of units to tag, set team and set `IsObjectiveTarget` flag on                                                                                       |
| Team              | true     | -                                            | Team to change units to.<br /><br />Supported teams are: `Player1`, `Player2`, `Employer`, `Target`, `TargetAlly`, `NeutralToAll`, `HostileToAll`, `World` |
| IsObjectiveTarget | true     | -                                            | IsObjectiveTarget is used by Objectives. For example, Destroy Buildings Objectives.<br /><br />Set to: `true` or `false`                                   |
| Tags              | true     | -                                            | Tags to identify the `Building`. If multiple are provided then ALL must match.                                                                             |

## Example

```json
{
  "Name": "Trigger_Tag_Buildings_3b",
  "TriggerOn": "OnEncounterStateChanged",
  "Description": "Tag buildings on chunk active for 3b",
  "Conditionals": [
    {
      "Type": "EncounterObjectMatchesStateConditional",
      "Guid": "df31d9e4-762f-4556-bc49-ce8dc1659c0a",
      "Status": "Active"
    }
  ],
  "Results": [
    {
      "Type": "SetUnitsInRegionToBeTaggedObjectiveTargets",
      "RegionGuid": "21a03616-c88b-4edd-a9a9-b4dd54b46d6c",
      "UnitType": "Building",
      "NumberOfUnits": 4,
      "Team": "Employer",
      "IsObjectiveTarget": true,
      "Tags": ["defend_building_3b"]
    }
  ]
}
```

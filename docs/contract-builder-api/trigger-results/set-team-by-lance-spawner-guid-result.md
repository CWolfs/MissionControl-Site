---
id: set-team-by-lance-spawner-guid-result
title: Set Team By Lance Spawner Guid Result
sidebar_label: Set Team By Lance Spawner Guid
---

The `SetTeamByLanceSpawnerGuid` result sets the team of units by their `LanceSpawnerGameLogic` Guid.

This can be used to change the team of mechs, turrets or any other unit that spawns from a `LanceSpawnerGameLogic` (like in some modpacks - vehicles).

## SetState

| Property      | Required | Default            | Details                                                      |
| ------------- | -------- | ------------------ | ------------------------------------------------------------ |
| Type          | true     | `TagUnitsInRegion` | -                                                            |
| RegionGuid    | true     | -                  | Guid of the `Region`                                         |
| UnitType      | true     | -                  | Type of Unit to tag.<br /><br />Current supports: `Building` |
| NumberOfUnits | false    | 1                  | Number of units to tag                                       |
| Tags          | true     | -                  | Tags to add to units                                         |

#### Example

```json
{
  "Type": "TagUnitsInRegion",
  "RegionGuid": "21a03616-c88b-4edd-a9a9-b4dd54b46d6c",
  "UnitType": "Building",
  "NumberOfUnits": 4,
  "Tags": ["defend_building_3b"]
}
```

---
id: tag-units-in-region-result
title: Tag Units in Region Result
sidebar_label: Tag Units in Region
---

The `TagUnitsInRegion` result adds tags to units within a region.

Currently only `Building` type is supported for this result.

## SetState

| Property      | Required | Default    | Details                                                      |
| ------------- | -------- | ---------- | ------------------------------------------------------------ |
| Type          | true     | `SetState` | -                                                            |
| RegionGuid    | true     | -          | Guid of the `Region`                                         |
| UnitType      | true     | -          | Type of Unit to tag.<br /><br />Current supports: `Building` |
| NumberOfUnits | false    | 1          | Number of units to tag                                       |
| Tags          | true     | -          | Tags to add to units                                         |

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

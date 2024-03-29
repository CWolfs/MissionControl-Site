---
id: extended-boundaries
title: Extended Boundaries
---

Increase the size of the encounter to the maximum available map size. This can sometimes be as much as around four times the size!

Extended boundaries can increase the size of the contract type / encounter boundary (playable area in the map). In vanilla BT, contract types never use up to the maximum playable space (2k by 2k map size). With this feature, you can expand the boundary to either the maximum size (set as `1` for the `IncreaseBoundarySizeByPercentage` value), or increase the boundary by a percentage of that current boundary size.

`MapId` and `ContractTypeName` can be used together, or on their own. A more specific setting will override a less specific setting, and `MapId` is considered more specific than `ContractTypeName`. The priority processing order is as follows:

```
MapId and ContractTypeName set --overrides--> MapId set and no ContractTypeName set --overrides--> ContractTypeName set and no MapId set.
```

## Settings Breakdown

```json
"ExtendedBoundaries": {
  "Enable": true,
  "EnableForFlashpoints": true,
  "EnableForStory": false,
  "IncludeContractTypes": [],
  "ExcludeContractTypes": [],
  "IncreaseBoundarySizeByPercentage": 0.3,
  "Overrides": [
    {
      "MapId": "mapGeneral_fallenHills_uDeso",
      "ContractTypeName": "SimpleBattle",
      "IncreaseBoundarySizeByPercentage": 0.4
    },
    {
      "MapId": "mapGeneral_fallenHills_uDeso",
      "IncreaseBoundarySizeByPercentage": 0.6
    },
    {
      "ContractTypeName": "SimpleBattle",
      "IncreaseBoundarySizeByPercentage": 0.3
    }
  ]
},
```

| Path                               | Required? | Default            | Example                                                                                                                                                             | Details                                                                                                                                     |
| ---------------------------------- | --------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `Enable`                           | Optional  | `true`             | `true` or `false`                                                                                                                                                   | Should this feature be enabled or not?                                                                                                      |
| `EnableForFlashpoints`             | Optional  | `true`             | `true` or `false`                                                                                                                                                   | Enable feature for Flashpoints if `EnableFlashpointOverrides` is `true`                                                                     |
| `EnableForStory`                   | Optional  | `false`            | `true` or `false`                                                                                                                                                   | Enable feature for Story if `EnableStoryOverrides` is `true`                                                                                |
| `IncludeContractTypes`             | Optional  | All contract types | `["Rescue", "DestroyBase"]` would limit bounday changes to these two contract types <br /><br /> `[]` would fallback to default                                     | When set, it overrides `ExcludeContractTypes` for this level                                                                                |
| `ExcludeContractTypes`             | Optional  | No contract types  | `["Assasinate", "CaptureBase"]` would remove these two contract types from the entire list of available contract types. <br /><br /> `[]` would fallback to default | Allows you to explicitly exclude boundary changes for all teams for the specified contract types. Not used if `IncludeContractTypes` is set |
| `IncreaseBoundarySizeByPercentage` | Optional  | `0.2`              | `0.1` 10%, `1` max size                                                                                                                                             | Percentage of the current boundary to increase the boundary by                                                                              |
| `Overrides`                        | Optional  | N/A                | N/A                                                                                                                                                                 | Allows for finer grained control of the size increase                                                                                       |

### Overrides

| Path                               | Required? | Default | Details                                      |
| ---------------------------------- | --------- | ------- | -------------------------------------------- |
| `MapId`                            | Optional  | N/A     | Map Id to use with contract type combination |
| `ContractTypeName`                 | Optional  | N/A     | Contract Type Name to use with Map Id        |
| `IncreaseBoundarySizeByPercentage` | Optional  | N/A     | Override for the percentage                  |

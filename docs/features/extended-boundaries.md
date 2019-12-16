---
id: extended-boundaries
title: Extended Boundaries
---

Extended boundaries can increase the size of the contract type / encounter boundary (playable area in the map). In vanilla BT, contract types never use up to the maximum playable space (2k by 2k map size). With this feature, you can expand the boundary to either the maximum size (set as `1` for the `IncreaseBoundarySizeByPercentage` value), or increase the boundary by a percentage of that current boundary size.

## Settings Breakdown

```json
"ExtendedBoundaries": {
  "Enable": true,
  "IncludeContractTypes": [],
  "ExcludeContractTypes": [],
  "IncreaseBoundarySizeByPercentage": 0.2,
  "Overrides": [
    {
      "MapId": "mapGeneral_fallenHills_uDeso",
      "ContractTypeName": "Battle",
      "IncreaseBoundarySizeByPercentage": 0.3
    }
  ]
},
```

| Path                               | Required? | Default           | Example                                                                                                                                                             | Details                                                                                                                                     |
| ---------------------------------- | --------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `Enable`                           | Optional  | `true`            | `true` or `false`                                                                                                                                                   | Should this feature be enabled or not?                                                                                                      |
| `IncludeContractTypes`             | Optional  | No contract types | `["Rescue", "DestroyBase"]` would limit bounday changes to these two contract types <br /><br /> `[]` would fallback to default                                     | When set, it overrides `ExcludeContractTypes` for this level                                                                                |
| `ExcludeContractTypes`             | Optional  | No contract types | `["Assasinate", "CaptureBase"]` would remove these two contract types from the entire list of available contract types. <br /><br /> `[]` would fallback to default | Allows you to explicitly exclude boundary changes for all teams for the specified contract types. Not used if `IncludeContractTypes` is set |
| `IncreaseBoundarySizeByPercentage` | Optional  | `0.2`             | `0.1` 10%, `1` max size                                                                                                                                             | Percentage of the current boundary to increase the boundary by                                                                              |
| `Overrides`                        | Optional  | N/A               | N/A                                                                                                                                                                 | Allows for finer grained control of the size increase                                                                                       |

### Overrides

| Path                               | Required? | Default | Details                                      |
| ---------------------------------- | --------- | ------- | -------------------------------------------- |
| `MapId`                            | Optional  | N/A     | Map Id to use with contract type combination |
| `ContractTypeName`                 | Optional  | N/A     | Contract Type Name to use with Map Id        |
| `IncreaseBoundarySizeByPercentage` | Optional  | N/A     | Override for the percentage                  |

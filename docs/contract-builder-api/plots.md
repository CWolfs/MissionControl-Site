---
id: plots
title: Plots
sidebar_label: Plots
---

`Plots` are typically collections of buildings, or bases that help make vanilla maps seem a bit more dynamic. They are turned on and off by the HBS designer when they created each contract type on a map. You can control which plots are enabled or disabled.

Since `Plots` are always map specific, then any `Plot` control is made in the map override file. Read the [Overrides API](../contract-builder-api/overrides.md) section for detailed information.

## Example

```json
"Overrides": [
    {
      "Path": "$",
      "Action": "ObjectMerge",
      "Value": {
        "Plots": [
          {
            "Name": "Cresttop Structures",
            "Variant": "plotVariant_facilityMedTowerWarehouse"
          },
          {
            "Name": "Valley Fort",
            "Variant": "plotVariant_facilityLrgMilitaryAirControlBase"
          }
        ]
      }
    },
    // more map specific override data
]
```

| Property | Required | Default | Details                                                                |
| -------- | -------- | ------- | ---------------------------------------------------------------------- |
| Plots    | false    | -       | Specifying you want to start defining which plots to enable in the map |

| Property | Required | Default   | Details                                                                                                                                                                                                                    |
| -------- | -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name     | true     | -         | Specifies the name of the `Plot` you want to turn on. You can find this with BTDebug under the `Plots` object                                                                                                              |
| Variant  | false    | `Default` | Specifies the variant of the `Plot` you defined in `Name`. Sometimes there are multiple versions of a certain plot. There is often a default `Plot` variant called `Default` but it's usually best to define what you want |

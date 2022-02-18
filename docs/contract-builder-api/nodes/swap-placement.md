---
id: swap-placement
title: Swap Placement
sidebar_label: Swap Placement
---

The `SwapPlacement` node allows for swapping locations around of in-game nodes.

## EncounterStructure

This node swaps the location of two `EncounterObjectGameLogic` objects in the map. This could be used to swap things like LanceSpawners around for variation.

| Property    | Required | Default              | Details                                                                |
| ----------- | -------- | -------------------- | ---------------------------------------------------------------------- |
| Name        | true     | -                    | Name of the Node that will be used for the Unity game object           |
| Type        | true     | `SwapPlacement`      | Type of node                                                           |
| SubType     | true     | `EncounterStructure` | Subtype of node                                                        |
| TargetGuid1 | true     | -                    | The GUID of the first target `EncounterObjectGameLogic` to be swapped  |
| TargetGuid2 | true     | -                    | The GUID of the second target `EncounterObjectGameLogic` to be swapped |

```json
{
  "Name": "SwapPlacement_SwapLanceSpawners",
  "Type": "SwapPlacement",
  "SubType": "EncounterStructure",
  "TargetGuid1": "76b654a6-4f2c-4a6f-86e6-d4cf868335fe", // Player spawner
  "TargetGuid2": "f426f0dc-969d-477d-81a9-d02f9e1eff79" // Enemy spawner
}
```

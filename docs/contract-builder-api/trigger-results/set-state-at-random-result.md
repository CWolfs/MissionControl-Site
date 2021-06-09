---
id: set-state-at-random-result
title: Set State At Random Result
sidebar_label: Set State At Random
---

The `SetStateAtRandom` result sets the state of a random Chunk or Node from the provided list. This allows for activating/disabling entire `Chunks` of map logic based on certain conditions or more targetted approaches like disabling a `Region`, for example.

This is like the `SetState` result but adds a level of unpredictability to the logic.

## SetState

| Property       | Required | Default            | Details                                                                                                                                    |
| -------------- | -------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Type           | true     | `SetStateAtRandom` | -                                                                                                                                          |
| EncounterGuids | true     | -                  | A list of Guid of the `Chunk`, `Node` or other accessible Encounter Object obtained from the Combat ItemRegistry when triggered            |
| State          | true     | -                  | State to set the Encounter Object to.<br /><br />Supported states are: `Active`, `Inactive`, `Finished`, `Nothing`, `ControlledByContract` |

#### Example

```json
{
  "Name": "Trigger_Enable_Chunk_1x",
  "TriggerOn": "OnObjectiveUpdated",
  "Description": "Enable second objective on first objective complete",
  "Conditionals": [
    {
      "Type": "ObjectiveStatusConditional",
      "Guid": "786166e2-22ea-45c1-9786-68df31958bd8",
      "Status": "Success"
    }
  ],
  "Results": [
    {
      "Type": "SetStateAtRandom",
      "EncounterGuids": [
        "bf661bb2-67dd-475b-9f56-45be07b0d181", // Chunk_Stage_1a_Signs_Of_Attack
        "0d288b40-fb4e-4118-996f-d65c070d140f", // Chunk_Stage_1b_Trap,
        "9cdc19ff-5b22-402b-aca5-d593a6f3b69c" // Chunk_Stage_1c_Ambush
      ],
      "State": "Active"
    }
  ]
}
```

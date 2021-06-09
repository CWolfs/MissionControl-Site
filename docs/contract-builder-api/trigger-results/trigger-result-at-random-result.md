---
id: trigger-result-at-random-result
title: Trigger Result At Random Result
sidebar_label: Trigger Result At Random
---

The `TriggerResultAtRandom` result selects a random result to run from the provided list of `Results`. This is useful to add variation to a custom contract type.

## Properties

| Property | Required | Default                 | Details                                          |
| -------- | -------- | ----------------------- | ------------------------------------------------ |
| Type     | true     | `TriggerResultAtRandom` | -                                                |
| Results  | true     | -                       | List of `Results` to have one selected at random |

## Example

```json
{
  "Type": "TriggerResultAtRandom",
  "Results": [
    {
      "Type": "SetState",
      "EncounterGuid": "1fdeca88-c2d9-46af-b443-cf95aae707b6", // Chunk_Stage_Post_3a_Enemy_Turrets
      "State": "Active"
    },
    {
      "Type": "IgnoreChunks",
      "EncounterGuids": [
        "1fdeca88-c2d9-46af-b443-cf95aae707b6" // Chunk_Stage_Post_3a_Enemy_Turrets
      ]
    }
  ]
}
```

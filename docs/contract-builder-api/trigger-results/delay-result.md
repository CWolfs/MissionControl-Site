---
id: delay-result
title: Delay Result
sidebar_label: Delay
---

The `Delay` result is a special result. It wraps a list of results to run after a specified delay. The delay can be time-based in seconds, round-based or turn phase-based. This result also supports a flexible logic flow control which allows for executing different results based on a conditional check with `SkipIf` and `ResultsIfSkipped` properties.

You can use this flexible logic flow to create some flexible situations, prevent needless waits that `Delay` might cause if objectives are completed quickly and prevent any `Objective` softlocks.

**This conditional check and execution of 'ResultsIfSkipped' will run regardless of the time delay if the conditional is satisfied. The 'Results' will no longer be run after 'ResultsIfSkipped' is run.**

## Properties

| Property         | Required | Default | Details                                                                                                                                                                                                                                |
| ---------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type             | true     | `Delay` | -                                                                                                                                                                                                                                      |
| Name             | true     | -       | Human readable name for helping the developer follow the flow                                                                                                                                                                          |
| Time             | false    | `-1`    | Time in seconds to delay the `Results`.<br /><br />This executes immediately when the timelimit is complete activation                                                                                                                 |
| Rounds           | false    | `-1`    | Number of rounds to delay the `Results` activation.<br /><br />This executes the `Results` at the `OnRoundBegin` hook                                                                                                                  |
| Phases           | false    | `-1`    | Number of phases to delay the `Results` activation.<br /><br />This executes the `Results` at the `OnPhaseBegin` hook                                                                                                                  |
| SkipIf           | false    | `null`  | Embedded `Trigger` that watches for a condition to be satisifed. If that is satisifed then it will immediately execute the `ResultsIfSkipped` and the `Delay` trigger will be marked as `complete` and no longer execute the `Results` |
| Results          | true     | `-1`    | Array of `Results` to execute after the `Delay` time, round or phase period is finished.                                                                                                                                               |
| ResultsIfSkipped | false    | `null`  | Tags to add to units                                                                                                                                                                                                                   |

## Examples

### Simple

```json
{
  "Type": "Delay",
  "Time": 2, // Delay the results by 2 seconds allowing the camera focus to arrive at the specified position
  "Results": [
    {
      "Type": "SetState",
      "EncounterGuid": "38a28d0b-4688-41b5-a9e8-825a55c38c93",
      "State": "Active"
    }
  ]
}
```

### Flexible

Sometimes you want to be more flexible with the logic flow and provide optional situations that can skip some logic flow and take another route.
You can achieve this with a combination of `SkipIf` conditions and `ResultsIfSkipped`.

Below is an example from the `Blackout` custom contract type.

```json
/*
  If the 'Destroy Invading Lance' objective is completed before the turrets activate
  Then immediately activate the enemy turret event for Phase 2 OR just end the game.
  This prevents any pauses between destroying the enemy lance and the enemy turrets activating.
  It also prevents any Objective soft locks.
*/
{
  "Type": "Delay",
  "Name": "Activate 3a Turrets",
  "Rounds": 2,
  "SkipIf": {
    "TriggerOn": "OnObjectiveUpdated",
    "Conditionals": [
      {
        "Type": "ObjectiveStatusConditional",
        "Guid": "bfa3d339-c304-4fba-87db-ac725acb4c10", // Chunk_Stage_Post_3a Destroy Invading Lance
        "Status": "Success"
      }
    ]
  },
  "Results": [
    {
      "Type": "SetStateAtRandom",
      "EncounterGuids": [
        "1fdeca88-c2d9-46af-b443-cf95aae707b6", // Chunk_Stage_Post_3a_Enemy_Turrets
        "832ae497-f3d3-467f-b4da-8e95a3d757b0" // Chunk_Stage_Post_3a_Friendly_Turrets
      ],
      "State": "Active"
    }
  ],
  "ResultsIfSkipped": [
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
  ]
}
```

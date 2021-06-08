---
id: execute-game-logic-result
title: Execute Game Logic Result
sidebar_label: Execute Game Logic
---

The `ExecuteGameLogic` result allows for running special logic on custom Encounter Objects that contain the special script of `ExecutableGameLogic` on them.

Only certain Encounter Objects support this and they are all custom to Mission Control, or possibly if other modders have created their own custom objects supporting this. The custom supported Encounter Objects are:

- Node `Contract-Edit` with the subtype `SwapTeamFactions`
- Chunk that contains the `OnActiveExecute` logic of type `Dialogue`
- Chunk that contains the `OnActiveExecute` logic of type `SetChunkStateAtRandom`

This `ExecuteGameLogic` result is rarely used and normally for hard to implement logic that isn't otherwise supported by the other results.

## ExecuteGameLogic

| Property  | Required | Default            | Details                                                                                                        |
| --------- | -------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| Type      | true     | `ExecuteGameLogic` | -                                                                                                              |
| ChunkGuid | true     | -                  | Guid of an Encounter Object that has a `ExecutableGameLogic` script on it. Supported types are mentioned above |

#### Example

```json
{
  "Name": "Trigger_SwapEmployerAndTargetFaction",
  "TriggerOn": "OnObjectiveUpdated",
  "Description": "Swap Employer And Target Faction on OnObjectiveUpdated",
  "Conditionals": [
    {
      "Type": "ObjectiveStatusConditional",
      "Guid": "786166e2-22ea-45c1-9786-68df31958bd8",
      "Status": "Success"
    }
  ],
  "Results": [
    {
      "Type": "ExecuteGameLogic",
      "ChunkGuid": "71e9b8ae-28c8-4b9f-a933-c21b692aab2b" // Guid of a Container Chunk with a ContractEdit SwapTeamFactions child
    }
  ]
}
```

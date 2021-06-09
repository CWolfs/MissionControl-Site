---
id: triggers
title: Triggers
sidebar_label: Triggers
---

BattleTech's encounter system makes use of a `Trigger`, `Condition` and `Result` system.

- A `Trigger` is an event that is sent out. For example, `OnEncounterBegin`, `OnObjectiveUpdated` or `OnDialogueComplete`
- A `Condition` is a check on a set criteria to determine if the linked `Result` should run. For example, if an objective's status is 'Success'
- A `Result` is an action that is taken. This can be anything like activate another `Chunk`, enable an `Objective`, change the `Camera` focus or fire artillery

If you think of `Chunks` as the building blocks of a contract type then `Triggers` introduce the logic that chains the `Chunks` together. They can listen to things like if a unit enters a region, or if a unit is destroyed - then run an action (named a `Result`) to do something like activate a new `Chunk` or end the game, for example.

Very basic contract types, like `Solo Duel` and `Duo Duel` do not use `Triggers`. This is because some `Chunks` do contain some basic logic associated with them depending on their chunk subtype, such as a `DestroyWholeLance` that contains a `DestroyLance` objective in the chunk. For anything more complex, a combination of `Chunk` logic plus `Triggers` are required - like for `Blackout` contract type.

## Properties

| Property     | Required | Default | Details                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------ | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name         | true     | -       | Human readable name for the modder to help understand the logic flow                                                                                                                                                                                                                                                                                                                                                          |
| TriggerOn    | true     | -       | Trigger message type name from BT enum `MessageCenterMessageType` or MC enum of [MessageTypes](https://github.com/CWolfs/MissionControl/blob/master/src/Core/EncounterMessages/MessageTypes.cs). <br /><br />For example: `OnObjectiveUpdated`, `OnEncounterStateChanged` and `OnLanceSpawned`                                                                                                                                |
| Description  | true     | -       | Developer description to help follow the logic flow                                                                                                                                                                                                                                                                                                                                                                           |
| Conditionals | true     | -       | Array of `Conditionals`. Every time the trigger is activated the `Conditionals` will be checked for success. <br /><br />If multiple conditionals are provided then `ALL` must be successful for the trigger to be a success and run the `Results` action. <br /><br />Conditional examples: `AlwaysTrueConditional`, `ObjectiveStatusConditional`, `EncounterObjectMatchesStateConditional` and `DialogueMatchesConditional` |
| Results      | true     | -       | Array of `Results`. Once a succesful `Conditionals` check is completed then these `Results` will run.<br /><br />Results examples: `SetState`, `SetStateAtRandom`, `SetTeamByLanceSpawnerGuid`.                                                                                                                                                                                                                               |

## Examples

Below is the general `Trigger` structure in a simple form. This `Trigger` is tested when any `Objective` is updated. If the `Objective` matches the specified Guid and has been marked as a success, then disable the `Region` by setting its state to `Finished`.

```json
{
  "Name": "Trigger_Disable_Region_1",
  "TriggerOn": "OnObjectiveUpdated",
  "Description": "Disable the first region on first objective complete",
  "Conditionals": [
    {
      "Type": "ObjectiveStatusConditional",
      "Guid": "786166e2-22ea-45c1-9786-68df31958bd8",
      "Status": "Success"
    }
  ],
  "Results": [
    {
      "Type": "SetState",
      "EncounterGuid": "e7e9f35b-7ed8-404e-9dae-69be61de2dd3",
      "State": "Finished"
    }
  ]
}
```

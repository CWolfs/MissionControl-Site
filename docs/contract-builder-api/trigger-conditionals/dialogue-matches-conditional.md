---
id: dialogue-matches-conditional
title: Dialogue Matches Conditional
sidebar_label: Dialogue Matches
---

The `DialogueMatchesConditional` conditional checks the incoming `Trigger` caller `Guid` against the specified conditional `DialogueGuid`. If they match then the condition is satisfied. This is often used together with a `TriggerOn` of `OnDialogueComplete`, which sends the `Guid` of the completed `Dialogue` Encounter Object.

## ObjectiveStatusConditional

| Property | Required | Default                      | Details                                                                                                                                                              |
| -------- | -------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type     | true     | `ObjectiveStatusConditional` | -                                                                                                                                                                    |
| Guid     | true     | -                            | A [UUIDv4](https://www.uuidgenerator.net/) of the objective you wish to check against                                                                                |
| Status   | true     | -                            | The Objective status you want the conditional to pass on a successful check.<br /><br />Statuses are: `InProgress`, `Complete`, `Success`, `Failed`, `NotInProgress` |

#### Example 1

```json
{
  "Name": "Trigger_Activate_Post_3a",
  "TriggerOn": "OnDialogueComplete",
  "Description": "Activate Post 3a Chunk",
  "Conditionals": [
    {
      "Type": "DialogueMatchesConditional", // Checks the completed Dialogue Guid against the specified DialogueGuid below
      "DialogueGuid": "4ef16b5e-1486-4399-8835-b81026b22cac"
    }
  ]
  // more Trigger properties
}
```

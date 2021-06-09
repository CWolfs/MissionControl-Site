---
id: dialogue-result
title: Dialogue Result
sidebar_label: Dialogue
---

The `Dialogue` result allows for running a specified Dialogue Node.

## Properties

| Property     | Required | Default    | Details                 |
| ------------ | -------- | ---------- | ----------------------- |
| Type         | true     | `Dialogue` | -                       |
| DialogueGuid | true     | -          | Guid of a Dialogue Node |

## Example

```json
{
  "Name": "Trigger_Second_Dialogue",
  "TriggerOn": "OnObjectiveUpdated",
  "Description": "Show the dialogue at the second base",
  "Conditionals": [
    {
      "Type": "ObjectiveStatusConditional",
      "Guid": "b8e02f26-f664-4314-a003-67737fef719d",
      "Status": "Success"
    }
  ],
  "Results": [
    {
      "Type": "Dialogue",
      "DialogueGuid": "4ef16b5e-1486-4399-8835-b81026b22cac" // Guid of the Dialogue Node
    }
  ]
}
```

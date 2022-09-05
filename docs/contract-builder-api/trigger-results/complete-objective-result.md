---
id: complete-objective-result
title: Complete Objective Result
sidebar_label: Complete Objective
---

The `CompleteObjective` result completes a specified objective. It can be marked as `Succeed` or `Failed`.

## Properties

| Property       | Required | Default             | Details                                                                         |
| -------------- | -------- | ------------------- | ------------------------------------------------------------------------------- |
| Type           | true     | `CompleteObjective` | -                                                                               |
| ObjectiveGuid  | true     | -                   | Guid of the `Objective`                                                         |
| CompletionType | false    | `Succeed`           | This is the state of the `Objective`. You can mark it as: `Succeed` or `Failed` |

## Example

The below example shows a `Trigger` that watches when a specific `Objective` of `DestroyLance` is complete. For the situation, when this happens we want to complete a different `Objective` of `DefendXUnits` as the situation is now resolved in the custom contract type. We make use of the `CompleteObjective` result to achieve this - completing the `DefendXUnits` `Objective`.

```json
{
  "Name": "Trigger_Complete_Objective_Defend_3b",
  "TriggerOn": "OnObjectiveUpdated",
  "Description": "Complete the defend objective",
  "Conditionals": [
    {
      "Type": "ObjectiveStatusConditional",
      "Guid": "a0b9c5b2-c594-4c5a-be1d-028a51c51519", // Guid of 'DestroyLance' Objective 'Objective_DestroyLance'
      "Status": "Success" // If this Objective is a success...
    }
  ],
  "Results": [
    {
      "Type": "CompleteObjective", // Complete a different Objective of subtype 'DefendXUnits'
      "ObjectiveGuid": "67b973aa-d770-4be7-bfee-36b516bc4699" // Guid of 'DefendXUnits' Objective 'Objective_DefendBuildings'
    }
  ]
}
```

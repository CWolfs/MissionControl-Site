---
id: set-is-objective-target-by-tag-result
title: Set Is Objective Target By Tag Result
sidebar_label: Set Is Objective Target By Tag
---

The `SetIsObjectiveTargetByTag` result sets the `IsObjectiveTarget` flag on any `Building` Tagged Combatant that contains the `ObstructionGameLogic` script.

## SetState

| Property          | Required | Default                     | Details                                                                                                                  |
| ----------------- | -------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Type              | true     | `SetIsObjectiveTargetByTag` | -                                                                                                                        |
| IsObjectiveTarget | true     | -                           | IsObjectiveTarget is used by Objectives. For example, Destroy Buildings Objectives.<br /><br />Set to: `true` or `false` |
| Tags              | true     | -                           | Tags to identify the `Building`. If multiple are provided then ALL must match.                                           |

#### Example

```json
{
  "Type": "SetIsObjectiveTargetByTag",
  "IsObjectiveTarget": true,
  "Tags": ["defend_building_3b"]
}
```

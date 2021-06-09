---
id: set-lance-evasion-ticks-by-tag-result
title: Set Lance Evasion Ticks By Tag Result
sidebar_label: Set Lance Evasion Ticks By Tag
---

The `SetLanceEvasionTicksByTag` result sets all units selected by the specified tags to have a specific evasion tick amount.

The name is slightly misleading as it does not need to be the same `Lance` as it's selected only by tags.

## Properties

| Property | Required | Default                     | Details                                                                     |
| -------- | -------- | --------------------------- | --------------------------------------------------------------------------- |
| Type     | true     | `SetLanceEvasionTicksByTag` | -                                                                           |
| Amount   | true     | -                           | Number of evasion ticks to set to the selected units                        |
| Tags     | true     | -                           | Tags to identify the unit(s). If multiple are provided then ALL must match. |

## Example

This example sets all units belonging to the Player (Player 1) to have 2 evasion ticks.

```json
{
  "Type": "SetLanceEvasionTicksByTag",
  "Amount": 2,
  "Tags": ["Player 1"]
}
```

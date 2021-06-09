---
id: modify-lance-evasion-ticks-by-tag-result
title: Modify Lance Evasion Ticks By Tag Result
sidebar_label: Modify Lance Evasion Ticks By Tag
---

The `ModifyLanceEvasionTicksByTag` result modifies all units selected by the specified tags by a specific evasion tick amount.

The name is slightly misleading as it does not need to be the same `Lance` as it's selected only by tags.

## Properties

| Property | Required | Default                        | Details                                                                     |
| -------- | -------- | ------------------------------ | --------------------------------------------------------------------------- |
| Type     | true     | `ModifyLanceEvasionTicksByTag` | -                                                                           |
| Amount   | true     | -                              | Number of evasion ticks to increase or reduce on the selected units         |
| Tags     | true     | -                              | Tags to identify the unit(s). If multiple are provided then ALL must match. |

## Example

This example reduces the evasion by 2 ticks on all units belonging to the Player (Player 1).

```json
{
  "Type": "ModifyLanceEvasionTicksByTag",
  "Amount": -2,
  "Tags": ["Player 1"]
}
```

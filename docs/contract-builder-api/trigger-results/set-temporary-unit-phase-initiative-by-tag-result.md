---
id: set-temporary-unit-phase-initiative-by-tag-result
title: Set Temporary Unit Phase Initiative By Tag Result
sidebar_label: Set Temporary Unit Phase Initiative By Tag
---

The `SetTemporaryUnitPhaseInitiativeByTag` result temporarily changes the selected unit(s) phase initiative for 1 round.

## Properties

| Property   | Required | Default                                | Details                                                                                                                                                          |
| ---------- | -------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type       | true     | `SetTemporaryUnitPhaseInitiativeByTag` | -                                                                                                                                                                |
| Initiative | true     | -                                      | Number value as a modifier to the unit's initiative for 1 round.<br /><br />Setting `1` makes the unit initiative early. Setting a higher number makes it later. |
| Tags       | true     | -                                      | Tags to identify the unit(s). If multiple are provided then ALL must match.                                                                                      |

## Example

```json
{
  "Type": "SetTemporaryUnitPhaseInitiativeByTag",
  "Initiative": 1, // between 1 (earlier) and 6 (later)
  "Tags": ["turrets_1b"]
}
```

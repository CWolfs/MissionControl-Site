---
id: combat-state
title: Combat State
sidebar_label: Combat State
---

The `CombatState` node allows for modifications and checks for specific combat state related logic.

## DisablePilotDeath

This node ensures that no player pilots can die and optionally not be injured. This is useful, for example, if some contract story doesn't make sense for the pilot to be killed (e.g. a practice fight or training).

| Property        | Required | Default             | Details                                                                                                         |
| --------------- | -------- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| Name            | true     | -                   | Name of the Node that will be used for the Unity game object                                                    |
| Type            | true     | `CombatState`       | Type of node                                                                                                    |
| SubType         | true     | `DisablePilotDeath` | Subtype of node                                                                                                 |
| DisableInjuries | false    | `false`             | Should the pilots be immune to injury too? `true` makes them not take injury. `false` is the vanilla behaviour. |

```json
{
  "Name": "Chunk_DisablePilotDeath",
  "Type": "Chunk",
  "SubType": "Container",
  "ControlledByContract": true,
  "Guid": "953a5930-06d0-4a2d-9840-e9a70c2a63ea",
  "Children": [
    {
      "Name": "CombatState_DisablePilotDeath",
      "Type": "CombatState",
      "SubType": "DisablePilotDeath",
      "DisableInjuries": false
    }
  ]
}
```

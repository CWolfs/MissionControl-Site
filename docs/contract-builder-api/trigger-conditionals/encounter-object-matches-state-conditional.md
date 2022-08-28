---
id: encounter-object-matches-state-conditional
title: Encounter Object Matches State Conditional
sidebar_label: Encounter Object Matches State
---

The `EncounterObjectMatchesStateConditional` conditional checks the status of an Encounter Object (in code known as `EncounterObjectGameLogic`). Encounter Object is the supertype of lots of in-map logic objects like, but not limited to, a `Chunk`, Dialogue, some Effects and Game Logic objects. If the Encounter Object exists in the encounter layer then you can use this conditional to check its state in a `Trigger`.

## Properties

| Property | Required | Default                                  | Details                                                                                                                                                                                                                                                                                                                                                              |
| -------- | -------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type     | true     | `EncounterObjectMatchesStateConditional` | -                                                                                                                                                                                                                                                                                                                                                                    |
| Guid     | true     | -                                        | A [UUIDv4](https://www.uuidgenerator.net/) of the Encounter Object you wish to check against. An Encounter Object (`EncounterObjectGameLogic`) is anything created in the game map like, but not limited to, a `Chunk`, Dialogue, some Effects and Game Logic objects.<br /><br />Often used to check status of a Chunk for controlling the flow of a contract type. |
| Status   | true     | -                                        | The EncounterObjectStatus you want the conditional to pass on a successful check.<br /><br />Statuses are: `Active`, `Inactive`, `Finished`, `Nothing`, `ControlledByContract`                                                                                                                                                                                       |

## Example

```json
"Conditionals": [
    {
        "Type": "EncounterObjectMatchesStateConditional",
        "Guid": "0d288b40-fb4e-4118-996f-d65c070d140f", // Often used to check status of a Chunk for controlling the flow
        "Status": "Active"
    }
]
```

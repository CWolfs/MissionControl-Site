---
id: set-state-result
title: Set State Result
sidebar_label: Set State
---

The `SetState` result sets the state of a Chunk or Node. This allows for activating/disabling entire `Chunks` of map logic based on certain conditions or more targetted approaches like disabling a `Region`, for example.

## Properties

| Property      | Required | Default    | Details                                                                                                                                    |
| ------------- | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Type          | true     | `SetState` | -                                                                                                                                          |
| EncounterGuid | true     | -          | Guid of the `Chunk`, `Node` or other accessible Encounter Object obtained from the Combat ItemRegistry when triggered                      |
| State         | true     | -          | State to set the Encounter Object to.<br /><br />Supported states are: `Active`, `Inactive`, `Finished`, `Nothing`, `ControlledByContract` |

## Example

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

---
id: objective-status-conditional
title: Objective Status Conditional
sidebar_label: Objective Status
---

The `ObjectiveStatusConditional` conditional checks an objective by its GUID and checks the status of it against the conditional check. It suceeds when the objective status and the conditional status check match.

## ObjectiveStatusConditional

| Property | Required | Default                      | Details                                                                                                                                                              |
| -------- | -------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type     | true     | `ObjectiveStatusConditional` | -                                                                                                                                                                    |
| Guid     | true     | -                            | A [UUIDv4](https://www.uuidgenerator.net/) of the objective you wish to check against                                                                                |
| Status   | true     | -                            | The Objective status you want the conditional to pass on a successful check.<br /><br />Statuses are: `InProgress`, `Complete`, `Success`, `Failed`, `NotInProgress` |

#### Example

```json
"Conditionals": [
    {
        "Type": "ObjectiveStatusConditional",
        "Guid": "786166e2-22ea-45c1-9786-68df31958bd8", // Guid of an Objective node elsewhere in your common.jsonc
        "Status": "Success"
    }
]
```

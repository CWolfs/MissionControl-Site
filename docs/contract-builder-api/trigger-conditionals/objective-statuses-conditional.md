---
id: objective-statuses-conditional
title: Objective Statuses Conditional
sidebar_label: Objective Statuses
---

The `ObjectiveStatusesConditional` conditional checks multiple objectives by their GUID and checks the statuses of them all against the conditional checks. It ALL suceed when the objective's status and the conditional status check match.

## ObjectiveStatusConditional

| Property | Required | Default                      | Details                                                                                                      |
| -------- | -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Type     | true     | `ObjectiveStatusConditional` | -                                                                                                            |
| Statuses | true     | -                            | An array of GUID and Status objects similar to [ObjectiveStatusConditional](objective-status-conditional.md) |

#### Example

```json
"Conditionals": [
    {
        "Type": "ObjectiveStatusConditional",
        "Statuses": [
            {
                "Guid": "786166e2-22ea-45c1-9786-68df31958bd8", // Guid of an Objective node elsewhere in your common.jsonc
                "Status": "Success"
            },
            {
                "Guid": "386136e2-42ea-a2c3-2715-18df31958bd1", // Guid of another Objective node elsewhere in your common.jsonc
                "Status": "Success"
            },
        ],

    }
]
```

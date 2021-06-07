---
id: always-true-conditional
title: Always True Conditional
sidebar_label: Always True
---

The `AlwaysTrueConditional` conditional auto-passes as soon as it's run. It's useful for when you want to activate a `Result` as soon as a specific `Trigger` is detected.

## AlwaysTrueConditional

This node swaps the contract override's employer and target team.

| Property | Required | Default                 | Details |
| -------- | -------- | ----------------------- | ------- |
| Type     | true     | `AlwaysTrueConditional` | -       |

#### Example

```json
"Conditionals": [
    {
        "Type": "AlwaysTrueConditional"
    }
]
```

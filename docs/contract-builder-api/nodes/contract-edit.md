---
id: contract-edit
title: Contract Edit
sidebar_label: Contract Edit
---

The `ContractEdit` node allows for editing the contract override data from within the contract itself. This would then be only used after the combat has ended.

This can be useful for various things like affecting who the contract employer is so your employer is now your target and vise versa.

## SwapTeamFactions

This node swaps the contract override's employer and target team.

| Property  | Required | Default            | Details                                                      |
| --------- | -------- | ------------------ | ------------------------------------------------------------ |
| Name      | true     | -                  | Name of the Node that will be used for the Unity game object |
| Type      | true     | `ContractEdit`     | Type of node                                                 |
| SubType   | true     | `SwapTeamFactions` | Subtype of node                                              |
| TeamGuid1 | true     | -                  | First team to swap                                           |
| TeamGuid2 | true     | -                  | Second team to swap                                          |

#### Example

```json
{
  "Name": "Swap_EmployerAndTarget", // Node name
  "Type": "ContractEdit", // Node type
  "SubType": "SwapTeamFactions", // Node subtype
  "TeamGuid1": "ecc8d4f2-74b4-465d-adf6-84445e5dfc230", // Employer faction
  "TeamGuid2": "be77cadd-e245-4240-a93e-b99cc98902a5" // Target faction
}
```

---
id: dynamic-withdraw
title: Dynamic Withdraw
---

When being forced to withdraw and extraction zone appears for you. You must extract there before you can end the mission. Plan your escape accordingly.

```json
  "DynamicWithdraw": {
    "Enable": true,
    "EnableForFlashpoints": true,
    "IncludeContractTypes": [],
    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
    "MinDistanceForZone": 50,
    "MaxDistanceForZone": 288,
    "DisorderlyWithdrawalCompatibility": false
  },
```

### Dynamic Withdraw

| Path                                | Required? | Default            | Details                                                                                                                                                                                            |
| ----------------------------------- | --------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Enable`                            | Optional  | `true`             | Should this feature be enabled or not?                                                                                                                                                             |
| `EnableForFlashpoints`              | Optional  | `true`             | Enable feature for Flashpoints if `EnableFlashpointOverrides` is `true`                                                                                                                            |
| `IncludeContractTypes`              | Optional  | All contract types | When set, it overrides `ExcludeContractTypes` for this level                                                                                                                                       |
| `ExcludeContractTypes`              | Optional  | No contract types  | Allows you to explicitly exclude boundary changes for all teams for the specified contract types. Not used if `IncludeContractTypes` is set                                                        |
| `MinDistanceForZone`                | Optional  | `50`               | Minimum distance to generate the extraction zone from the calculate centroid position of all player mechs, with an avoidance modifier for all enemies in the map                                   |
| `MaxDistanceForZone`                | Optional  | `288`              | Maximum distance to generate the extraction zone from the calculate centroid position of all player mechs, with an avoidance modifier for all enemies in the map                                   |
| `DisorderlyWithdrawalCompatibility` | Optional  | `false`            | Attempted compatibility for Disorderly Withdrawal mod. It allows both to work together, however, the actual combined use doesn't provide any good benefits due to fundamental gameplay differences |

---
id: random-spawns
title: Random Spawns
---

Depending on the contract type, the lance spawns will change every playthrough. The spawning uses contract type specific logic to suitably place the lances. There are no configuration options currently available for this as these come from the encounter type rulesets that are created. Which things are randomised in the game is determined by the Encounter Ruleset which is run for that contract type.

```json
"RandomSpawns": {
  "Enable": true,
  "EnableForFlashpoints": true,
  "IncludeContractTypes": [],
  "ExcludeContractTypes": ["SoloDuel", "DuoDuel"]
}
```

### Random Spawns

| Path                   | Required? | Default            | Details                                                                                                                                     |
| ---------------------- | --------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `Enable`               | Optional  | `true`             | Should this feature be enabled or not?                                                                                                      |
| `EnableForFlashpoints` | Optional  | `true`             | Enable feature for Flashpoints if `EnableFlashpointOverrides` is `true`                                                                     |
| `IncludeContractTypes` | Optional  | All contract types | When set, it overrides `ExcludeContractTypes` for this level                                                                                |
| `ExcludeContractTypes` | Optional  | No contract types  | Allows you to explicitly exclude boundary changes for all teams for the specified contract types. Not used if `IncludeContractTypes` is set |

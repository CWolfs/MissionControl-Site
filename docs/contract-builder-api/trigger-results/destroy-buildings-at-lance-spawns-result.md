---
id: destroy-buildings-at-lance-spawns-result
title: Destroy Buildings At Lance Spawns Result
sidebar_label: Destroy Buildings At Lance Spawns
---

The `DestroyBuildingsAtLanceSpawns` result checks to see if there are any buildings on or near the individual units of a specified `LanceSpawner`. If any `Building` detected, they are destroyed (and they display their destroy animations).

## Properties

| Property         | Required | Default                         | Details                                                                         |
| ---------------- | -------- | ------------------------------- | ------------------------------------------------------------------------------- |
| Type             | true     | `DestroyBuildingsAtLanceSpawns` | -                                                                               |
| LanceSpawnerGuid | true     | -                               | Guid of the `LanceSpawner`                                                      |
| Radius           | false    | `48`                            | Distance away from the unit's spawn to test against. Effectively a circle test. |

## Examples

```json
{
  "Type": "DestroyBuildingsAtLanceSpawns",
  "LanceSpawnerGuid": "f5714221-5fc6-41e5-a369-c8aa2b6d1bcf"
}
```

```json
{
  "Type": "DestroyBuildingsAtLanceSpawns",
  "LanceSpawnerGuid": "f5714221-5fc6-41e5-a369-c8aa2b6d1bcf",
  "Radius": 30
}
```

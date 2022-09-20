---
id: set-team-by-lance-spawner-guid-result
title: Set Team By Lance Spawner Guid Result
sidebar_label: Set Team By Lance Spawner Guid
---

The `SetTeamByLanceSpawnerGuid` result sets the team of units by their `LanceSpawnerGameLogic` Guid.

This can be used to change the team of mechs, turrets or any other unit that spawns from a `LanceSpawnerGameLogic`.

## Properties

| Property         | Required | Default                     | Details                                                                                                                                                                                                |
| ---------------- | -------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Type             | true     | `SetTeamByLanceSpawnerGuid` | -                                                                                                                                                                                                      |
| Team             | true     | -                           | Team to change units to.<br /><br />Supported teams are: `Player1`, `Player2`, `Employer`, `Target`, `TargetAlly`, `NeutralToAll`, `HostileToAll`, `World`                                             |
| LanceSpawnerGuid | true     | -                           | Guid of the `LanceSpawner`                                                                                                                                                                             |
| AlertLance       | false    | `true`                      | Specifies if the lance should be on alert after they change team. Certain behaviours in the AI depend on a lance being in alert mode, such as the main combat behaviours and hunting last seen enemies |
| ApplyTags        | false    | -                           | Tags to add to units when they change team                                                                                                                                                             |

## Example

```json
{
  "Type": "SetTeamByLanceSpawnerGuid",
  "Team": "Target",
  "LanceSpawnerGuid": "a363b6b5-62f7-4290-a8a5-1f744a43109e",
  "AlertLance": true,
  "ApplyTags": ["defected_lance"]
}
```

---
id: set-team-by-tag-result
title: Set Team By Tag Result
sidebar_label: Set Team By Tag
---

The `SetTeamByTag` result sets the team of any tagged unit by the specified tag.

This currently only supports `Buildings`.

## SetState

| Property | Required | Default        | Details                                                                                                                                                    |
| -------- | -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Type     | true     | `SetTeamByTag` | -                                                                                                                                                          |
| Team     | true     | -              | Team to change units to.<br /><br />Supported teams are: `Player1`, `Player2`, `Employer`, `Target`, `TargetAlly`, `NeutralToAll`, `HostileToAll`, `World` |
| Tags     | true     | -              | Tags to identify the unit(s) you wish to change team. If multiple are provided then ALL must match.                                                        |     |

#### Example

```json
{
  "Type": "SetTeamByTag",
  "Team": "Employer",
  "Tags": ["defend_building_3b"]
}
```

---
id: set-team-by-tag-result
title: Set Team By Tag Result
sidebar_label: Set Team By Tag
---

The `SetTeamByTag` result sets the team of any tagged unit by the specified tag.

This currently only supports `Buildings`.

## Properties

| Property   | Required | Default        | Details                                                                                                                                                                                                |
| ---------- | -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Type       | true     | `SetTeamByTag` | -                                                                                                                                                                                                      |
| Team       | true     | -              | Team to change units to.<br /><br />Supported teams are: `Player1`, `Player2`, `Employer`, `Target`, `TargetAlly`, `NeutralToAll`, `HostileToAll`, `World`                                             |
| Tags       | true     | -              | Tags to identify the unit(s) you wish to change team. If multiple are provided then ALL must match.                                                                                                    |
| AlertLance | false    | `true`         | Specifies if the lance should be on alert after they change team. Certain behaviours in the AI depend on a lance being in alert mode, such as the main combat behaviours and hunting last seen enemies |
| ApplyTags  | false    | -              | Tags to add to units when they change team                                                                                                                                                             |

## Example

```json
{
  "Type": "SetTeamByTag",
  "Team": "Employer",
  "Tags": ["defend_building_3b"],
  "AlertLance": false,
  "ApplyTags": ["defected_building"]
}
```

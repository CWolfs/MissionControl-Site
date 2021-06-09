---
id: camera-focus-result
title: Camera Focus Result
sidebar_label: Camera Focus
---

The `CameraFocus` result moves the game camera/view to a specific Encounter Object's position. You can specify various positional information with how close and high you want the camera to view the target position.

## Properties

| Property      | Required | Default            | Details                                                                                                                                               |
| ------------- | -------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type          | true     | `TagUnitsInRegion` | -                                                                                                                                                     |
| EncounterGuid | true     | -                  | Guid of the target                                                                                                                                    |
| Distance      | false    | `Medium`           | Distance the camera should be away from the target.<br /><br />Available properties: `Close`, `Medium`, `Far`.                                        |
| Height        | false    | `Default`          | Height the camera should be away from the target.<br /><br />Available properties: `Low`, `Default`, `High`.                                          |
| FocusTime     | false    | `-1`               | Length of time in `seconds` the camera should look at the target.<br /><br />Values < 0 will use the default in MapLogicConstants.json.               |
| FocusRadius   | false    | `-1`               | Size of area that should be revealed around the target if fog of war or hidden.<br /><br />Values < 0 will use the default in MapLogicConstants.json. |
| IsInterrupt   | false    | `true`             | When `true`, gameplay is stopped until the `FocusTime` completes.                                                                                     |

## Example

```json
{
  "Type": "CameraFocus",
  "EncounterGuid": "f5714221-5fc6-41e5-a369-c8aa2b6d1bcf", // Lance_Enemy_OccupyingForce
  "Distance": "Close", // Close, Medium, Far
  "Height": "Default" // Low, Default, High
}
```

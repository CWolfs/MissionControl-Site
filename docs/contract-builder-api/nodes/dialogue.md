---
id: dialogue
title: Dialogue
sidebar_label: Dialogue
---

The `Dialogue` node allows for creating dialogue related game logic.

Often, it's best to trigger dialogue within an inactive chunk that is then enabled, then specifying the `OnActiveExecute` for the dialogue. However, there are multiple ways to activate it, such as the `Simple` node's `Trigger` property.

## Simple

This node creates a simple dialogue node which can then be used in the contract json.

| Property     | Required | Default    | Details                                                                                                               |
| ------------ | -------- | ---------- | --------------------------------------------------------------------------------------------------------------------- |
| Name         | true     | -          | Name of the Node that will be used for the Unity game object                                                          |
| Type         | true     | `Dialogue` | Type of node                                                                                                          |
| SubType      | true     | `Simple`   | Subtype of node                                                                                                       |
| Guid         | true     | -          | A [UUIDv4](https://www.uuidgenerator.net/). This is then used in the contract json to link to actual written dialogue |
| Trigger      | false    | -          | Any `MessageCenterMessageType` or MC `MessageType` enum value name, e.g. `OnEncounterBegin`                           |
| ShowOnlyOnce | false    | false      |                                                                                                                       |

```json
{
  "Name": "Dialogue_First_Point_Of_Interest",
  "Type": "Dialogue",
  "SubType": "Simple",
  "Guid": "e0ca3227-ffbf-4088-a261-3d4e9ab7d4c5",
  "Trigger": "OnEncounterBegin",
  "ShowOnlyOnce": true
}
```

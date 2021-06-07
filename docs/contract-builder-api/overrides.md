---
id: overrides
title: Overrides
sidebar_label: Overrides
---

When making a custom contract type, ideally you want to reuse as much logic as possible between the maps your custom contract type is used on. All common logic to build and power your custom contract type is in the `common.jsonc` file. See [Structure](../contract-builder/structure.md) for more information on the `common.jsonc` format).

As much as you can reuse, there will always be bits of your contract type that are map specific and need to be set for the specific map. These are mostly things like:

- Positions (Spawns, turrets, regions etc)
- Map boundary (Position and size)
- Plots (Which plots are enabled)
- ...Any other map-specific variation for your custom contract type you wish to change

The override files look different to the `common.jsonc` file structure. It uses the [Json.NET query/select system](https://www.newtonsoft.com/json/help/html/QueryJsonSelectTokenJsonPath.htm) system to select parts of your `common.jsonc` and change the data with newly specified data.

## Override Structure

```json
// This file overrides the contract type 'common.jsonc' file with map specific values (such as locations and rotations)
{
  "EncounterLayerId": "mapStory_StoryEncounter3_mMoon.5f862402-45c0-495c-9fb2-604dae9a2ad6",
  "Overrides": [
    {
      "Path": "Chunks[?(@.Name == 'Chunk_PlayerLance')].Children[?(@.Name == 'Spawner_PlayerLance')]",
      "Action": "ObjectMerge",
      "Value": {
        "Name": "Spawner_PlayerLance",
        "Position": {
          "Type": "World",
          "Value": { "x": -300, "y": 140, "z": 20 }
        },
        "Rotation": {
          "Type": "World",
          "Value": { "x": 0, "y": 30, "z": 0 }
        }
      }
    },
    {
      "Path": "Chunks[?(@.Name == 'Chunk_DestroyWholeLance')].Children[?(@.Name == 'Lance_Enemy_OpposingForce')]",
      "Action": "ObjectMerge",
      "Value": {
        "Name": "Lance_Enemy_OpposingForce",
        "Position": {
          "Type": "World",
          "Value": { "x": 230, "y": 150, "z": 420 }
        },
        "Rotation": {
          "Type": "World",
          "Value": { "x": 0, "y": 270, "z": 0 }
        }
      }
    },
    {
      "Path": "Chunks[?(@.Name == 'Chunk_EncounterBoundary')].Children[?(@.Name == 'EncounterBoundaryRect')]",
      "Action": "ObjectMerge",
      "Value": {
        "Name": "EncounterBoundaryRect",
        "Position": {
          "Type": "World",
          "Value": { "x": 15, "y": 50, "z": 450 }
        },
        "Width": 900,
        "Length": 1024
      }
    }
  ]
}
```

### Top level

| Property         | Required | Default | Details                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EncounterLayerId | true     | -       | ID of the encounter layer (contract type + map combination) you wish to override. <br /><br /> You find this from the encounter layers you created as mentioned [in the set up](../contract-builder/setup.md) or on existing modder created encounter layers found in `MissionControl/overrides/encounterLayers/(ContractType)` or elsewhere defined. <br /><br /> The format is always `(map name).(uuid)` |
| Overrides        | true     | -       | List of override operations to perform to override data                                                                                                                                                                                                                                                                                                                                                     |

### Overrides

| Property | Required | Default | Details                                                                                                                                                                                                            |
| -------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Path     | true     | -       | [Json.NET query/select system](https://www.newtonsoft.com/json/help/html/QueryJsonSelectTokenJsonPath.htm) path naviagion method. <br /><br />A good tip is to review existing overrides and copy their structure. |
| Action   | true     | -       | This defines the action to perform on the selected JSON property.<br /><br />Available actions are: `Replace`, `Remove`, `ObjectMerge`. Mostly `ObjectMerge` is used.                                              |
| Value    | true     | -       | This defines the new JSON, or value, you wish to use if you selected `Replace` or `ObjectMerge` actions                                                                                                            |

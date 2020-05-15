---
id: structure
title: Understanding Structure
sidebar_label: Understanding Structure
---

## Common

The `common.jsonc` outlays all the general elements and logic for the contract type. Some structure is required, whilst others is flexible.

```json
{
  "Key": "SoloDuel", // Required. Links to the ContractType Name
  "ContractObjective": [{}], // Optional. Not fully implemented in v1.0.0 yet so does nothing
  "Plots": [
    // Optional. Enables plots in the map. See the Plots section in the API
  ],
  "Chunks": [
    // Required. Chunks go here. See the Chunks section in the API docs
  ],
  "Triggers": [
    // Required. Triggers go here. See the Triggers section in the API docs
  ]
}
```

### Plots

BattleTech maps use a system called `Plots`. `Plots` are typically collections of buildings, or bases that help make vanilla maps seem a bit more dynamic. They are turned on and off by the HBS designer when they created each contract type on a map.

From this section you can decide which plots you want to enable to help create varied experiences.

Read the [Plots API](../contract-builder-api/plots.md) section for detailed information.

### Chunks

A chunk is a collection of game logic game objects which are related. A named chunk, e.g. `PlayerLance`, often has special logic associated with it whilst using chunks purely as a logical collection of 'like' logics can also be used, e.g. `Container`.

Under a chunk you create `Node` children. A node is a specific logic piece like the ability to place a `Spawner` or create an `Objective`.

Read the [Chunks API](../contract-builder-api/chunks.md) section for detailed information.

### Triggers

BattleTech's encounter system makes use of a `Trigger`, `Condition` and `Result` system.

- A `Trigger` is an event that is sent out. For example, `OnEncounterBegin`, `OnObjectiveUpdated` or `OnDialogueComplete`
- A `Condition` is a check on a set criteria to determine if the linked `Result` should run. For example, if an objective's status is 'Success'
- A `Result` is an action that is taken. This can be anything like activate another `Chunk`, enable an `Objective`, change the `Camera` focus or fire artillery

Read the [Triggers API](../contract-builder-api/triggers.md) section for detailed information.

## Map Specific

For every map the contract type is set up to run on a `.jsonc` for map specific settings (most often positions and rotations), for example `deathvalley_desert_open_area.jsonc` (the name can be anything you want but it's a good idea to include the map name, biome and any other specifier)

```json
// This file overrides the contract type 'common.json' file with map specific values (such as locations and rotations)
{
  "EncounterLayerId": "mapGeneral_frostySlopes_iTnd.d8bb1d16-3a64-40a9-a081-03a365fd0fcf", // Same Id set in the `EncounterLayerId`
  "Overrides": [
    // Required. Overrides go here, for example positions and rotations unique to the map
  ]
}
```

## Encounter Layer Id

This must be the exact `EncounterLayerId` set in your encounter layer you created (see [Setup - Create an encounter layer](setup)). This allows you to have multiple override files for the same map and same contact type if you created a second encounter layer for it.

## Overrides

This allows you to specify which information from `common.jsonc` to override. The format of overrides is the [Json.NET query/select system](https://www.newtonsoft.com/json/help/html/QueryJsonSelectTokenJsonPath.htm).

An example of information to override would be turning on a `Plot` specific to a map, setting the lance spawn positions or setting the encounter boundary size and position.

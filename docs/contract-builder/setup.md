---
id: setup
title: Setup
sidebar_label: Setup
---

To set up a custom contract type you need to do the following:

## Create a contract type enum entry

Either:

- Edit and add a contract type entry to `MissionControl/overrides/enums/ContractType.json`
- In your mod, merge a contract type as a `DataAddendumEntries` for `ContractTypeEnumeration`

Add an entry like the following example, but changing what you require:

```json
  {
    "ID" : 10000,  // ID must be unique and not clash with another contract type. Used in the below encounter layer.
    "Name" : "SoloDuel", // Name must be unique and is used as an identifier in contract overrides JSON
    "FriendlyName" : "Solo Duel", // Doesn't need to be unique. Allows contract type stacking. Name used in the game UI
    "Version" : 0, // Has no real purpose except for a loose version control
    "IsSinglePlayerProcedural" : true, // Is true, use for the typical contracts that pop up. false for story/restoration
    "IsStory" : false, // Used for story missions
    "IsRestoration" : false, // Used for restoration missions (which are the same as story really)
    "CustomMusic" : null, // string value from `AudioState_Music_State` enum
    "IsMultiplayer" : false, // Not important for custom contracts.
    "UsesFury" : false, // Is meant to use fury instead of morale. Untested.
    "UsesSecondScaledStructureValues" : false, // Unsure of this
    "ContractRewardMultiplier" : 1, // Multipler for contract reward (of course!)
    "Illustration" : "uixTxrSpot_battleContract", // Large image in the UI for the contract type
    "Icon" : "uixSvgIcon_contract_Battle", // Icon used for the contract type
    "IsPublished" : true // This must be true, otherwise the contract type won't be available to use
  },
```

**NOTE**: Mission Control will continue to add contract types under the `10000` to `11000` range. You **MUST** select a different range to Mission Control, and other modders, when selecting a range of IDs to create.

## Create an encounter layer

Either use Mission Control's system, or create your own to add an encounter layer entry into the MDD. **This is not covered by ModTek or HBS's ModLoader**.

If using Mission Control's system:

- Create a folder with your contract type name under `MissionControl/overrides/encounterLayers`. For example, if your contract type is called `Invasion` then call it `invasion`.
- For the map you wish your contract type to be playable on, you must create a json file here.
- Name the file `encounterLayer_{contractTypeName}.{mapName}.json`, for example `encounterLayer_soloDuel.mapStory_StoryEncounter3_mMoon_craters`
- Any IDs that looks like `73b9ebfe-b62b-4ffb-87b9-a0191d2530b3` are `uuid v4`. You can generate these easily by visiting https://www.uuidgenerator.net/

Inside the file add the following, but changing what you require:

```json
{
  "EncounterLayerID": "mapArena_deathValley_aDes.73b9ebfe-b62b-4ffb-87b9-a0191d2530b3", // Unique ID as {mapName}.{UUIDv4}
  "MapID": "mapArena_deathValley_aDes", // Map ID as referenced in the `Maps` table in the MDD
  "Name": "encMC_SoloDuel_OpenArea", // Custom name unique to your encounter. encGeneral is used for vanilla. encMC for MC.
  "FriendlyName": "Solo Duel - Open Area", // Displayed only in BT's debug contract selector
  "Description": "Player must kill the duel target.", // Only used here
  "BattleValue": "0", // Always '0', even for vanilla
  "ContractTypeID": "10000", // Cross referenced ID with your above contract type enum
  "EncounterLayerGUID": "73b9ebfe-b62b-4ffb-87b9-a0191d2530b3", // Unique UUIDv4. Must be the same as the other UUIDs in this file
  "TagSetID": "mapArena_deathValley_aDes.73b9ebfe-b62b-4ffb-87b9-a0191d2530b3", // Same ID as 'EncounterLayerID' above
  "IncludeInBuild": "1" // Must be '1' otherwise the contract type won't be available to use
}
```

## Create a contract type build

The contract type build file creates the actual encounter in the select map. Mission Control loads a map and dynamically builds the entire contract type up from nothing.

I highly recommend before creating a contract type build file you look through the Mission Control `SoloDuel` contract type as an very simple example.

A contract type build for a contract type consists of two elements:

- A `common.jsonc` file which outlays all the general elements and logic for the contract type
- For every map the contract type is set up to run on a `.jsonc` for map specific settings (most often positions and rotations), for example `deathvalley_desert_open_area.jsonc` (the name can be anything you want but it's a good idea to include the map name, biome and any other specifier)

An important aspect of the `common.jsonc` is that it has a `Key` property which is the contract type `Name` from the above contract type enum created.

An important aspect of the map specific files is that it contains an `EncounterLayerId` which is the `EncounterLayerId` from the above created encounter layer. The format of overrides is the [Json.NET query/select system](https://www.newtonsoft.com/json/help/html/QueryJsonSelectTokenJsonPath.htm).

Tutorials and guides will be made soon to cover this in more detail.

## (Optional) Add an Encounter Ruleset for your contract type

This step is optional. If you're not using [random spawns](../features/random-spawns) or [additional lances](../features/additional-lances) then you won't need to create this.

As described in the [encounter rulesets](../features/encounter-rulesets.md) section, you can submit an `EncounterRuleset` to Mission Control to better control the features of Mission Control with your contract type.

These features can be things like:

- Specifying where you want the Additional Lances to spawn around
- Specifying how any of the lance spawners in the contract type will randomise their spawn, for example
  - Using a `SpawnLanceAtEdgeBoundary` to spawn the player lance on the boundary of the map
  - Using a `SpawnLanceAnywhere` to ensure an enemy reinforcement lance is spawned randomly anywhere, but at least within 10 hexs of the player lance
  - Using a `LookAtTarget` to ensure a lance is looking at a target
- Any other custom logic you wish to run using any custom rules you want

To implement this, follow the guide in the [encounter rulesets](../features/encounter-rulesets.md) section.

---
id: overview
title: Overview
sidebar_label: Overview
---

Mission Control provides a very powerful system for create custom contract types.

## What is a contract type?

A contract type is a high level concept for contracts. It is the type of contract like `Destroy Base` or `Capture Base`. For campaign story contracts a new contract type is used so, instead of a `Destroy Base` the contract type might be `Story 2 Three Years Later`.

Multiple contract types can exist with a different `ID` and `Name` but the same `FriendlyName`. This allows different contract types to appear under the same name. For example, `Battle` contract type doesn't exist. It is two contract types called `SimpleBattle` and `ThreeWayBattle` with the same `FriendlyName` of `Battle`. You can make use of this to create lots of different contract types along the same theme if you want.

The structure for a contract type is stored in BattleTech's Unity scene files so it's not easily accessible for modding. It defines all the logic of a contract, for example:

- Where the lance spawns are
- What buildings should appear
- What special map logic should run
- If there is an extraction zone

## What is a contract?

A contract, or `ContractOverride` at a code level, is the customisation layer that is applied to the contract type. This provides the contract specific information like specific dialogue, objective text and what types of lances will spawn, to give a few examples.

## What is the Mission Control contract type builder?

It's a powerful system for creating custom contract types. You create the structure of the contract type in JSON and hook up triggers, conditions and results to drive the map logic.

As the feature support grows it will support more and more vanilla and, more importantly, custom map logic. This means you'll be able to make new story campaigns, contract types that put a completely new spin on the expected experience and even crazy ideas like linked logic in a map that is stored back into the simulation layer to directly affect the simgame (or future contract types).

The limit will only be your imagination, and reuse of the existing maps (for now).

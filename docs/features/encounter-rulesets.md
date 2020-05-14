---
id: encounter-rulesets
title: Encounter Rulesets
---

Mission Control allows other modders to add their own contract type rulesets to be used. When added to the mod, the mod will randomly select a ruleset for a contract type from the given choices.

Encounter Rulesets are what control the manipulation of a mission/contract. To manipulate encounters you create lots of `Logic` objects and submit them to the `EncounterLogic` system. Mission Control then intelligently runs these logic blocks at the correct point as the game runs.

## Example Ruleset

Below is an example of the `AssassinateEncounterRules` used in Mission Control. We'll run through each bit of code to explain what is happening.

```clike
using BattleTech;

using MissionControl.Logic;

namespace MissionControl.Rules {
  public class AssassinateEncounterRules : EncounterRules {
    public AssassinateEncounterRules() : base() { }

    public override void Build() {
      Main.Logger.Log("[AssassinateEncounterRules] Setting up rule object references");
      BuildRandomSpawns();
      BuildAdditionalLances("AssassinateSpawn", SpawnLogic.LookDirection.AWAY_FROM_TARGET,
        "SpawnerPlayerLance", SpawnLogic.LookDirection.AWAY_FROM_TARGET, 25f, 100f);
    }

    public void BuildRandomSpawns() {
      if (!MissionControl.Instance.IsRandomSpawnsAllowed()) return;

      Main.Logger.Log("[AssassinateEncounterRules] Building spawns rules");
      EncounterLogic.Add(new SpawnLanceAtEdgeOfBoundary(this, "SpawnerPlayerLance", "AssassinateSpawn"));
      EncounterLogic.Add(new SpawnLanceAnywhere(this, "AssassinateSpawn", "SpawnerPlayerLance", 400, true));
      EncounterLogic.Add(new LookAtTarget(this, "SpawnerPlayerLance", "AssassinateSpawn", true));
    }

    public override void LinkObjectReferences(string mapName) {
      ObjectLookup["AssassinateSpawn"] = EncounterLayerData.gameObject.FindRecursive("Lance_Enemy_AssassinationTarget");
    }
  }
}
```

## Example Walkthrough

### Set up the right special superclass

```clike
public class AssassinateEncounterRules : EncounterRules {
```

To create a ruleset you must create a class and extend the `EncounterRules` superclass. This provides lots of inbuilt functionality useful for encounters and allows Mission Control to use it.

### Create a build step

```clike
public override void Build() {
  Main.Logger.Log("[AssassinateEncounterRules] Setting up rule object references");
  BuildSpawns();
  BuildAdditionalLances("AssassinateSpawn", SpawnLogic.LookDirection.AWAY_FROM_TARGET,
    "SpawnerPlayerLance", SpawnLogic.LookDirection.AWAY_FROM_TARGET, 25f, 100f);
}
```

This is a special method which is required. It is called by Mission Control at the appropriate time to create the initial configuration. From here you can chain into your own methods for organisational purposes. I've used it to chain on Ai, Spawns and the special hook for `Additional Lances` support for this contract type.

The `EncounterRules` superclass gives you access to an easy way of enabling `Additional Lances` for your encounter. Here is the method hook explained in more detail.

```clike
BuildAdditionalLances(TargetKeyToSpawnEnemyLancesAround, DirectionToLookAtInRelationToEnemyTarget, TargetKeyToSpawnAllyLancesAround,
  DirectionToLookAtInRelationToAllyTarget, MinDistanceForAlliesToSpawnFromAllyTarget, MaxistanceForAlliesToSpawnFromAllyTarget);
```

The target keys are bound at the bottom of the class with the `LinkObjectReferences` method. This will be explained in a moment.

### Specify Custom Logic

You can specify custom logic to be applied in a contract type. You can do this as follows:

```clike
public void BuildCustomLogic() { // any method name, then call it from the Build() method
  EncounterLogic.Add(new MyCustomLogic());
}
```

This method is for organisational purposes only. You can set up your custom logic in a method similar to this.

Two things are happening here. Firstly, you would have previously created a custom logic block which contains your logic. Secondly, you add this logic block relating to your custom logic to the `EncounterLogic` property that is provided by the superclass `EncounterRules` your class has access to. The `EncounterLogic` list contains logic blocks of different type and that execute at different points in the game depending on their type. The main types are:

- RESOURCE_REQUEST
- CONTRACT_OVERRIDE_MANIPULATION
- ENCOUNTER_MANIPULATION
- SCENE_MANIPULATION

and these types are executed in that order depending on when the game requires them to be executed.

### Build Spawns

```clike
public void BuildSpawns() {
  Main.Logger.Log("[AssassinateEncounterRules] Building spawns rules");
  EncounterLogic.Add(new SpawnLanceAtEdgeOfBoundary(this, "SpawnerPlayerLance", "AssassinateSpawn"));
  EncounterLogic.Add(new SpawnLanceAnywhere(this, "AssassinateSpawn", "SpawnerPlayerLance", 400));
  EncounterLogic.Add(new LookAtTarget(this, "SpawnerPlayerLance", "AssassinateSpawn"));
}
```

This method is for organisational purposes only. You can set up your spawn logic in a method similar to this.

Mission Control provides four spawn logic blocks to be used to move targets around the map. They are:

- SpawnLanceAnywhere
- SpawnLanceAroundTarget
- SpawnLanceMembersAroundTarget
- SpawnLanceAtEdgeBoundary

and there are two orientation logic blocks of:

- LookAtTarget
- LookAwayFromTarget

For each of these you provide different arguments but they all are very similar. You provide the target you wish to move around, the target you wish to be the orientation target (e.g to look at after being moved and to pathfind check to) and sometimes provide the look type (TOWARDS ORIENTATION TARGET, AWAY FROM ORIENTATION TARGET), minimum and maximum spawn distance constraints.

### Link Object References

```clike
public override void LinkObjectReferences(string mapName) {
  ObjectLookup.Add("AssassinateSpawn", EncounterLayerData.gameObject.FindRecursive("Lance_Enemy_AssassinationTarget"));
}
```

This is a very important method. Almost every logic block requires the use of keys to identify which item to move around the game map. This is how those keys are linked up to the game objects in the game scene / map. In this example, we assign the object found under the `EncounterLayerData` object in the Unity game scene which has the name `Lance_Enemy_AssassinationTarget`, which is a spawner object for the encounter, to the key `AssassinateSpawn`.

You may notice there is no `SpawnerPlayerLance` entry. This is because `SpawnerPlayerLance` is a special key that is auto-linked for you already. It will always be available for you to use.

To discover the name and unity game scene location of the object to link I highly recommend you use the mod [BTDebug](https://github.com/CWolfs/BTDebug) with the latest releases found in the [Releases](https://github.com/CWolfs/BTDebug/releases) area. It has a runtime inspector that allows you to view what objects are in the game scene / map so you can correctly link up what you need.

## Send Your Custom Ruleset To Mission Control

You're able to provide your custom ruleset to Mission Control and it will use it. Mission Control randomly selects from all the available rulesets for a particular contract type.

To do this you must first create your own ruleset by linking your mod to `MissionControl.dll` then creating it as explained above. Then, in your mod code execute code similar to the below example:

```clike
MissionControl.Instance.AddEncounter("Assassinate", typeof(MyCustomAssassinateRuleset));  // Add a custom assassinate ruleset
```

If for whatever reason you wish to only have your custom rulesets running you can clear all loaded rulesets with the following code:

```clike
MissionControl.Instance.ClearEncounters();  // Clears all encounters for all contract types
```

and

```clike
MissionControl.Instance.ClearEncounters("Assassinate");  // Clears all encounters for only the 'Assassinate' contract type
```

## Summary

It's worth reviewing the code of this mod to see what already happens for the default encounter rulesets, especially looking at the `EncounterRules.cs` class to see what the mod already provides for you to use (e.g. it contains properties that link to the encounter object in the Unity game scene you can use).

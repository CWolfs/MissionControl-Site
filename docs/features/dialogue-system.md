---
id: dialogue-system
title: Dialogue System
---

Mission Control adds a dialogue API for use in combat dialogue. A contract writer can use it to gain much more control and information over dialogue. All the features of the dialogue system were introduced in MC v1.5.

![Pilot Dialogue](/img/dialogue-system/pilot-dialogue.png)

## Dynamic CastDefs - Player Lance Pilots as Cast

In vanilla BattleTech the Player's Commander and lance pilots cannot be involved in any contract dialogue. With Mission Control a contract writer can select your Commander or any Player lance pilot to talk in the contract.

### Commander

The Commander is the actual Commander pilot created at the start of a Career or Campaign playthrough. You can use this both if the Commander is part of the dropped Player lance or is left behind on the Argo/Leopard.

To use this approach you put `castDef_Commander` as your `selectedCastDefId`.

```json
{
  "dialogue": {
    "EncounterObjectGuid": "73df8d9c-a274-48fd-98c9-2bd0d7860e83"
  },
  "name": "Dialogue_MissionStart",
  "overrideDialogueBucketId": "",
  "dialogueContent": [
    {
      "words": "I'm your Commander! Listen to me, Pilots!",
      "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
      "selectedCastDefId": "castDef_Commander",
      "emote": "Default",
      "audioName": "NONE",
      "cameraFocusGuid": "",
      "cameraDistance": "Far",
      "cameraHeight": "Default",
      "revealRadius": -1
    }
  ]
}
```

### Pilot - True Random

A true random pilot is one that is randomly selected from all Plaer lance pilots. It doesn't keep track of who was selecetd last time it was used and can select the Commander if the Commander is a dropped lance pilot.

To use this approach you put `castDef_TeamPilot_Random` as your `selectedCastDefId`.

```json
{
  "dialogue": {
    "EncounterObjectGuid": "73df8d9c-a274-48fd-98c9-2bd0d7860e83"
  },
  "name": "Dialogue_MissionStart",
  "overrideDialogueBucketId": "",
  "dialogueContent": [
    {
      "words": "I'm a random Player pilot talking. It will show my name and pilot portrait in the dialogue.",
      "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
      "selectedCastDefId": "castDef_TeamPilot_Random",
      "emote": "Default",
      "audioName": "NONE",
      "cameraFocusGuid": "",
      "cameraDistance": "Far",
      "cameraHeight": "Default",
      "revealRadius": -1
    }
  ]
}
```

### Pilot - Bound Random

A bound random pilot is one that is randomly selected from unbound Player lance pilots. It is bound for reference in further dialogue entries and even referenced in the actual dialogue (see [Commander & Pilot References](#commander--pilot-references)).

**NOTE:** If `castDef_Commander` is used at all in the contract's dialogue then `castDef_TeamPilot_Random_[IDENTIFIER]` will never select the Commander pilot if they dropped into combat. This is to prevent weird situations where the Commander would end up having conversations with themself.

To use this approach you put `castDef_TeamPilot_Random_[IDENTIFIER]` as your `selectedCastDefId`. `[IDENTIFIER]` can be anything such as a number or a useful word to track your plot, such as `castDef_TeamPilot_Random_AnnoyedPilot`.

```json
{
  "dialogue": {
    "EncounterObjectGuid": "73df8d9c-a274-48fd-98c9-2bd0d7860e83"
  },
  "name": "Dialogue_MissionStart",
  "overrideDialogueBucketId": "",
  "dialogueContent": [
    {
      "words": "I'm a random Player pilot talking. I can be referenced or reused for more dialogue later in the contract.",
      "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
      "selectedCastDefId": "castDef_TeamPilot_Random_1", // Could also be castDef_TeamPilot_Random_AnnoyedPilot
      "emote": "Default",
      "audioName": "NONE",
      "cameraFocusGuid": "",
      "cameraDistance": "Far",
      "cameraHeight": "Default",
      "revealRadius": -1
    }
  ]
}
```

### Pilot - Specific Lance Position

A specific lance position pilot is one that is selected based on its position as it existed when it was organised in the lance units selection screen.

**NOTE:** _Using this approach for selecting lance units for dialogue is <ins>not recommended</ins>. When units die using this approach it's not guarnteed to correctly align the castDefs and dialogue references (unlike the other approaches that handle it seamlessly). If you must use this it's recommened you keep the dialogue using it to as early as possible in the mission and to highly scripted missions._

**RECOMMENDATION:** Use [Commander](#commander) or [Bound Random](#pilot---bound-random) unless you absolutely must have a unit in a specific position talking instead as it handles pilot death seamlessly.

To use this specific lance position approach you put `castDef_TeamPilot_Position_[number]` where `[number]` is the position of the unit you wish to select in the Player's lance. The first unit starts at position `1`.

```json
{
  "dialogue": {
    "EncounterObjectGuid": "73df8d9c-a274-48fd-98c9-2bd0d7860e83"
  },
  "name": "Dialogue_MissionStart",
  "overrideDialogueBucketId": "",
  "dialogueContent": [
    {
      "words": "I'm Player pilot 1. The first pilot in the lance.",
      "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
      "selectedCastDefId": "castDef_TeamPilot_Position_1", // Selects unit 1 in the Player Lance (if unit isn't dead)
      "emote": "Default",
      "audioName": "NONE",
      "cameraFocusGuid": "",
      "cameraDistance": "Far",
      "cameraHeight": "Default",
      "revealRadius": -1
    }
  ]
}
```

### Unit Ejection / Death Fallback

When units are destroyed or pilots eject then it makes no sense for them to continue talking in the contract for the dialogue. In this case the dialogue system attempts to reassign the speaker of the 'dead' pilot to another pilot or Dropship crew member. The following situations and what happens are explained, when:

- Commander dies when using `castDef_Commander` - Darius takes over the dialogue

- Commander dies when selected for `castDef_TeamPilot_Random_[identifier]` - Another pilot that is not bound to another `castDef_TeamPilot_Random_[identifier]` takes over the dialogue. If there are no more unbound pilots then Darius takes over the dialogue

- Pure Random pilot dies - Another pilot is randomly selected

- Bound Random pilot dies - Another pilot that is not bound to another `castDef_TeamPilot_Random_[identifier]` takes over the dialogue. If there are no more unbound pilots then Darius takes over the dialogue

- Specific Position pilot dies - A random pilot is selected but often a desync happens every time a dialogue for this pilot occurs. Also, references in dialogue to this `TeamPilot_Position_[number]` can desync. <ins>Not Recommended</ins>

## References - Before & After Processing

Any mention of 'References' refers to the following two approaches:

- `{...}` - Process the information within the curly braces before BattleTech runs its processing / interpolation on the dialogue text
- `[...]` - Process the information within the square braces after Mission Control's `{...}` processing and BattleTech runs its processing / interpolation on the dialogue text

Not every API is available at both `{...}` and `[...]` as for some it doesn't make sense. Each section will make it clear at which level it is available. For examples, mostly `{...}` will be used unless the API being described isn't available in that level.

## Commander & Pilot References

**AVAILABLE IN:** `{...} / before`

Mission Control provides an API for use in the actual dialogue that allows you to get information related to pilots. This isn't possible with vanilla BattleTech.

### Speaker

A modder can access the speaker's information with: `{MC.PlayerLances.Speaker.[PROPERTY]}`. This is useful for all Commander and pilot dialogue situations but it's especially useful for [True Random Pilots](#pilot---true-random) (`castDef_TeamPilot_Random`) so they can reference themselves when talking, as there is no other way to reference their information.

### Commander

A modder can access the Commander's information with: `{MC.Commander.[PROPERTY]}` and `{MC.PlayerLances.Commander.[PROPERTY]}`. The Commander can be used regardless of if the Commander has dropped in the Player's lance as a pilot, or if they remained on the Argo/Leopard.

### Pilot - Bound Random

A modder can access the bound pilot's information with: `{MC.PlayerLances.TeamPilot_Random_[IDENTIFIER].[PROPERTY]}`. `TeamPilot_Random_[IDENTIFIER]` section must match a `selectedCastDefId` used in the contract, for example, `castDef_TeamPilot_Random_TiredPilot` must be used somewhere in the contract then `{MC.PlayerLances.TeamPilot_Random_TiredPilot.[PROPERTY]}` can be used.<br/><br/>The reference / dialogue castdef order does not matter and the reference can be used before the dialogue the speaker is assigned to has been activated.

### Pilot - Specific Lance Position

A modder can access the speaker's information with: `{MC.PlayerLances.TeamPilot_Position_[PositionNumber].[PROPERTY]}`. For example, `TeamPilot_Position_[IDENTIFIER]` could look like `{MC.PlayerLances.TeamPilot_Position_2.[PROPERTY]}`.

**NOTE:** It is <ins>not recommended</ins> you make use of this reference method unless you really need to use it. The reasoning is explained in [Pilot - Specific Lance Position](#pilot---specific-lance-position).

### Properties Reference

Available properties for pilot referenecs are outlined below. More will be added in future versions of Mission Control.

| Propety     | Example                                         | Details                                                                                                                               |
| ----------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName | `{MC.PlayerLances.Speaker.DisplayName}`         | If the speaker is a pilot their callsign will appear.<br/><br/>If the speaker is a dropship crew member their first name will appear. |
| UnitName    | `{MC.PlayerLances.TeamPilot_Random_1.UnitName}` | Simple name of the unit, e.g. `Atlas`                                                                                                 |
| UnitVariant | `{MC.PlayerLances.Commander.UnitVariant}`       | Variant name of the unit, e.g. `AS7-D`                                                                                                |

Some examples of how this looks are:

#### Commander introduces themselves

```json
{
  "dialogue": {
    "EncounterObjectGuid": "73df8d9c-a274-48fd-98c9-2bd0d7860e83"
  },
  "name": "Dialogue_MissionStart",
  "overrideDialogueBucketId": "",
  "dialogueContent": [
    {
      "words": "Hi, I'm Commander {MC.PlayerLances.Speaker.DisplayName}",
      "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
      "selectedCastDefId": "castDef_Commander",
      "emote": "Default",
      "audioName": "NONE",
      "cameraFocusGuid": "",
      "cameraDistance": "Far",
      "cameraHeight": "Default",
      "revealRadius": -1
    }
  ]
}
```

#### Pilot has a conversation with another pilot

```json
{
  "dialogue": {
    "EncounterObjectGuid": "73df8d9c-a274-48fd-98c9-2bd0d7860e83"
  },
  "name": "Dialogue_MissionStart",
  "overrideDialogueBucketId": "",
  "dialogueContent": [
    {
      "words": "Hey {MC.PlayerLances.TeamPilot_Random_2}! How are things?",
      "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
      "selectedCastDefId": "castDef_TeamPilot_Random_1",
      "emote": "Default",
      "audioName": "NONE",
      "cameraFocusGuid": "",
      "cameraDistance": "Far",
      "cameraHeight": "Default",
      "revealRadius": -1
    },
    {
      "words": "Hey {MC.PlayerLances.TeamPilot_Random_1} - Doing good thanks.",
      "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
      "selectedCastDefId": "castDef_TeamPilot_Random_2",
      "emote": "Default",
      "audioName": "NONE",
      "cameraFocusGuid": "",
      "cameraDistance": "Far",
      "cameraHeight": "Default",
      "revealRadius": -1
    }
  ]
}
```

#### Random pilot replying to the Commander

```json
{
  "dialogue": {
    "EncounterObjectGuid": "73df8d9c-a274-48fd-98c9-2bd0d7860e83"
  },
  "name": "Dialogue_MissionStart",
  "overrideDialogueBucketId": "",
  "dialogueContent": [
    {
      "words": "Damn. That ambush was tough to fight though. Let's push on!",
      "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
      "selectedCastDefId": "castDef_Commander",
      "emote": "Default",
      "audioName": "NONE",
      "cameraFocusGuid": "",
      "cameraDistance": "Far",
      "cameraHeight": "Default",
      "revealRadius": -1
    },
    {
      "words": "With you through hell and highwater, {MC.Commander.DisplayName}!",
      "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
      "selectedCastDefId": "castDef_TeamPilot_Random",
      "emote": "Default",
      "audioName": "NONE",
      "cameraFocusGuid": "",
      "cameraDistance": "Far",
      "cameraHeight": "Default",
      "revealRadius": -1
    }
  ]
}
```

## Conditional Dialogue

**AVAILABLE IN:** `{...} / before`

Mission Control can allow you to conditionally display dialogue based on some pre-defined logic. This is powerful as it can add another layer of variation on top of your contract. You can guide your contract based on how the player is playing the contract or even the game itself.

### Overview

Conditional dialogue has the following rules:

- Conditions must always be at the start of the dialogue
- Conditions that resolve to `true` / `success` will display the dialogue
- Conditions that resolve to `false` / `failure` will _**not**_ display the dialogue
- Conditions must always start with `{MC.If` to indicate it's a conditional

### Multi-Conditions

You can combine up to 2 conditionals together to form a multi-conditional check. The rules for multi-conditions are:

- Multi-conditions must wrap the conditions in another `{...}`
- Multi-conditions can only use `AND` or `OR` to combine conditions

For example:

- `{{conditional1} AND {conditional2}}` (high level structure)
- `{{MC.If.EmployerFactionName.Contains.Capellan} OR {MC.If.Commander.HasTag.commander_family_noble}}`

### Reference - Faction-Related

You can check faction information with the faction related conditions.

| API                | Example                                       | Details                                                                                                                                                                          |
| ------------------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*FactionType      | `{MC.If.EmployerFactionType.Is.Pirate}`       | Check a Team's Faction's Type.<br/><br/>Teams: EmployerTeam, TargetTeam<br/><br/>Operations: `Is`, `IsNot`<br/><br/>Types: `GreatHouse`, `Merc`, `Pirate`, `Clan`, `RealFaction` |
| \*FactionName      | `{MC.If.TargetFactionName.Contains.Capellen}` | Check a Team's Faction's Name.<br/><br/>Teams: EmployerTeam, TargetTeam<br/><br/>Operations: `Is`, `IsNot`, `Contains`                                                           |
| \*FactionShortName | `{MC.If.TargetFactionShortName.IsNot.Davion}` | Check a Team's Faction's ShortName.<br/><br/>Teams: EmployerTeam, TargetTeam<br/><br/>Operations: `Is`, `IsNot`, `Contains`                                                      |

### Reference - Tags-Related

You can check any tag information with the tag-related related conditions. All tag related APIs can use the following: `HasTag`, `HasNoTag`, `HasAllTags`, `HasAnyTags`, `HasNoTags`. Checks that use multiple tags require the list to be comma seperated, for example, `{MC.If.System.HasNoTags.planet_other_ruins,planet_civ_primitive}`.

| API       | Example                                                | Details                                                                                                  |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Encounter | `{MC.If.Encounter.HasNoTag.mc_blackout_phase_1b}`      | An Encounter is a special Mission Control tag scope that is reset after every mission/combat.            |
| Pilot     | `{MC.If.PlayerLances.Speaker.HasTag.pilot_reckless}`   | Check a pilot's tags.<br/><br/>Pilot References: `Speaker`, `Commander`, `TeamPilot_Random_[IDENTIFIER]` |
| Commander | `{MC.If.Commander.HasTag.commander_youth_bankrupt}`    | Check the Commander's tags                                                                               |
| Company   | `{MC.If.Company.HasAnyTags.argo_medBay2,argo_medBay3}` | Check the Company's tags                                                                                 |
| System    | `{MC.If.System.HasNoTag.planet_other_ruins}`           | Check the System's tags                                                                                  |

### Reference - Random

You can introduce some random elements into your dialogue with the random conditionals.

| API              | Example                                   | Details                                                                                                                                                                                                      |
| ---------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RandomPercentage | `{MC.If.RandomPercentage.IsLessThan.30%}` | Generates a random percentage from 0 to 100. If the value is within the specified range it returns a success.<br/><br/>Operators: `Is`, `IsLessThan`, `IsLessThanOrIs`, `IsGreaterThan`, `IsGreaterThanOrIs` |

#### Only show dialogue 25% of the time

```json
{
  "words": "{MC.If.RandomPercentage.IsLessThanOrIs.25%}You'll only see me say this 25% of the time.",
  "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
  "selectedCastDefId": "castDef_DariusDefault",
  "emote": "Default",
  "audioName": "NONE",
  "cameraFocusGuid": "e7e9f35b-7ed8-404e-9dae-69be61de2dd3",
  "cameraDistance": "Medium",
  "cameraHeight": "Default",
  "revealRadius": -1
}
```

## Modifications in Dialogue

**AVAILABLE IN:** `{...} / before` and `[...] / after`

Sometimes a modder will want to make game modifications when dialogue is activated and displayed. Mission Control provides some modification APIs.

| API           | Example                                             | Details                                                                                                                                            |
| ------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| EncounterTags | `{MC.Modification.AddTo.EncounterTags.my_tag}`      | Sets an Encounter tag.<br/><br/>Operations: `AddTo`, `RemoveFrom`.                                                                                 |
| Pilot         | `[MC.Modification.AddTo.SpeakerTags.my_tag]`        | Sets a tag for a pilot.<br/><br/>Operations: `AddTo`, `RemoveFrom`.<br/><br/>Pilot References: `SpeakerTags`, `TeamPilot_Random_[IDENTIFIER]_Tags` |
| CommanderTags | `[MC.Modification.RemoveFrom.CommanderTags.my_tag]` | Sets a Commander tag.<br/><br/>Operations: `AddTo`, `RemoveFrom`.                                                                                  |
| CompanyTags   | `{MC.Modification.RemoveFrom.CompanyTags.my_tag}`   | Sets a Company tag.<br/><br/>Operations: `AddTo`, `RemoveFrom`.                                                                                    |
| SystemTags    | `[MC.Modification.AddTo.SystemTags.my_tag]`         | Sets a System tag.<br/><br/>Operations: `AddTo`, `RemoveFrom`.                                                                                     |

### Example of adding a tag

```json
{
  "words": "{MC.If.Commander.HasTag.commander_career_merchantGuard}{MC.Modification.AddTo.EncounterTags.mc_recognised_strange_turrets}<color=#85DBF6FF>[Merchant Guard Career]</color> ...the way those turrets came online. It reminds me of a non-standard turret attack program I saw a merchant try and sell.",
  "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
  "selectedCastDefId": "castDef_Commander",
  "emote": "Default",
  "audioName": "NONE",
  "cameraFocusGuid": "e7e9f35b-7ed8-404e-9dae-69be61de2dd3",
  "cameraDistance": "Medium",
  "cameraHeight": "High",
  "revealRadius": -1
}
```

## Formatting

**AVAILABLE IN:** `[...] / after`

Mission Control can help you format text. Some text that comes from BattleTech is in the wrong style or case. This is usually the case with the vanilla BattleTech `{TEAM_EMP.FactionDef.Name}` reference, as they are all first character lowercase. You can fix it with the following:

| Propety       | Example                                                | Details                                                              |
| ------------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| ToUpper       | `[MC.Format.ToUpper.{TEAM_EMP.FactionDef.Name}]`       | Changes the property to all upper case formatting                    |
| ToLower       | `[MC.Format.ToLower.{TEAM_EMP.FactionDef.Name}]`       | Changes the property to all lower case formatting                    |
| ToUpperFirst  | `[MC.Format.ToUpperFirst.{TEAM_EMP.FactionDef.Name}]`  | Changes the property's first character to upper case formatting      |
| ToAlternating | `[MC.Format.ToAlternating.{TEAM_EMP.FactionDef.Name}]` | Changes the property to alternating lower then upppercase formatting |

#### Example fixing FactionDef.Name

```json
{
  "words": "[MC.Format.ToUpperFirst.{TEAM_EMP.FactionDef.Name}] wish you safe, Ms. Bosh. We'll have you out of here momentaily.",
  "wordsColor": { "r": 1, "g": 1, "b": 1, "a": 1 },
  "selectedCastDefId": "castDef_DariusDefault",
  "emote": "Default",
  "audioName": "NONE",
  "cameraFocusGuid": "e7e9f35b-7ed8-404e-9dae-69be61de2dd3",
  "cameraDistance": "Medium",
  "cameraHeight": "Default",
  "revealRadius": -1
}
```

## Tricks & Tips

### Overcoming the 2 Conditional Limit per Multi-Conditional

Currently the multi-conditional system only supports combining up to 2 conditionals. You can overcome this by using a dialogue node to combine checks into one via a tag.

- Make a dialogue run a [Multi-Conditional](#multi-conditions) check
- On success, set an Encounter-level tag with a [Modification](#modifications-in-dialogue)
- In the same dialogue, set the rest of the text to be `|SKIP|` - this will prevent the dialogue from appearing even though the conditionls and modification ran

This way you can now use the tag you set in a new multi-conditional with a third conditional check. You'll be able to stack these up to achieve as many conditional checks as you need.

#### Example

```json
// Combine two conditionals into a tag
{
  "words": "{{MC.If.Encounter.HasTag.mc_recognised_strange_turrets} AND {MC.If.Encounter.HasTag.mc_blackout_phase1b}}{MC.Modification.AddTo.EncounterTags.mc_solved_crime}|SKIPDIALOGUE|"
}

// In another dialogue, use this tag with another conditional
{
  "words": "{{MC.If.Encounter.HasTag.mc_solved_crime} AND {MC.If.Commander.HasTag.commander_youth_bankrupt}}Say something unique to this situation!"
}
```

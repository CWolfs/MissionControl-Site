---
id: extended-lances
title: Extended Lances
---

Increase the sizes of lances where it makes sense. For the vanilla game this does nothing if the `LanceSizes` section has not been set up by a player or modpack. A player or modpack can set up Clan stars (5 mechs) or Comstar Demi-lances / Reinforced lances (6 mechs).

This works for both vanilla spawn points for contract types and spawns created by Mission Control.

Extended Lances can change the lance size of vanilla lance spawns and ones created with Mission Control's `Additional Lances` feature.

Extended Lances is very flexible and allows for full control on how a player/modder wishes to extend a lance. You can extend it in four ways:

- `LanceSize` determining the global lance size for the faction. See the below table.
- [Per-contract override](per-contract-overrides) (`MissionControl/config/Contracts` or `MissionControl/config/Flashpoints`) that sets a specific lance size
- `LanceDef` that has a tag (defined in `ForceLanceDefSizeWithTag` in the settings.json) in its `LanceTags/tagSetSourceFile` property to enforce the unit size defined in the `LanceDef`
- `LanceOverride` (in the contract json) that has a tag (defined in `ForceLanceOverrideSizeWithTag` in the settings.json) in its `lanceTagSet/tagSetSourceFile` property to enforce the `LanceOverride` unit size defined in the `ContractOverride` (contract json)

## Settings Breakdown

```json
"ExtendedLances": {
  "Enable": true,
  "EnableForFlashpoints": true,
  "EnableForStory": false,
  "EnableForTargetAlly": true,
  "EnableForEmployerAlly": true,
  "EnableForHostileToAll": true,
  "EnableForNeutralToAll": true,
  "Autofill": true,
  "AutofillType": "RespectEmpty",
  "AutofillUnitCopyType": "RandomInLance",
  "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
  "SkipWhenTaggedWithAny": ["lance_type_solo"],
  "SkipWhenTaggedWithAll": [],
  "SkipWhenExcludeTagsContain": ["mc_no_extended_lance", "no_extended_lance"],
  "ForceLanceOverrideSizeWithTag": "mc_force_extended_lance",
  "ForceLanceDefSizeWithTag": "mc_force_extended_lance",
  "LanceSizes": {
    "5": [
      {
        "Faction": "AuriganRestoration"
      },
      {
        "Faction": "TaurianConcordat",
        "DifficultyMod": -1
      }
    ],
    "6": [
      {
        "Faction": "Comstar",
        "DifficultyMod": -3
      }
    ]
  }
}
```

| Property                                 | Required? | Default                    | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------- | --------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Enable`                                 | Optional  | true                       | Should this feature be enabled or not?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `EnableForFlashpoints`                   | Optional  | true                       | Enable feature for Flashpoints if `EnableFlashpointOverrides` is `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `EnableForStory`                         | Optional  | false                      | Enable feature for Story if `EnableStoryOverrides` is `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `EnableForTargetAlly`                    | Optional  | true                       | Enables this feature for `TargetAlly` team if `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `EnableForEmployerAlly`                  | Optional  | true                       | Enables this feature for `EmployerAlly` team if `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `EnableForHostileToAll`                  | Optional  | true                       | Enables this feature for `HostileToAll` team if `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `EnableForNeutralToAll`                  | Optional  | true                       | Enables this feature for `NeutralToAll` team if `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `Autofill`                               | Optional  | true                       | If `true`, EL will attempt to autofill a lance up to the lance size set below under `LanceSizes`. This is currently just a copy of the unit in the first lance slot                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `AutofillType`                           | Optional  | `RespectEmpty`             | Allow for the autofill to be configured.<br/><br/>`RespectEmpty` is the legacy and default. When a LanceOverride or LanceDef has empty units defined (e.g. mechDef_None, vehicleDef_None) then it will respect those and not autofill them.<br/><br/>`FillEmpty` is a new autofill behaviour. When a LanceOverride or LanceDef has empty units defined (e.g. mechDef_None, vehicleDef_None) then it will autofill and replace them so units will spawn in those slots.                                                                                                                                                                                                                                                                                                                                                                     |
| `AutofillUnitCopyType`                   | Optional  | `RandomInLance`            | At times Extended Lances needs to copy units to great a variable and interesting lance when autofilling it up to the Faction Size (or any overridden size). There are two behaviours for copying units. slot.<br/><br/>In this case EL tries to copy a 'Tagged' lance so to use this tagged UnitSpawnPointOverride and leverage the tags to provide variation. If there are no 'Tagged' lances available to copy it will use the defined behaviour in AutofillUnitCopyType in the settings.json.<br/><br/>`FirstInLance` is the legacy behaviour. It would pick the first unit (index 0) and copy it (giving it new identify/clearing custom names etc).<br/><br/>`RandomInLance` is the new behaviour and is now the default behaviour. It picks a random unit from the Lance to copy (giving it new identify/clearing custom names etc). |
| `AutofillStartingFromContractDifficulty` | Optional  | `3`                        | Will not autofill units until the defined contract difficulty (real difficulty and not UI/visible UI difficulty). This was added to help make a fairer early game. LanceDefs selected that contain the units will still be used. This only affects autofilling LanceDefs/LanceOverrides that are below the Faction `LanceSize` and aren't filled with empty units (e.g. mechDef_None etc)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `SkipWhenTaggedWithAny`                  | Optional  | `["lance_type_solo"]`      | Skip if ANY of the set tags exist under a lance `lanceTagSet` in the contract override JSON being used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `SkipWhenTaggedWithAll`                  | Optional  | `[]`                       | Skip if ALL of the set tags exist under a lance `lanceTagSet` in the contract override JSON being used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `SkipWhenExcludeTagsContain`             | Optional  | `["mc_no_extended_lance"]` | Skip if ANY of the set tags exist under a lance `lanceExcludedTagSet` in the contract override JSON                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `ForceLanceOverrideSizeWithTag`          | Optional  | `mc_force_extended_lance`  | Provides a way to force EL to allow specific LanceOverride in a ContractOverride (the lance section in a contract json) set ups.<br/><br/>For example, A ContractOverride's LanceOverride 'Manual' lance set up has 8 UnitSpawnPointOverrides defined in it. The modder wants this contract to only spawn this exact set up. The modder would add the tag 'mc_force_extended_lance' in the 'lanceTagSet/tagSetSourceFile' property of the LanceOverride. Then exactly 8 units will be spawned no matter what EL settings exist (e.g. overriding of the settings.json Faction Size and per-contract overrides).                                                                                                                                                                                                                             |
| `ForceLanceDefSizeWithTag`               | Optional  | `mc_force_extended_lance`  | Provides a way to force EL to allow specific LanceDef set ups.<br/><br/>For example, A LanceDef of 3 units is selected. If it contains a special tag in the 'LanceTags/tagSetSourceFile' property 'mc_force_extended_lance' - then only exactly 3 units will be spawned no matter what EL settings exist (e.g. overriding of the settings.json Faction Size and per-contract overrides).                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `LanceSizes`                             | Optional  | N/A                        | Sets which faction should have higher lance sizes. By default all faction lances are 4 units like vanilla.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Lance Sizes

| Property                             | Required? | Default | Example         |
| ------------------------------------ | --------- | ------- | --------------- |
| Any string number above 4 (e.g. "5") | Optional  | N/A     | See Table Below |

### Lance Sizes Data

| Property        | Required? | Default | Example                                                                                                          |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `Faction`       | true      | true    | The faction short name is used to identify which faction should have the set number of units                     |
| `DifficultyMod` | Optional  | true    | The difficulty modifier changes the lance selection criteria so a lower, or higher, difficulty lance is selected |

## Faction Ids

The `Faction` name you use is taken from your `BATTLETECH/BattleTech_Data/StreamingAssets/data/enums/Faction.json` file and the `Name` property. You can also refer to modded factions here too in the same way, by using their `Name` property.

The vanilla factions are:

- Davion
- Liao
- Kurita
- Marik
- Steiner
- TaurianConcordat
- MagistracyOfCanopus
- AuriganDirectorate
- AuriganRestoration
- ComStar
- MercenaryReviewBoard
- AuriganPirates
- AuriganMercenaries
- Locals
- Unknown
- MagistracyCentrella
- MajestyMetals
- Nautilus
- Betrayers
- FlakJackals
- LocalsBrockwayRefugees
- SelfEmployed
- MasonsMarauders
- SteelBeast
- KellHounds
- RazorbackMercs
- HostileMercenaries
- EmeraldDawn
- SianTriumphant
- ProfHorvat
- RedHareRegiment
- EdCorbu
- DuchyOfAndurien
- BlackCalderaDefense
- GrayDeathLegion
- HouseNakano
- SelfEmployed_Yang
- SecuritySolutionsInc
- PaladinProtectionLLC
- HouseKhulan
- BlackWidowCompany
- BountyHunterAssociates
- SelfEmployed_Farah
- SelfEmployed_Sumire
- Moderbjorn
- BaumannGroup

## Examples

For in-depth examples see the [testing document for Extended Lances v2](/docs/assets/Extended_Lances_v2_Testing.pdf).

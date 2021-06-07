---
id: extended-lances
title: Extended Lances
---

Increase the sizes of lances where it makes sense. For the vanilla game this does nothing. If another mod is using Mission Control, then they can set Clan stars (5 mechs) or Comstar Demi-lances / Reinforced lances (6 mechs).

This works for both vanilla spawn points for contract types and spawns created by Mission Control.

Extended lances can change the lance size of vanilla lance spawns and ones created with Mission Control's `Additional Lances` feature.

## Settings Breakdown

```json
"ExtendedLances": {
  "Enable": true,
  "EnableForFlashpoints": true,
  "EnableForStory": false,
  "Autofill": true,
  "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],
  "SkipWhenTaggedWithAny": ["lance_type_solo"],
  "SkipWhenTaggedWithAll": [],
  "SkipWhenExcludeTagsContain": ["no_extended_lance"],
  "LanceSizes": {
    "5": [
      {
        "Faction": "AuriganRestoration",
        "DifficultyMod": -1
      },
      {
        "Faction": "TaurianConcordat",
        "DifficultyMod": -2
      }
    ],
    "6": [
      {
        "Faction": "Comstar",
        "DifficultyMod": -4
      }
    ],
  }
}
```

| Path                       | Required? | Default                 | Details                                                                                                                                                             |
| -------------------------- | --------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Enable`                   | Optional  | true                    | Should this feature be enabled or not?                                                                                                                              |
| `EnableForFlashpoints`     | Optional  | true                    | Enable feature for Flashpoints if `EnableFlashpointOverrides` is `true`                                                                                             |
| `EnableForStory`           | Optional  | false                   | Enable feature for Story if `EnableStoryOverrides` is `true`                                                                                                        |
| `Autofill`                 | Optional  | true                    | If `true`, EL will attempt to autofill a lance up to the lance size set below under `LanceSizes`. This is currently just a copy of the unit in the first lance slot |
| SkipWhenTaggedWithAny      | Optional  | `["lance_type_solo"]`   | Skip if ANY of the set tags exist under a lance `lanceTagSet` in the contract override JSON being used                                                              |
| SkipWhenTaggedWithAll      | Optional  | `[]`                    | Skip if ALL of the set tags exist under a lance `lanceTagSet` in the contract override JSON being used                                                              |
| SkipWhenExcludeTagsContain | Optional  | `["no_extended_lance"]` | Skip if ANY of the set tags exist under a lance `lanceExcludedTagSet` in the contract override JSON                                                                 |
| `LanceSizes`               | Optional  | N/A                     | Sets which faction should have higher lance sizes. By default all faction lances are 4 units like vanilla.                                                          |

### Lance Sizes

| Path                                 | Required? | Default | Example         | Details |
| ------------------------------------ | --------- | ------- | --------------- | ------- |
| Any string number above 4 (e.g. "5") | Optional  | N/A     | See Table Below | -       |

### Lance Sizes Data

| Path            | Required? | Default | Example                                                                                                          | Details |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
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

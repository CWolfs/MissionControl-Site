---
id: ai-orders
title: AI Orders
sidebar_label: AI Orders
---

An AI order is used for a lance or a lance unit. An order helps guide the AI to do something specific such as attack buildings or move to and stay within a region.

It can be set as a starting order by the lance spawner or, in upcoming releases, an `IssueOrder` and similar results will be exposed to be used to set orders using triggers.

## StayInsideRegion

This order makes the AI go to and stay within a specific region.

| Property   | Required | Default | Details                           |
| ---------- | -------- | ------- | --------------------------------- |
| Type       | true     | -       | Type of AI order                  |
| RegionGuid | true     | -       | UUID of the region to stay within |

#### Example

```json
{
  "Type": "StayInsideRegion",
  "RegionGuid": "21a03616-c88b-4edd-a9a9-b4dd54b46d6c"
}
```

## MagicKnowledgeByTag

This order allows the AI to granted sight of the specified units by tag. This is often crucial for enemy AI to be aware of the player so they can act/move without being visible to the player.

| Property     | Required | Default  | Details                                                                                                       |
| ------------ | -------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Type         | true     | -        | Type of AI order                                                                                              |
| Tags         | true     | `Simple` | Specifies the tags of any building or unit that the AI should have knowledge of                               |
| Action       | true     | -        | `Add` or `Remove` knowledge                                                                                   |
| MustMatchAll | false    | `false`  | Must all the provided tags be matched? If `false` (default) then if any are matched then this will be applied |

#### Example

```json
{
  "Type": "MagicKnowledgeByTag",
  "Action": "Add",
  "Tags": ["Player 1"]
}
```

## PrioritiseTaggedUnit

This order forces the AI to priortise certain units by tag. This is required if you wish the AI to attack buildings.

| Property     | Required | Default    | Details                                                                                                       |
| ------------ | -------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| Type         | true     | `Dialogue` | Type of node                                                                                                  |
| Tags         | true     | -          | Specifies the tags of any building or unit that the AI should prioritise                                      |
| Priority     | true     | -          | Priority. The higher the number the higher the priority.                                                      |
| MustMatchAll | false    | `false`    | Must all the provided tags be matched? If `false` (default) then if any are matched then this will be applied |

#### Example

```json
{
  "Type": "PrioritiseTaggedUnit",
  "Tags": ["defend_building_3b"],
  "Priority": 1
}
```

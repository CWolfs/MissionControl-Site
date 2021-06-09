---
id: ignore-chunks-result
title: Ignore Chunks Result
sidebar_label: Ignore Chunks
---

The `IgnoreChunks` result sets all specified `Chunks` to ignore their linked `Objectives` and set the `Chunk` state to `Finished`.This is used to prevent `Chunks` activating and also prevents contract type logic softlocks.

## Properties

| Property       | Required | Default        | Details                                                                                                 |
| -------------- | -------- | -------------- | ------------------------------------------------------------------------------------------------------- |
| Type           | true     | `IgnoreChunks` | -                                                                                                       |
| EncounterGuids | true     | -              | A list of `Chunk` Guids to set all linked Objectives to `Ignore` and state of the `Chunk` to `Finished` |

## Example

```json
{
  "Type": "IgnoreChunks",
  "EncounterGuids": [
    "1fdeca88-c2d9-46af-b443-cf95aae707b6" // Chunk_Stage_Post_3a_Enemy_Turrets
  ]
}
```

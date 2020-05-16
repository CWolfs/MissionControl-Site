---
id: chunks
title: Chunks
sidebar_label: Chunks
---

A chunk is a collection of game logic game objects which are related. A named chunk, e.g. `PlayerLance`, often has special logic associated with it whilst using chunks purely as a logical collection of 'like' logics can also be used, e.g. `Container`.

Under a chunk you create `Node` children. A node is a specific logic piece like the ability to place a `Spawner` or create an `Objective`.

### Chunk Structure

```json
{
  "Name": "Chunk_Optional_Initial_Enemy",
  "Type": "Chunk",
  "SubType": "Lance",
  "ControlledByContract": true,
  "Guid": "3b47894e-2d25-4599-9b47-620ab8fcfa62",
  "Children": [
    // Children nodes
  ]
}
```

| Property             | Required | Default | Details                                                                                         |
| -------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| Name                 | true     | -       | Name of the chunk that will be used for the Unity game object                                   |
| Type                 | true     | -       | Type of node                                                                                    |
| SubType              | true     | -       | Subtype of chunk                                                                                |
| ControlledByContract | false    | `false` | Exposes the chunk to be enabled/disabled in the contract .json under 'chunkList'                |
| Guid                 | false    | -       | Can be used to manually specify a Guid for use by other chunks, triggers, results or conditions |
| Children             | false    | `[]`    | An array of [Nodes](nodes) that specify logic to execute                                        |

### Chunk Types

| Type              | Details                                                                            |
| ----------------- | ---------------------------------------------------------------------------------- |
| Container         | General use chunk to group related logic together. Can be used for almost anything |
| PlayerLance       | Used to organise player lance spawning                                             |
| DestroyWholeLance | Used to organise a 'Destroy Lance' setup                                           |
| EncounterBoundary | Used to organise the encounter boundary setup                                      |
| Dialogue          | Used to organise dialogue                                                          |
| Placement         | Used to organise placement related logic                                           |
| Lance             | Used to organise spawning of a lance                                               |

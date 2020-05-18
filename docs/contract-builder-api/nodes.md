---
id: nodes
title: Nodes
sidebar_label: Nodes
---

A node is a logic object that is added to the contract type encounter. It can be anything like the placing a `Spawner`, creating an `Objective` or `Dialogue` entry, creating a `Region` or even editing contract data before the encounter even starts.

### Node Structure

```json
{
  "Name": "Spawner_Enemy_RoamingForce",
  "Type": "Spawner",
  "SubType": "SimpleSpawner"
  // Follow by Node-specific properties
}
```

| Property | Required | Default | Details                                                      |
| -------- | -------- | ------- | ------------------------------------------------------------ |
| Name     | true     | -       | Name of the Node that will be used for the Unity game object |
| Type     | true     | -       | Type of node                                                 |
| SubType  | true     | -       | Subtype of node                                              |

### Node Types

| Type          | Details                                                                   |
| ------------- | ------------------------------------------------------------------------- |
| ContractEdit  | Used for any contract override edits required before the encounter begins |
| Dialogue      | Used for any dialogue creation                                            |
| Objective     | Used for any objective creation                                           |
| Region        | Used for any region creation, including the encounter boundary            |
| Spawner       | Used for any spawner creation                                             |
| SwapPlacement | Used for any position and rotation conditional logic creation             |

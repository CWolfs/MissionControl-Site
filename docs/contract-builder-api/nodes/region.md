---
id: region
title: Region
sidebar_label: Region
---

The `Region` node allows for creation of regions in the map. These are used for various purposes like trigger points, ensuring the player/AI stays within an area and using it for randomly selecting units/buildings within the region.

## Boundary

This node defines the `Encounter` boundaries. This is effectively what the player will consider the 'map boundary', however, the real map boundary is always 2k by 2k in size. The `Encounter` boundary is the playable space within the map.

| Property | Required | Default    | Details                                                      |
| -------- | -------- | ---------- | ------------------------------------------------------------ |
| Name     | true     | -          | Name of the Node that will be used for the Unity game object |
| Type     | true     | `Region`   | Type of node                                                 |
| SubType  | true     | `Boundary` | Subtype of node                                              |
| Position | false    | -          | Position of the center of the boundary region.               |
| Width    | false    | `800`      | Width measure of the map (maximum of `2000`)                 |
| Length   | false    | `800`      | Length measure of the map (maximum of `2000`)                |

#### Example

```json
{
  "Name": "EncounterBoundaryRect",
  "Type": "Region",
  "SubType": "Boundary",
  "Position": {
    "Type": "World", // World, Local
    "Value": { "x": 0, "y": 0, "z": 0 }
  },
  "Width": 1024,
  "Length": 1024
}
```

## Normal

This node defines the `Encounter` boundaries. This is effectively what the player will consider the 'map boundary', however, the real map boundary is always 2k by 2k in size. The `Encounter` boundary is the playable space within the map.

| Property                        | Required | Default                | Details                                                                                                                                                                                                                                                                                                     |
| ------------------------------- | -------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                            | true     | -                      | Name of the Node that will be used for the Unity game object                                                                                                                                                                                                                                                |
| Type                            | true     | `Region`               | Type of node                                                                                                                                                                                                                                                                                                |
| SubType                         | true     | `Normal`               | Subtype of node                                                                                                                                                                                                                                                                                             |
| Position                        | false    | -                      | Position of the center of the boundary region.                                                                                                                                                                                                                                                              |
| Rotation                        | false    | -                      | Regions are hexigon in shape. Rotating them can affect the trigger area and may be useful under specific situations.                                                                                                                                                                                        |
| Guid                            | false    | -                      | A [UUIDv4](https://www.uuidgenerator.net/) that you then use in the contract json.                                                                                                                                                                                                                          |
| ObjectiveGuid                   | false    | -                      | Guid of the associated objective (if there is one)                                                                                                                                                                                                                                                          |
| Radius                          | false    | `0`                    | Radius of the hexigon region                                                                                                                                                                                                                                                                                |
| RegionDefId                     | false    | `regionDef_TargetZone` | Affects the region colour and the message on hover, like 'Target'. <br/><br/>Usable: `regionDef_Positive`, `regionDef_Negative`, `regionDef_HostileDropZone`, `regionDef_EvacZone`, `regionDef_DangerZone`, `regionDef_CaptureZone`, `regionDef_TargetZone`, `regionDef_EscortZone`, `regionDef_DenialZone` |
| ShowHexWhenActive               | false    | `true`                 | If true, when the region is active and is there is a valid objective linking to it that 'ShouldDisplayMapElements' (which means non-complete, non-ignored, active, display to user Objectives) is 'true' - then the hex is displayed for the Region                                                         |
| AlwaysShowRegionWhenActive      | false    | `false`                | When this is true and the Region is active - the Region will show regardless of if any linking Objective that has ''ShouldDisplayMapElements' (which means non-complete, non-ignored, active, display to user Objectives) set to 'true' has been completed or not.                                          |
| ShowPreviewOfRegionWhenInactive | false    | `false`                | If the Region is inactive it will show the Region hint UI element (e.g. Future Target). When it is active this will disappear (and be replaced with the active version if the Region is set to display                                                                                                      |

#### Example

```json
{
  "Name": "Region_Investigate_Blackout",
  "Type": "Region",
  "SubType": "Normal",
  "Guid": "e7e9f35b-7ed8-404e-9dae-69be61de2dd3", // Must match the region guid in the contract .json
  "ObjectiveGuid": "786166e2-22ea-45c1-9786-68df31958bd8", // Must match the objective guid in the build file to link to
  "RegionDefId": "regionDef_TargetZone",
  "Position": {
    // Usually used in the map override file
    "Type": "World", // World, Local
    "Value": { "x": -320, "y": 0, "z": 260 }
  },
  "Rotation": {
    // Usually used in the map override file
    "Type": "World", // World, Local
    "Value": { "x": 0, "y": 0, "z": 0 }
  },
  "Radius": 160,
  "ShowHexWhenActive": true,
  "AlwaysShowRegionWhenActive": false,
  "ShowPreviewOfRegionWhenInactive": false
}
```

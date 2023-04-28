---
id: conversetek-release-1.4.0
title: ConverseTek Release v1.4.0
author: Richard 'CWolf' Griffiths
author_title: Developer
author_url: https://github.com/cwolfs
author_image_url: https://avatars0.githubusercontent.com/u/7622361
tags: [conversetek, release, v1.4.0]
---

Hey guys!

Today I’ve released v1.4 of ConverseTek.

For those of you who don’t know what ConverseTek is, it’s the tool I developed for creating and editing BT dropship conversations (1-on-1s with the crew and conference room) and released in Summer 2018.

As part of this update I rewrote / ported the project to Typescript and updated a lot of the badly outdated dependencies. In the process I’ve improved lots of areas of code since I was forced to touch almost every single file. This makes the project easier to work with so it makes it easier to improve. Before I get onto the new features and improvements I need to mention the elephant in the room / the outstanding big issue and how it’s now been fixed.

## Corrupted Conversations / Bad Data (The Ugly Big Elephant)

Ever since CT was created it had a risk of corrupting a conversation file - sometimes in obvious ways and other times in very subtle ways. Any modder who has used it would probably scream in rage any time they realised this happened (and it was particularly sneaky as it would always look fine in CT - just break in BattleTech itself). This bug was due to an original assumption I made when I originally developed the tool and one I only realised was wrong when I was stopping development on the tool. Fast forward to a year and a half after the last release and this issue is now fixed in v1.4 (it should have been fixed years ago but that's life). An important note to modders who might still have corrupted conversation files from previous CT usage - v1.4 can fix those for you if you open it up and re-save them.

It also fixes all other issues around bad conversation data, for example, old text showing up in copied / moved nodes even after the copied text was changed in CT.

With that said, onto the nice new features.

## Quicklinks / Favourites

The user experience of opening up your workspace folder that contained conversations was horrible. It started you off in your root drive view and didn’t help you save time to navigate back to your conversations. If the user’s conversations were deep in a drive then that meant a lot of clicking. Really annoying stuff.

Now you have some typical quick links that you’d expect (Desktop, My Documents, My Computer, Favourites). You can also right-click any directory and favourite it. This adds a blue favourite icon to the directory navigator that you can click to go straight to.

![ConverseTek-Improved-Navigation](https://raw.githubusercontent.com/CWolfs/ConverseTek/master/docs/images/1.4.0/conversetek-improved-folder-navigation.gif)

## Dialogue Tree Zoom

Large conversations means a ton of prompt nodes (blue) and response nodes (yellow). When it gets so large, like in vanilla conversations, it gets incredibly difficult to figure out where all the conversation nodes are that you’re trying to look at.

You now can use _CTRL + mouse wheel_ to zoom in and out to give yourself a better feel for the conversation (or it can help people who need the text a bit bigger to read).

![ConverseTek-Zoom](https://raw.githubusercontent.com/CWolfs/ConverseTek/master/docs/images/1.4.0/conversetek-zoom-feature.gif)

## Node Details Drag Expand

Actions and Conditions are vital to making good conversations, yet, the viewing area for those is too small compared to the data-dense functionality often needing to be displayed.

You can now drag and expand the node details area to give yourself a lot more space for actions / conditions / node details and writing dialogue. This often will give users the ability to view all (or most) of the actions and conditions on a node (or reduce the scrolling to a minimum).

![ConverseTek-Drag-Expand](https://raw.githubusercontent.com/CWolfs/ConverseTek/master/docs/images/1.4.0/conversetek-drag-expand.gif)

## Delete Conversation

You can now delete conversations from within CT. Pretty simple but useful.

![ConverseTek-Delete-Conversation](https://raw.githubusercontent.com/CWolfs/ConverseTek/master/docs/images/1.4.0/conversetek-delete-convo.gif)

## Re-enabled Dragging Response Nodes to Other Nodes

In earlier releases of CT you were able to drag and drop response (yellow) nodes from their parent prompt (blue) node to anywhere else in the conversation. Due to the realisation this caused some nasty bugs the feature was limited to allowing only dragging/reordering within the same prompt node.

Since all the conversation corruption bugs are fixed I re-enabled this feature - so you can now move response nodes to other prompt nodes.

## Other fixes and changes

There are a good few other fixes and changes but I’ll leave this post here. If you’re interested in the full changelog check out the [ConverseTek github release page](https://github.com/CWolfs/ConverseTek/releases/tag/v1.4.0) and the [github milestone for v1.4](https://github.com/CWolfs/ConverseTek/milestone/2?closed=1)

## In Closing

Tools for the community often go overlooked but are critical for the health of mods and modpacks. This update took me a month of my free time (developing on it almost every single day when I had spare time during that month) so I honestly hope you enjoy and appreciate the new improvements. Don’t be quiet and please let me know what you think. It was a good update to work on.

Thanks guys.

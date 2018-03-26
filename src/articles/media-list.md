---
path: "/media-list"
date: "2015-11-15"
title: "Media list"
---

## List with mixed interactions

In Services there are lists of Media. The items inside can be mixed MP3s, videos, PDFs, etc. We try to handle each media type in the best way but it makes clicking or tapping items unpredictable.

##### Goals

* Make media "viewable" in a single click/tap
* Show additional actions
* Obscure large lists of actions (for users with high-permission)

##### "Viewable Media"

Being "viewable" is platform-dependent. MP3s will open up the media player, PDFs will fall to the browser, and Dropbox videos will open a new tab.

##### "Actions

An "action" is something that's performed *on the media*.

### Viewable Media with a single option

This item presents the name of the Media ("viewable") and one Services action, "edit".

    +--------------------------------------+
    |                              +-----+ |
    |  Media                       |  ✎  | |
    |                              +-----+ |
    +--------------------------------------+

### Viewable Media with many obscured options

This is an example of the same Media with more actions. This might be what is seen by a user with high permission.

##### options collapsed

    +--------------------------------------+
    |                              +-----+ |
    |  Media Link                  | ... | |
    |                              +-----+ |
    +--------------------------------------+

##### options expanded

    +--------------------------------------+
    |                  +-----+-----+-----+ |
    |  Media Link      |  ⃔   |  ✎  |  ⨉  | |
    |                  +-----+-----+-----+ |
    +--------------------------------------+

### Viewable Media with many obscured options and a single common option

This is like the example before but it always presents the "90% action". This prevents the need to expand the action-list for the 90% case.

    +--------------------------------------+
    |                        +-----+-----+ |
    |  Media Link            |  ✎  | ... | |
    |                        +-----+-----+ |
    +--------------------------------------+

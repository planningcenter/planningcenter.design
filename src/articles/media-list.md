---
path: "/media-list"
date: "2015-11-15"
title: "Media list"
---

## List with mixed interactions

In Services there are lists of Media. The items inside can be mixed MP3s, videos, PDFs, etc. We try to handle each media type in the best way, but it makes clicking or tapping items unpredictable.

##### Goals

* Make media "viewable" in a single click/tap
* Show additional actions
* Obscure large lists of actions (for users with high-permission)

##### "Viewable Media"

Being "viewable" is platform-dependent. MP3s will open up the media player, PDFs will fall to the browser, and Dropbox videos will open a new tab.

##### "Actions

An "action" is something that's performed _on the media_.

### Viewable Media with a single option

This item presents the name of the Media ("viewable") and one Services action, "edit".

<div class="demo media">
  <div class="media__main">Media</div>
  <div class="media__sub">
    <button class="sm-btn action-btn btn">edit</button>
  </div>
</div>

### Viewable Media with many obscured options

This is an example of the same Media with more actions. This might be what is seen by a user with high permissions.

##### options collapsed

<div class="demo media">
  <div class="media__main">Media Link</div>
  <div class="media__sub">
    <button class="sm-btn action-btn btn">&hellip;</button>
  </div>
</div>

##### options expanded

<div class="demo media">
  <div class="media__main">Media</div>
  <div class="media__sub">
    <button class="sm-btn action-btn btn">back</button>
    <button class="sm-btn action-btn btn">edit</button>
    <button class="sm-btn quiet-destroy-btn btn">remove</button>
  </div>
</div>

<h3 style="line-height: 1.2; margin-bottom: 0.5em; margin-top: 1.5em;">Viewable Media with many obscured options and a single common option</h3>

This is like the example before but it always presents the "90% action". This prevents the need to expand the action-list for the 90% case.

<div class="demo media">
  <div class="media__main">Media</div>
  <div class="media__sub">
    <button class="sm-btn action-btn btn">edit</button>
    <button class="sm-btn action-btn btn">&hellip;</button>
  </div>
</div>

---
path: "/view"
date: "2015-11-25"
title: "View"
---

# View (Draft)

## What's a view?

The idea of a view should map pretty well to Rails view. Where a layout controls the shared UI of your application, views are the single pages set inside them.

The relationship looks like this, which shouldn't be a surprise:

```
.layout
+-------------------------------------+
| .topbar                             |
+-------------------------------------+
| .view                               |
|+------------------------------------+
|| header                             |
|+-------------+----------------------+
|| .view_body                         |
||+-------------+---------------------+
||| aside       | .view_content       |
+++-------------+---------------------+
```

Let's focus on the anatomy of a view:

```
.view
+------------------------------------+
| header                             |
+-------------+----------------------+
| .view_body                         |
|+-------------+---------------------+
|| aside       | .view_content       |
++-------------+---------------------+
```

##### `.view`

A dumb `flex` container. It **must** wrap your view for the whole thing to work.

##### `header`

**Optional** and can be any block element.

##### `view_body`

Another dumb container with smarts about `flex-direction` at the mobile breakpoint.

##### `aside`

**Optional** and can be any block element.

##### `view_content`

Another dumb container that grows to fit any available space not claimed sibling block elements.

## What it used for?

The View object is a structure object for laying out a Rails views responsively. They may be used recursively.

#### "...structure object..."

Styles are limited to structure only. These containers do not concern themselves with content. Likewise, content should be self-containing and designed to put the full space of the bounding structure.

#### "...laying out Rails views"

This is the eventual container for **all** Rails views, much like all Modal partials use the `.modal` container.

#### "...responsively"

```
.view (non-mobile)                        .view (mobile)
+------------------------------------+    +-------------------+
| header                             |    | .view_header      |
+------------------------------------+    +-------------------+
| .view_body                         |    | .view_body        |
|+-------------+---------------------+    |+------------------+
|| aside       | .view_content       |    || aside            |
||             |                     |    |+------------------+
||             |                     |    || .view_content    |
++-------------+---------------------+    ||                  |
                                          ||                  |
                                          ++------------------+
```

#### "...used recursively"

```
.view
+----------------------------------------+
| header                                 |
+-------------+--------------------------+
| .view_body                             |
|+-------------+-------------------------+
| aside        | .view_content           |
|              |+------------------------+
|              || .view                  |
|              ||+-------+---------------+
|              ||| aside | .view_body    |
|              |||       |               |
++-------------+++-------+---------------+
```

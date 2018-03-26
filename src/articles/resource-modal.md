---
path: "/resource-modal"
date: "2015-14-08"
title: "Resource Modal"
---

We talk a lot about "routable dialogs." The idea gathered a lot of mindshare but little traction and implementations have been unsuccessful.

Written here is the sum of my thinking on the matter; I'm calling these modals **Resource Modals**. The constraints we have merit a different way of thinking. The solution can't live in JavaScript alone; we need a policy.

## Scope

This policy applies strictly to modals that show a resource.

## Constraints

* Showing a modal writes a linkable URL (like Trello, Facebook/Instagram)
* User cannot `Back` into a Modal (unlike Trello)
* `Back` dismisses the current modal (like Facebook/Instagram)

## Difficulties

* If `Back` dismisses a modal, users that arrive at modal (via link) cannot dismiss it. It's also possible for a user to `dismiss` themselves out of the app entirely.

## Proposal

### Navigation behavior
* Resource Modal writes new URL to `resource_path(resource)` via `pushState`
* `Back` dismissed the Modal (default behavior with `pushState`)
* `dismiss/cancel/close` delegate to `window.history.back()`

### Pasted-link behavior
* Link is a Rails resource path. Routes directly to resource `show/edit` page

## Implementation

### Action Pack Variants

Registrations is currently using Variants for modals. It's wildly successful.

This is a very generalized implementation:

```ruby
class ApplicationController < ActionController::Base
  before_action :set_variant

  layout proc { false if request.xhr? } 

  def set_variant
    request.variant = :modal if params[:variant] == "modal"
  end
end
```

```html
<button data-modal-url="/resource/123.html?variant=modal">Launch Resource Modal</button>
```

In practice, Interfaces would append the query param when fetching modal content.

#### Future Variant API

Rails 5.0 will have a great [first-class](https://github.com/rails/rails/issues/18818) API for this:

```html
<button data-modal-url="/resource/123.html+modal">Launch Resource Modal</button>
```

### Resource Partial

Use a shared resource partial to keep variants consistent.

```
show.html.erb
show.html+modal.erb
_resource_show.html.erb
```

**_resource_show.html.erb**
```erb
<div class="resource">
  <div class="resource-name">
    <%= @resource.name %>
  </div>
  <div class="resource-body">
    <%= @resource.body %>
  </div>
</div>
```

**show.html.erb**
```erb
<h2 class="page-title"><%= @resource.name %></h2>
<div class="page-content">
  <%= render "_resource_show" %>

  ...
</div>
```

**show.html+modal.erb**
```erb
<!-- important that layout is not sent -->
<div class="modal">
  <header class="modal-header">
    <%= @resource.name %>
  </header>

  <div> class="modal-content">
    <%= render "_resource_show" %>
  </div>

  ...
</div>
```

### Example

##### index view
```
+--------------------------------------------------+
|             instagram.com/chantastic             |
+--------------------------------------------------+
|                                                  |
|                                                  |
|  +--------+  +--------+  +--------+  +--------+  |
|  |        |  |        |  |        |  |        |  |
|  |        |  |        |  |        |  |        |  |
|  |        |  |        |  |        |  |        |  |
|  +--------+  +--------+  +--------+  +--------+  |
|                                                  |
|  +--------+  +--------+  +--------+  +--------+  |
|  |        |  |        |  |        |  |        |  |
|  |        |  |        |  |        |  |        |  |
|  |        |  |        |  |        |  |        |  |
|  +--------+  +--------+  +--------+  +--------+  |
|                                                  |
|                                                  |
+--------------------------------------------------+
```

##### modal-show
Seen when a user navigates to a Resource Modal.
```
+--------------------------------------------------+
|      instagram.com/chantastic/p/0N8ndhMsaS       |
+--------------------------------------------------+
|                                                  |
|      +------------------------------------+      |
|  +---|                                  x |---+  |
|  |   |                                    |   |  |
|  |   |                                    |   |  |
|  |   |                                    |   |  |
|  +---|                                    |---+  |
|      |                                    |      |
|  +---|                                    |---+  |
|  |   |                                    |   |  |
|  |   |                                    |   |  |
|  |   |                                    |   |  |
|  +---|                                    |---+  |
|      +------------------------------------+      |
|                                                  |
+--------------------------------------------------+
```

##### show
Seen when a user arrives at a resource via link.
```
+--------------------------------------------------+
|      instagram.com/chantastic/p/0N8ndhMsaS       |
+--------------------------------------------------+
|                                                  |
|  +--------------------------------------------+  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  +--------------------------------------------+  |
|                                                  |
|                            | see all pictures |  |
|                                                  |
+--------------------------------------------------+
```

### Variant Actions

Each variant has different standard actions.

**edit.html.erb**

```
+-----------------------+   +----------+
|  see all {resource}s  |   |   save   |
+-----------------------+   +----------+

* see all {resource}s  ->  GET   /resource
* save                 ->  PATCH /resource/:id
```

**edit.html+modal.erb**

```
+----------+   +----------+
|  cancel  |   |   save   |
+----------+   +----------+

* cancel  ->  `window.history.back`
* save    ->  PATCH /resource/:id
```

## Tools

* [History.js](https://github.com/browserstate/history.js/) — crappy-browser `history` polyfill

## Implementation (Giving)

Talking with @danott, I was able to see their implementation of variants for modals. Cool stuff:

##### ApplicationController.erb

The `:modal` variant type is set for `format.js` requests. This simply adds precedents to `resource.html+variant` but falls through for regular SRJ requests.

```ruby
class ApplicationController < BaseController
  before_action :apply_modal_variant

  ...

  def apply_modal_variant
    request.variant = :modal if request.format.js?
  end
end
```

##### layouts/application.html+modal.erb

They've created a `+modal` application layout. Rails-magic&reg; uses this layout by default for `+modal` variants. Soops-cool:

```erb
<%= yield %>
```

This is a great, low-configuration option.
---
path: "/interfaces-modal"
date: "2015-09-22"
title: "Interfaces modal"
category: "systems"
---

Let's talk about how modals work in pre-1.0 versions of Interfaces. It's not great but it's what we got. Let's begin...

## The Data-API

The golden path for interacting with Interfaces modals is through the [Data-API](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/data_api.js.coffee). The Data-API is a collection of event listeners and handlers attached to `document`. Nodes with known `data-` attributes will invoke Interfaces behaviors. These are the available `data-` attribute APIs for modals:

```
data-modal-url
data-modal-close
```

### `data-modal-url`

This attribute takes a path as its value. When this element is clicked, Interfaces fetches content from the provided path and presents it as a modal.

#### example

```html
<button type="button" data-modal-url="/path/to/modal" /> launch modal </button>
```

[code](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/data_api.js.coffee#L20-L35)

---

### `data-modal-close`

This attribute takes no value and needs only to be present. It should be added to the modal view/template. When this element is clicked, Interfaces hides the `.modal-layer` and returns scroll control to the `body`.

#### example

```html
<button type="button" data-modal-close> cancel </button>
```

[code](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/data_api.js.coffee#L37-L38)

## ModalView

Modals are cobbled together from a number of pretty insufferable APIs. They'll get better, eventually.

#### `ModalView`

The `ModalView` is an abstraction around HTML string content with a single method `show`.

It may be used apart from the Data-API like so:

```js
var content =
  '<div class="modal"><button type="button" data-modal-close>close</button></div>';

var modal = new INTERFACES.ModalView(content);

// => ModalView {content: ...}
```

[code](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/modal.js.coffee#L4-L6)

#### `ModalView.show`

An instance of `ModalView` may be shown by calling `show`.

```js
var modal = new INTERFACES.ModalView(stringContent);

modal.show();
```

The `ModalView` constructor returns a reference to itself. So, you can chain the `show` call like so.

```js
new INTERFACES.ModalView(stringContent).show();
```

Invoking this method triggers the `modal:load` event on `document`. It's a good place to initialize any JavaScript plugins on the modal.

```js
$(document).on("modal:load", function() {
  // initialize all the things.
});
```

[code](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/modal.js.coffee#L8-L10)

## ModalLayer

#### `modalLayer`

The `modalLayer` object is a collection of functions used by `ModalView`s to prepare the document with required nodes and event listeners.

**In the vast majority of cases, you shouldn't need to use these APIs.**

#### `modalLayer.show`

* creates `.modal-layer` if it doesn't exist
* adds `.modal--open` class to body
* scrolls the `.modal-layer` back to the top
* adds event listeners for `esc` and outside-modal clicks

[code](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/modals.js.coffee#L4-L7)

#### `modalLayer.hide`

* removes `.modal--open` class from body
* adds event listeners for `esc` and outside-modal clicks
* triggers `modal:hide` event on `document`

[code](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/modals.js.coffee#L9-L12)

#### `modalLayer.emptyAndPushModal`

* invokes [`modalLayer.show`](#modallayershow)
* `empty`s `.modal-layer`
* `append`s provided HTML string `content`

_This is the method used by `data-modal-url`._

[code](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/modals.js.coffee#L20-L23)

#### `modalLayer.showModals`

* shows all `.modal`s in `.modal-layer` with `$.fn.show`

[code](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/modals.js.coffee#L17-L18)

#### `modalLayer.hideModals`

* hides all `.modal`s in `.modal-layer` with `$.fn.hide`

[code](https://github.com/ministrycentered/interfaces/blob/master/app/assets/javascripts/interfaces/modals.js.coffee#L14-L15)

---
path: "/other-modal-thoughts"
date: "2014-11-10"
title: "Other modal thoughts"
category: "interface"
---

**This page covers the current thinking around Modals and where they are going. There is a lot of functionality to consider. This is where that functionality gets explored.**

## Dirty Forms

https://github.com/ministrycentered/interfaces/pull/77

There's thought that navigating away from a from shouldn't clean the forms. I think that might be the case sometimes but not always. Things to consider:

### Clean form
  * user comes to a form they didn't want
  * no form data is added
  * outside click acts as "panic"
  * modal is dismissed without intervention

### Dirty form
  * user comes to a form they do want
  * form data is changed
  * outside click as "go back" or result of an accident
  * modal presents warning that form data will be lost.

I'm wondering if the second case is worth building around of or a config is good.  I wonder if it wouldn't be better to somehow keep the modal in memory and, while an outside click would dismiss it, enacting that same modal would show the same modal with your previous form changes.

## Multi-Modals

Is it possible to only over have one modal? I think that it's good design, helps with RWD, and encourages us to find better solutions that piles of modals.

### Panes

Consider iPhone Panes, the way the move in and out from the right. This could be a way of **masking** complexity in a Modal form.

### Flyouts

Trello has little flyouts on Modals. This would show **auxiliary** information only when you need it. Has the benefit being _instantiated_ with a snapshot of the current form data.

### Stack

Add a new construct 'ModalStack' that contains modals. ModalStack could encapsulate an indefinite number of modals... this would be very bad.

## Modal Routes

I'm squarely in the camp of route-changes for modals camp. I'm getting more and more requests that would well be solved with modal routes. I'd like to at least have a discussion about why this is such a taboo thing and see if come up with a consensus for Interfaces.
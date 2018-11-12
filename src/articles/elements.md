---
path: "/posts/the-role-of-global-design"
date: "2018-11-07"
title: "The Role of Global Design"
category: "posts"
---

## Our job as designers

> Improve user success through consistent, predictable UI.

## The wrong vision

In 2013, we had the right goal and the wrong execution.  
[Interfaces](https://github.com/ministrycentered/interfaces),
our fork Zurb Foundation, had a worldview that didn't scale with our company culture.

We learned that an important part of a Planning Center design system is app-team autonomy.
Each team needs the flexibility to make decisions to best service its users.  
And those systems shouldn't require a lot of patching.

## A new hope

We've seen a lot of experimentation in an React-based component libraries,
Lead by Travis and Services.
At the same time,
Global Design become really good at maintaining and distributing code used by all teams.
We've all done a lot of ground-level work to improve the state of frontend.
So solutions can be shared more easily.

We're doing great work.

## 99 Problems

Experimentation in React are not without frustration.
Many teams have felt left behind, as the majority of Planning Center apps are built in both Rails and React.

We've observed that all teams want React-level abstractions.
But React-based abstractions have trouble breaking through to other apps.
For most teams, an all-React component library is a non-starter.

From where I'm sitting there seem to be three reasons for this:

- React-based solutions only service a percentage of non-Services, non-Resources apps.
- Shared code requires maintenance and support that app-teams aren't equipped to give.
- App teams aren't familiar enough with other apps to make truly share-able abstractions.

## Breaking up is hard to do

Today, most designers have to live in both worlds — Rails and React.

To better support designers — today — we need to break up the concepts of a _design system_ and _component library_.
**System** being the ideals (user focus) and **library** being the patterns (designer/dev focused).

## Our job as Global Design

> Host better cross-app communication about shared UI

### Manage the design system

The systems we use will be documented on [planningcenter.design](planningcenter.design), in the `systems` category.  
These systems are the exclusive result of consensus and application review.

Implementation can be app-specific, but **all component libraries are expected to adhere to the design system.**

### Facilitate conversation

We want to have calm conversations about systems and component treatment.

The design team will focus on one discussing one UI element per month.
With that pace, everyone should have time to survey their app, communicate their goals, and come to a consensus.

Where we can't come to a consensus,
we'll favor solutions with proven implementations.

### Open Hours

[Open hours](/office-hours) are every Wednesday between 11:30 and 4PM PDT (right after our design meeting).

They're a chance to discuss, understand, install, or implement shared design tools.

### Library recommendations

The React community is producing some amazing open source projects.
With a small design team, we want to stand on the shoulders of giants.

[Here are a list](/react-recommended) of recommended React libraries for difficult UI challenges.

### Baseline tooling

In addition to facilitating conversations and managing documentation, we'll provide an implementation for common UI that uses standard browser technologies to target Rails, React, and any future web platforms.

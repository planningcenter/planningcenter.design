---
path: "/browser-support"
date: "2018-10-10"
title: "Browser Support"
category: "platform"
---

<div class="remark-table">

| Browser   | Supported versions                                                 |
| --------- | ------------------------------------------------------------------ |
| Chrome    | latest                                                             |
| Firefox   | latest                                                             |
| Edge      | 2 most recent major versions                                       |
| IE        | 11                                                                 |
| IE Mobile | 11                                                                 |
| Safari    | 2 most recent major versions                                       |
| iOS       | 2 most recent major versions                                       |
| Android   | Nougat (7.0), Marshmallow (6.0), Lollipop (5.0, 5.1), KitKat (4.4) |

<div>

## Why we support IE11

All of our users are capable of using a modern browser.  
But he have a high value for not communicating prescriptively with our customers.  

As of early 2018, IE11 usage hovered around 3% for all `*.planningcenteronline.com`.  

We'll continue to support those users for the forseeable future.  

## What does "IE11 support" look like?

We're actively sorting that out.

The goal of Global Design is to make IE11 as invisible to designs/developers as possible.  
We'll accomplish this through well-tested baseline tooling and a unified set of polyfills.

Practically, it means that IE11 users will start getting a degraded experience by default.  
They'll be loading more polyfills.  
They'll be seeing fallback colors.  
And they'll be seeing potentially limited feature sets.

## Progressive Enhancements

We don't have great strategy yet but here's what we are shooting for.  

### CSS Custom Properties

Most users have a browser that supports CSS Custom Properties.  
https://caniuse.com/#feat=css-variables

New GD tooling will use CSS Custom Properties exclusively for theming.  
IE11 users will see generic fallback colors.  

### CSS Grid

Most users have a browser that supports CSS Grid Layout.  
https://caniuse.com/#feat=css-grid

New GD tooling will use CSS Grid Layout for complex layouts.  
IE11 users will see the single-column mobile view as a fallback.

### Fetch

Most users have a browser that supports Fetch.  
https://caniuse.com/#feat=fetch

New GD tooling will Fetch for asynchronous data collection.  
We'll add appropriate polyfill so to each app, as they opt into those GD tools.  
https://babeljs.io/docs/en/babel-polyfill

### JS syntatic hawtness

Most users have a browser that supports Fetch.  
https://caniuse.com/#feat=fetch

We'll add appropriate polyfill so to each app, as they opt into those GD tools.  
https://babeljs.io/docs/en/babel-polyfill
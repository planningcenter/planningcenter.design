---
path: "/8-point-grid"
date: "2018-05-18"
title: "8-point Grid"
category: "systems"
---

## tl;dr
Use multiples of `8px` to define dimensions, padding, and margin of elements.

## Status
**Progressive**: *Design and develop new layouts with 8-point grid.*  

We have some apps that are all-in.  
We have others with very few 8-point grid layouts.  
Don't stress about older layouts.  
Just build up your 8-point muscles on new layouts.


## 4px Nudges
We support `4px` _"nudges"_ for grid lines below `32px`.
These values are allowable for fine-tuning:
`4px`, `12px`, `20px`, `28px`.

## Borders and Outlines
Borders should fall **inside** `8px` boundaries.  
For example:

👎 **nope**
```css
.btn {
  line-height: 16px;
  padding-left: 8px;
  padding-right: 8px;
  border: 0;
  outline: 1px;
}
```

👍 **yup**
```css
.btn {
  line-height: 14px;
  padding-left: 7px;
  padding-right: 7px;
  border: 1px;
}
```

## Resources

### Principles
- [Intro to The 8-Point Grid System](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632)
- [8-Point Grid: Borders And Layouts](https://builttoadapt.io/8-point-grid-borders-and-layouts-e91eb97f5091)
- [8-Point Grid: Typography On The Web](https://medium.freecodecamp.org/8-point-grid-typography-on-the-web-be5dc97db6bc)

### Libraries
- [8-point](https://chantastic.github.io/8-point/) — px-based utility classes for 8-point grid increments
- [rem-point](https://chantastic.github.io/rem-point/) — rem-based utility classes for 8-point grid increments

### Tools
- [Sketch Workflow — 8 point Soft Grids](https://medium.com/sketch-app-sources/8-point-soft-grids-in-sketch-e8f1d5ca2cd4)
- [The 8pt Grid: Consistent Spacing in UI Design with Sketch](https://blog.prototypr.io/the-8pt-grid-consistent-spacing-in-ui-design-with-sketch-577e4f0fd520)

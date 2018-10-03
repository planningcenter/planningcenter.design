---
path: "/sprockets"
date: "2018-10-02"
title: "Sprockets"
---

Sprockets is a tool used by the Rails Asset Pipeline to resolve, concatenate, and digest assets.  
All of our apps still use it many places.  

A feature you'll interact with a lot is [directives](https://github.com/rails/sprockets/blob/master/guides/how_sprockets_works.md#directives).  
Directives are the mechanism Sprockets has for building up asset manifests.  
Examples of this are `application.css` or `application.js` in most Rails apps.  
Assets are brought in using the `//= some-css-file.css`.  

Read more here: https://github.com/rails/sprockets-rails

## Complication commeth
To complicate matters,  
Sass and [Webpack](/webpack) can also be used to resolve, concatenate, or digest assets.  

Talk with your team about the boundaries for each tool.
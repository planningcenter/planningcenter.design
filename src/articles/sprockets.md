---
path: "/sprockets"
date: "2018-10-02"
title: "Sprockets"
category: "platform"
---

Sprockets is a Ruby tool — used by the Rails Asset Pipeline — to resolve, concatenate, and frontend digest assets.  

A feature you'll interact with a lot is Sprockets [directives](https://github.com/rails/sprockets/blob/master/guides/how_sprockets_works.md#directives).  
Sprockets uses Directives to construct asset manifests.  
Examples of this are `application.css` or `application.js` in most Rails apps. Assets are brought in using the `//= some-css-file.css`.  

Read more here: https://github.com/rails/sprockets-rails

## Complications
To complicate matters,  
Sass and [Webpack](/webpack) can also be used to resolve, concatenate, or digest assets.  

Talk with your team about their boundaries for each tool.
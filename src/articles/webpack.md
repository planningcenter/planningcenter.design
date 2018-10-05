---
path: "/webpack"
date: "2018-10-02"
title: "Webpack"
category: "platform"
---

[Webpack](https://webpack.js.org) is a build tool in JavaScript.  
Rails apps use it to bundle "application-like JavaScript" via [rails/webpacker](https://github.com/rails/webpacker).  

The boundaries are fuzzy app-to-app.  
One boundary is clear:
Any JavaScript that needs to be `import`ed or `require`d does so via `Webpack` and `Webpacker`.  
So start there.  
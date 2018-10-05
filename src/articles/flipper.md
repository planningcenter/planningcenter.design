---
path: "/flipper"
date: "2018-10-02"
title: "Flipper"
category: "process"
---

[Flipper](https://github.com/jnunemaker/flipper) is a database-driven utility for rolling features out to select groups, organizations, and environments.

## Warning
Because `production` and `staging` share a database,  
**Features enabled in `staging` are enabled in `production`.**

## Groups and Actors
Use `Groups` and `Actors` to enable features.  
The specifics vary by application.  
Consult you team regarding best practices practices around flipper.

Read [more about environments](/environments).
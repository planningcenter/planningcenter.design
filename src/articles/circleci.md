---
path: "/circleci"
date: "2018-10-02"
title: "circleci"
category: "process"
---

[circleci](https://circleci.com/) is the service we use for [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).  
Practically speaking, it's a [Github](/github) integration that runs a  test suite when pull requests are opened.  
It'll mark the PR with success or failure when complete.

### What does a failed build mean?
It means you have failing tests.  
You can click into the comment on Github and see what tests are failing.  

Some apps have fragile test suites.  
It could be that changing markup of a class name removed a necessary hook for a UI test.  
It could also be a weird race condition that happens only on leap years.  
Speak with your app team when you see failures you didn't intentionally produce.  
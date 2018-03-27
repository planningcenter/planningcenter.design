---
path: "/interfaces-and-interactions/notifications"
date: "2017-01-12"
title: "Notifications"
---

We started discussing [Notification styling](https://pco.slack.com/archives/G57NVP762/p1512141746000351) in Slack. The feature will likely be resolved without Alerts but surfaced some inconsistencies in our Notification semantics.

Shane Armitage Shane and I see the categories of Notifications like this.

## Notifications

Notifications are used to surface issues, announcements, and confirmations in a way that does not block UI. Notifications or distinct from Alerts, and Prompts, which block UI. They have have various degrees of stickiness, based on context.

Here are the categories of Notifications we've identified.

### Platform

This Notifications should sit above Topbar.

* Degraded performance
* App announcement
* Braking API change
* Ministry Brands acquisition

### App

This Notification should sit directly below Topbar.

* Flagship feature announcement
* Related product announcement
* Feature opt-in/opt-out (sticky)

### Resource

These Notifications may be inlined (when async) or at the at the top of the displayed resource.

* CRUD and errors

### Context

This Notification type is the most fluid and open to exploration.

In the cases we've seen, they are dismissible inline-block elements that sit below a description of the resource.

* Invalid resource or member (for soft validations)

Do these sound about right to you? Any clarifications you'd like to add? Any examples of a Context Notification you'd like to surface from your app?

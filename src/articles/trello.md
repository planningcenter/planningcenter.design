---
path: "/trello"
date: "2018-10-02"
title: "Trello"
---

Trello is used to track the development of a feature.  
Where planning happens meetings, [Basecamp](/basecamp), and Slack[/slack],
Feature production is tracked on Trello.

## Priority
Priority is represented by vertical position.  
Cards at the top of each List are more important than Cards lower in each list.  

## Flow
Cards go from left to right as they get closer to completion.  

Cards need to be approved on [Github](/github) and in Trello to move to production.

## Labels

### `Ready for testing` (or *yellow*)
Product Managers and QA testers will test these features.

### `Approved` (or *green*)
This has been tested and is ready to move to the next step in the process.

### `Needs work` (or *red*)
This has been tested and is found incomplete.  
This label will be accompanied with some next steps.  

## Automations
A [Zapier](https://zapier.com/) automation marks everything in the `staging` and `production` queues `Ready for Testing` on successful deploy.  
You can cash in on this automation by moving your card to an environment's List before your deploying to that environment.

## Integrations
[Github](/github), [Slack](/slack), Google Drive, Dropbox, Zendesk, and others are setup as *Power Ups* on most boards.  
You can use these to attach details — from those platforms — to your Cards.

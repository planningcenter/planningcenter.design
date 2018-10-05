---
path: "/trello"
date: "2018-10-02"
title: "Trello"
category: "process"
---

Trello is used to track the development of a feature.  
There is a good amount of jargon and silent communication that happens in Trello.  
This doc should help demistify it.  

## Ownership
> "Put your face on it"

A Card is owned by whomever has their "face on it".  
When you're a Member on a Card, you own it.  
You're expected to take it through to production.

If you need pass a Card to someone else, or return it to the queue, make sure to take your face off.

## Commenting
Every time you pass a card off, or return it to the queue, you should add a comment about what you learned and what the next steps are.  

Cards don't always get resolved the first time.  
There's no failing in that.
But make sure you help the next person out with things you learned.  

## Priority (top-down)
Priority is represented by vertical position.  
Cards at the top a List are more important than Cards lower a List.

## Flow (left-to-right)
Cards go from left to right as they get closer to completion.  

Cards need to be approved on [Github](/github) and in Trello to move from `staging` to `production`.

## Labels

### `Ready for testing` (or *yellow*)
PMs and QA testers will test these features.

### `Approved` (or *green*)
This has been tested and PMS or QA and is ready to move to `production` or completion.

### `Needs work` (or *red*)
This has been tested and found incomplete.  
This label will be accompanied by next steps.  

## Automation
A [Zapier](https://zapier.com/) automation marks everything in the `staging` and `production` queues `Ready for Testing` on successful deploy.  
You can cash in on this automation by moving your card to an environment's List before your deploying to that environment.

## Integration
[Github](/github), [Slack](/slack), Google Drive, Dropbox, Zendesk, and others are setup as *Power Ups* on most Boards.  
You can use these to attach details — from those platforms — to your Cards.  
Most common for developers and designers is the Github Pull Request.

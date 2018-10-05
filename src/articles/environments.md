---
path: "/environments"
date: "2018-10-02"
title: "Environments"
category: "process"
---

We have four environment that apps get executed in.  
Each handles data in a different way.

Planning Center's `staging` environment runs on `production` data.  
This is critical knowledge when developing features behind [flipper](/flipper) flags and when features require database migrations.  

## Development
* Machine: Your notebook
* Data: Managed and maintained by you
* URL Structure: `accounts.pco.dev`  

## Test
* Machine: Your notebook and [circleci](/circleci)
* Data: Populated by `seeds`, `fixtures`, and `factories`. Maintained by your team.  

## Staging
* Machine: Staging Servers
* Data: **Production Database**
* URL Structure: `accounts-staging.planningcenteronline.com`  

## Production
* Machine: Production Servers
* Data: **Production Database**
* URL Structure: `accounts.planningcenteronline.com`  
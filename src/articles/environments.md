---
path: "/environments"
date: "2018-10-02"
title: "Environments"
---

We have four environment that apps get executed in.  
It's important to know where your data comes from and who maintains it.  

One unique thing about planning center is that `staging` runs on `production` data.  
But the web servers are different.  
This is critical when developnig features behind [flipper](/flipper) flags and when features require database migrations.  

## Development
* Machine: Your notebook
* Data: Managed and maintained by you
* URL Structure: `accounts.pco.dev`  

## Test
* Michine: Your notebook and [circleci](/circleci)
* Data: Populated by `seeds`, `fixtures`, and `factories`. Maintained by your team.  

## Staging
* Michine: Planning Center Staging Servers
* Data: **Production Database**
* URL Structure: `accounts-staging.planningcenteronline.com`  

## Production
* Michine: Planning Center Production Servers
* Data: **Production Database**
* URL Structure: `accounts.planningcenteronline.com`  
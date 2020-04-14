---
path: "/settings"
date: "2020-04-14"
title: "Settings"
category: "taxonomy"
---

There are four classifications of "global" settings.  
This document clarifies the boundaries of each, where those settings are located, and how they are accessed.

**This taxonomy is for administrative products.**
**It won't translate directly to public facing products like Church Center**

## Org

Org settings impact an entire organization indifferent to user, product, or resource.

Orginazition settings are often (but not always) universally unique.
Examples include church info, planning center subdomain, localization, subscription, and billing.

**Convention**: Located in and accessed via Accounts.

## User

User settings impact a single user and associated product automations.

Examples include product profiles: Services scheduling and blockout dates, Registrations registrations and payments, Check-Ins household and trusted people.

**Convention**: Located at the `/people/{ACID}` (in each product) and accessed via Topbar's user/org menu's "profile" button.

## Product

Product settings impact an entire organization's use of that product.

**Convention**: No shared convention for location or access.

**Suggestions**: In designing Topbar, we'd intended that product settings to be accessed via the product menu (similar to user settings and Topbar's user/org menu). The location would presumably be `/settings`.

## Resource collection

Resource collection settings impact the admininstration of a single resource type.
Examples include Services songs settings, Check-Ins event settings.

**Convention**: Accessed via settings `cog` or dropdown menu in the top right of a resource collection (list) header.

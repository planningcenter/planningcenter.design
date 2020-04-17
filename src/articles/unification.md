---
path: "/unification"
date: "2020-04-17"
title: "Unification"
category: "process"
---

Planning Center apps are very different.  
This actually makes the suite stronger and more adaptable.

We see the process of unification as one of observation and extraction.
We're looking for projects with a lot of existing examples and solutions.

We aggressively avoid optimistic abstraction.  
"First and forever" efforts are regularly dismissed.  
Previous attempts have had a very low success rate.

## Where should I ask about prior art?

If you're curious if something you're considering has been previously discussed, ask in the `#research-fidelity` Slack channel.

Shane, Dustin, or Chan will be most likely say why something is the way it is, what discussions have been had, and which efforts might already be under way.

Many times there is some institutional knowledge that simply hasn't been documented yet. As you raise inquiries, we'll document answers and status here.

## What should I consider when proposing a solution

My (Chan) motto for unification projects is this:

> solution = implementation + migration

Having a clear answer to a problem is only the first step in a unification process.
They biggest challenge is always migrating the product suite.

**Unification efforts that never complete can introduce more costumer confusion the existing inconsistencies they try to replace.**
**Count the full cost before starting.**

Here are some things to consider:

- Is the change critical to customer success?
- What impact will it have on designer/dev workflow?
- Can I showcase good examples that exist in products today?
- Are similar outside products using a similar implementation?
- Does the proposed change replace or extend an existing solutions?
- What's the minimum viable change?
- Is the implementation extensible, if teams need to augment it?
- Is any part of the implementation already being shared?
- Which team owns the implementation and maintenance?
- Will the change require an update to training material?
- What is the scope of the change? (all products, one product, one element, library, etc.)
- How many technologies does the implementation touch? (CSS, React, Rails, etc.)
- Are there dependencies that will need to be added?
- Are there dependencies that will need to be unified? (SweetAlert2, Reach, Rails, React Router, etc.)
- How much developer effort will the change require?
- How much testing effort will the change require?
- Is the migration path incremental? If another project becomes more important, can the effort be halted without needing to be restarted?
- Can the migration be self-directed by product teams or does it require active management?
- Who is completion reported to and where is it captured?
- Do decisions require insight from other teams (Platform, PM)?
- How should the implementation be versioned to allow clear migration?
- How should the implementation be versioned to
- What are the hard deadlines?
- Which future projects are dependent on this change?

These questions represent the — often complex — decision matrix that global unification projects are subject to.
They're listed here so you don't feel unduly challenged or dismissed when they're asked.

It's the job of **Research and Fidelity** to help navigate projects thru this these challenges.
So, consider the challenges but don't be intimidated by them.

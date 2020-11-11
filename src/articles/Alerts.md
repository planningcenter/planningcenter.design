---
path: "/alerts"
date: "2020-11-06"
title: "Alerts"
category: "interface"
---

Alerts are dialogue pop-ups that bring focused attention to critical actions or provide informational feedback to users. Alert libraries burrently used in our products are SweetAlert and SweetAlert2. You may choose to use these libraries or something else as long as it is configurable to match these specifications.

## Specifications

Please refer to [prompts](https://planningcenter.design/prompts) for more details on anatomy and copy requirements.

**Spacing**

![Example alert with redlines](/images/alert--spacing.png)

**Text**

- alerts should use the standard system font stack

![Example alert with text styles](/images/alert--text.png)

**Overlay**

The overlay that sits behind the modal should be `rgba(0,0,0,0.4)`. This should be what comes with SweetAlert/SweetAlert2 by default. 

**Colors**

Each color in the alerts color palette has at least a 3.0 contrast ratio for accessibility. These colors should be used for alerts in al products.
<div style="display: flex; align-items: center; justify-content: space-between; color: white;">
    <div style="background-color: #DF3023; width: 120px; padding: 38px 0; display: flex; flex-direction: column; align-items: center;">
        <span>Red</span>
        <span>#DF3023</span>
    </div>
    <div style="background-color: #FBC02D; width: 120px; padding: 38px 0; display: flex; flex-direction: column; align-items: center;">
        <span>Yellow</span>
        <span>#FBC02D</span>
    </div>
    <div style="background-color: #2AA92F; width: 120px; padding: 38px 0; display: flex; flex-direction: column; align-items: center;">
        <span>Green</span>
        <span>#2AA92F</span>
    </div>
    <div style="background-color: #059CEE; width: 120px; padding: 38px 0; display: flex; flex-direction: column; align-items: center;">
        <span>Blue</span>
        <span>#059CEE</span>
    </div>
</div>

<br><hr style="border-color: #eaeaea">

## Types
Typically, you'll use alerts in two scenarios.
1. To display a warning that needs confirmation of a choice, or
1. To provide a user with contextual information they need to know before continuing - like a success message

### Warning Types
Warning types always use the exclamation-triangle icon becuase we want users to know they need to make an important choice.

**Warning (default)** 

- Uses a primary confirmation button that neither creates or destroys.
- Icon: general#exclamation-triangle
- Icon color: yellow
- Primary button color: blue

![Example alert with text styles](/images/alert--warning-confirm.png)


**Warning-Create**

- Selecting the primary button would create data in our tables. 
- Icon: general#exclamation-triangle
- Icon color: yellow
- Primary button color: green

![Example alert with text styles](/images/alert--warning-create.png)

### Informational Types

**Warning-Destroy**

- Selecting the primary button would delete data in our tables.
- Icon: general#exclamation-triangle
- Icon color: yellow
- Primary button color: red

![Example alert with text styles](/images/alert--warning-destroy.png)


**Error**

- Provides informational feedback of an error. (No action available).
- Icon: general#x-circle
- Icon color
- Primary button color: red

![Example alert with text styles](/images/alert--error.png)

**Success**  

- Provides informational feedback of a successful action. (No action available).
- Icon: general#x-circle
- Icon color: green
- Primary button color: green

![Example alert with text styles](/images/alert--success.png)

**Info**

- Provides informational feedback of a successful action. (No action available).
- Icon: general#info-circle
- Icon color: blue
- Primary button color: blue

![Example alert with text styles](/images/alert--info.png)

<br><hr style="border-color: #eaeaea">

## Resources

* [Origin Basecamp discussion](https://3.basecamp.com/3670704/buckets/4998590/messages/2248307448#__recording_2381759118)  
* [SweetAlert2 docs](https://sweetalert2.github.io/)
* [SweetAlert2 package experiment](https://github.com/planningcenter/design/tree/master/planningcenter/sweetalert2) 
* [SweetAlert2 package demo (CodeSandbox)](https://codesandbox.io/s/planningcentersweetalert2-demo-vkcpl)
* [Reach UI experiment](https://planningcenter.style/?path=/docs/reach-alert-dialog--basic)

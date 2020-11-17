---
path: "/alerts"
date: "2020-11-06"
title: "Alerts"
category: "interface"
---

Alerts are dialogue pop-ups that bring focused attention to critical actions or provide informational feedback to users. Alert libraries currently used in our products are SweetAlert and SweetAlert2. You may choose to use these libraries or something else as long as it is configurable to match these specifications.

## Specifications

Please refer to [prompts](https://planningcenter.design/prompts) for more details on anatomy and copy requirements. You may also reference this [Figma project for the source spec graphics](https://www.figma.com/file/V8Ajrhr3jwzatZvkpqNKaK/Alerts?node-id=19%3A138).

**Spacing**

![Example alert with redlines](/images/alert--spacing.png)

**Elements**

![Example alert with redlines](/images/alert--elements.png)

**Text**

- alerts should use the standard system font stack

![Example alert with text styles](/images/alert--text.png)

**Overlay**

The overlay that sits behind the modal should be `rgba(0,0,0,0.4)`. This should be what comes with SweetAlert/SweetAlert2 by default. 

**Icons**
<div style="display: flex; align-items: center; justify-content: space-evenly; flex-wrap: wrap;">
    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 32px; width: 50%;">
        <div style="width: 48px;">
            <img src="/images/icon--x-circle.png" alt="x-circle icon" title="x-circle icon" />
        </div>
        <span><strong>Error</strong></span>
        <span>general#x-circle</span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 32px; width: 50%;">
        <div style="width: 48px;">
            <img src="/images/icon--exclamation-triangle.png" alt="x-circle icon" title="x-circle icon" />
        </div>
        <span><strong>Warning</strong></span>
        <span>general#exclamation-triangle</span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 32px; width: 50%;">
        <div style="width: 48px;">
            <img src="/images/icon--check-circle.png" alt="x-circle icon" title="x-circle icon" />
        </div>
        <span><strong>Success</strong></span>
        <span>general#check-circle</span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 32px; width: 50%;">
        <div style="width: 48px;">
            <img src="/images/icon--info-circle.png" alt="x-circle icon" title="x-circle icon" />
        </div>
        <span><strong>Info</strong></span>
        <span>general#info-circle</span>
    </div>
</div>

**Colors**

Each color in the alerts color palette has at least a 3.0 contrast ratio for accessibility. These colors should be used for alerts in all products.
<div style="display: flex; align-items: center; color: white;">
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
<div style="display: flex; align-items: center; color: white;">
    <div style="background-color: #595959; width: 120px; padding: 38px 0; display: flex; flex-direction: column; align-items: center;">
        <span>Headline</span>
        <span>#595959</span>
    </div>
    <div style="background-color: #848484; width: 120px; padding: 38px 0; display: flex; flex-direction: column; align-items: center;">
        <span>Body text</span>
        <span>#848484</span>
    </div>
    <div style="background-color: #e0e0e0; width: 120px; padding: 38px 0; display: flex; flex-direction: column; align-items: center; color: #595959">
        <span>Border</span>
        <span>#e0e0e0</span>
    </div>
</div>

<br><hr style="border-color: #eaeaea">

## Types
Typically, you'll use alerts in two scenarios.
1. To display a warning that needs confirmation of a choice, or
1. To provide a user with contextual information they need to know before continuing - like a success message

### Warning Types
Warning types always use the exclamation-triangle icon because we want users to know they need to make an important choice.

**Warning (default)** 

- Uses a primary confirmation button that neither creates or destroys.
- Icon: warning
- Icon color: yellow
- Primary button color: blue

![Example warning alert](/images/alert--warning-confirm.png)
<br>

**Warning-Create**

- Selecting the primary button would create data in our tables. 
- Icon: warning
- Icon color: yellow
- Primary button color: green

![Example warning create alert](/images/alert--warning-create.png)
<br>

**Warning-Destroy**

- Selecting the primary button would delete data in our tables.
- Icon: warning
- Icon color: yellow
- Primary button color: red

![Example warning destroy alert](/images/alert--warning-destroy.png)
<br>

### Informational Types

**Error**

- Provides informational feedback of an error.
- No choice for the user is needed. The primary action is to confirm they read the message.
- Icon: error
- Icon color: red
- Primary button color: blue

![Example error alert](/images/alert--error.png)
<br>

**Success**  

- Provides informational feedback of a successful action.
- No choice for the user is needed. The primary action is to confirm they read the message.
- Icon: success
- Icon color: green
- Primary button color: blue

![Example success alert](/images/alert--success.png)
<br>

**Info**

- Provides informational feedback of a successful action.
- No choice for the user is needed. The primary action is to confirm they read the message.
- Icon: info
- Icon color: blue
- Primary button color: blue

![Example info alert](/images/alert--info.png)

<br><hr style="border-color: #eaeaea">

## Resources

* [Origin Basecamp discussion](https://3.basecamp.com/3670704/buckets/4998590/messages/2248307448#__recording_2381759118)  
* [SweetAlert2 docs](https://sweetalert2.github.io/)
* [SweetAlert2 package experiment](https://github.com/planningcenter/design/tree/master/planningcenter/sweetalert2) 
* [SweetAlert2 package demo (CodeSandbox)](https://codesandbox.io/s/planningcentersweetalert2-demo-vkcpl)
* [Reach UI experiment](https://planningcenter.style/?path=/docs/reach-alert-dialog--basic)

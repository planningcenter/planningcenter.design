import React from "react";
import { PageList } from "../../../components/all_site_page_list";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div>
    <h1>Notification Semantics</h1>
    <PageList data={data} />


<p>We started discussing Notification styling in Slack. The feature will likely be resolved without Alerts but surfaced some inconsistencies in our Notification semantics.</p>

<p>Shane Armitage Shane and I see the categories of Notifications like this.</p>

<h2>Notifications</h2>
<p>Notifications are used to surface issues, announcements, and confirmations in a way that does not block UI. Notifications or distinct from Alerts, and Prompts, which block UI. They have have various degrees of stickiness, based on context.</p>

<p>Here are the categories of Notifications we've identified.</p>

<h3>Platform</h3>
<p>This Notifications should sit above Topbar.</p>

  <ul>
    <li>Degraded performance</li>
    <li>App announcement</li>
    <li>Braking API change</li>
    <li>Ministry Brands acquisition</li>
  </ul>

<h3>App</h3>
This Notification should sit directly below Topbar.

  <ul>
    <li>Flagship feature announcement</li>
    <li>Related product announcement</li>
    <li>Feature opt-in/opt-out (sticky)</li>
  </ul>

<h3>Resource</h3>
<p>These Notifications may be inlined (when async) or at the at the top of the displayed resource.</p>

  <ul>
    <li>CRUD and errors</li>
  </ul>

<h3>Context</h3>
<p>This Notification type is the most fluid and open to exploration.</p>

<p>In the cases we've seen, they are dismissible inline-block elements that sit below a description of the resource.</p>

  <ul>
    <li>Invalid resource or member (for soft validations)</li>
  </ul>

<p>Do these sound about right to you? Any clarifications you'd like to add? Any examples of a Context Notification you'd like to surface from your app?</p>
</div>
);

export default IndexPage;

export const query = graphql`
  query NotificationsQuery {
    allSitePage {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`;

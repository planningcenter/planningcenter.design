import React from "react";
import { PageList } from "../../../components/all_site_page_list";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div>
    <h1>Prompts</h1>
    <PageList data={data} />
    <h1 id="promptguidelines">Prompt Guidelines</h1>

<p>This is a framework for writing <code>prompt</code> copy.</p>

<p>A user might uncover several prompts in the same session. Having those prompts feel like they were written by the same person is reassuring.</p>

<p>Any of these recommendations may by disregarded for the sake clarity. "MUST" rules will rarely find a good reason to be broken.</p>

<p>In most cases, this framework will get you to a passable prompt.</p>

<h2 id="anatomy">Anatomy</h2>

<ul>
<li><a href="#headline">Headline</a></li>

<li><a href="#body">Body</a></li>

<li><a href="#cancel-button">Cancel Button</a></li>

<li><a href="#continue-button">Continue Button</a></li>
</ul>

<h2 id="color">Color</h2>

<ul>
<li><a href="#color-legend">Color Legend</a></li>
</ul>

<h2 id="commoncases">Common Cases</h2>

<ul>
<li><a href="#destroy-record">Destroy Record</a></li>

<li><a href="#discard-state">Discard State</a></li>

<li><a href="#disrupt-controlled-process">Disrupt Controlled Process</a></li>

<li><a href="#disrupt-uncontrolled-process">Disrupt Uncontrolled Process</a></li>
</ul>

<h2 id="sweetalertpreferences">SweetAlert Preferences</h2>

<ul>
<li><a href="#dont-use-stock-icons">Don't use stock icons</a></li>
</ul>

<hr />

<h2 id="headline">Headline</h2>

<ul>
<li>It <strong>MUST</strong> be present.</li>

<li>It <strong>MUST</strong> be phrased as a question.</li>

<li>It <strong>SHOULD</strong> be specific to the task.</li>

<li>It <strong>SHOULD</strong> be answerable with "yes" or "no".</li>

<li>It <strong>MAY</strong> be generic.</li>
</ul>

<h4 id="good">Good</h4>

<blockquote>
  <p>"Delete Person?"</p>
  
  <p>"Stop Mailing?"</p>
  
  <p>"Order Pizza?"</p>
</blockquote>

<h4 id="poorbutpassable">Poor but passable</h4>

<blockquote>
  <p>"Are you sure?"</p>
</blockquote>

<h4 id="bad">Bad</h4>

<blockquote>
  <p>"Delete?"</p>
  
  <p>"Remove or keep?"</p>
  
  <p>"Cancel?"</p>
</blockquote>

<h2 id="body">Body</h2>

<ul>
<li>It <strong>SHOULD</strong> be present.</li>

<li>It <strong>SHOULD</strong> clearly state the outcome of continuing.</li>

<li>It <strong>SHOULD</strong> clearly state side effects.</li>

<li>It <strong>SHOULD</strong> clearly state repeatability (if any).</li>
</ul>

<h4 id="good-1">Good</h4>

<blockquote>
  <p>"Deleting Cathy will remove her from People and all other Planning Center apps. Any related activity will also be deleted. You cannot un-delete Cathy."</p>
  
  <p>"Your registration is incomplete. Cancel now and your progress will not be lost."</p>
  
  <p>"Generating Lists can take up to 10 minutes. Your list might still be processing. If you cancel now, you can try again later."</p>
</blockquote>

<h4 id="bad-1">Bad</h4>

<blockquote>
  <p>"You're about to take an action that cannot be undone."</p>
  
  <p>"Doing this may be dangerous."</p>
  
  <p>"Deleting this person has consequences."</p>
</blockquote>

<h2 id="cancelbutton">Cancel Button</h2>

<ul>
<li>It <strong>MUST</strong> be positioned left of the Continue Button.</li>

<li>It <strong>MUST NOT</strong> be destructive.</li>

<li>It <strong>SHOULD</strong> look safe/neutral (like hitting escape).</li>

<li>It <strong>SHOULD</strong> read "Cancel" or be preceded with "No, "</li>

<li>It <strong>MAY NOT</strong> be present (if other close option is provided).</li>
</ul>

<h4 id="good-2">Good</h4>

<blockquote>
  <p>"Cancel"</p>
  
  <p>"Go back"</p>
  
  <p>"No, keep this person"</p>
  
  <p>"No, keep going" (when cancelling a kill-process request)</p>
</blockquote>

<h4 id="bad-2">Bad</h4>

<blockquote>
  <p>"Yes"</p>
  
  <p>"Escape"</p>
  
  <p>"Undo"</p>
</blockquote>

<h2 id="continuebutton">Continue Button</h2>

<ul>
<li>It <strong>MUST</strong> be present.</li>

<li>It <strong>MUST</strong> be positioned right of the Cancel Button.</li>

<li>It's color <strong>SHOULD</strong> represent the action being taken.</li>

<li>It <strong>SHOULD</strong> read "Continue" or preceded with "Yes, "</li>

<li>It <strong>MAY</strong> be destructive.</li>
</ul>

<h4 id="good-3">Good</h4>

<blockquote>
  <p>"Continue"</p>
  
  <p>"Yes, delete this person"</p>
  
  <p>"Yes, stop importing"</p>
</blockquote>

<h4 id="bad-3">Bad</h4>

<blockquote>
  <p>"No"</p>
  
  <p>"Enter"</p>
</blockquote>

<h2 id="colorlegend">Color Legend</h2>

<ul>
<li>CANCEL = <code>NO COLOR</code></li>

<li>DESTROY = <code>RED</code></li>

<li>CAUTION = <code>YELLOW</code></li>

<li>CREATE = <code>GREEN</code></li>

<li>GENERIC, NON-GENERATIVE, NON-DESTRUCTIVE ACTION = <code>BLUE/GRAY</code></li>
</ul>

<h2 id="destroyrecord">Destroy Record</h2>

<p>A user shouldn't be able to easily delete data. Put some speed bumps in place.</p>

<p>Your first line of defense is going to be the Action button. It should look pretty ominous.</p>

<h4 id="actionbutton">Action Button</h4>

<p>The button should start with "Delete", "Remove", or the like. It should also be <code>red</code>.</p>

<pre><code>
+----------------+
|  Delete Cathy  |    &lt;- It's red.
+----------------+
</code></pre>

<h4 id="prompt">Prompt</h4>

<h5 id="iteration1">Iteration 1</h5>

<ul>
<li>Headline: generic</li>

<li>Body: very specific. difficult to code.</li>

<li>Cancel Button: "Cancel"</li>

<li>Continue Button: "Yes, ..."</li>
</ul>

<pre><code>
+-----------------------------------------------------------------+
|                          Are you sure?                          |
+-----------------------------------------------------------------+
|                                                                 |
|  Deleting Cathy will remove her from all Planning Center apps.  |
|     Her activity will be lost. You cannot un-delete Cathy.      |
|                                                                 |
|                               +---------------------+           |
|              Cancel           |  Yes, Delete Cathy  |           |
|                               +---------------------+           |
+-----------------------------------------------------------------+
</code></pre>

<h5 id="iteration2">Iteration 2</h5>

<ul>
<li>Headline: specific</li>

<li>Body: less specific. easy to code.</li>

<li>Cancel Button: "No"</li>

<li>Continue Button: "Yes, ..."</li>
</ul>

<p>This is harder for the user to read but might spare some embarrassing gender mishaps.</p>

<pre><code>
+-----------------------------------------------------------------+
|                          Delete Cathy?                          |
+-----------------------------------------------------------------+
|                                                                 |
|         Deleting this person will remove them from all          |
|    Planning Center apps. Their profile and activity will be     |
|          deleted immediately. This can't be undone.             |
|                                                                 |
|                              +---------------------+            |
|                 No           |  Yes, Delete Cathy  |            |
|                              +---------------------+            |
+-----------------------------------------------------------------+
</code></pre>

<h5 id="iteration3">Iteration 3</h5>

<ul>
<li>Headline: generic</li>

<li>Body: less specific. easy to code.</li>

<li>Cancel Button: "Cancel"</li>

<li>Continue Button: "Yes, ..."</li>
</ul>

<p>If the originating button clearly says what you'll be deleting, I'd probably land on this. Generic but contextually simple.</p>

<pre><code>
+-----------------------------------------------------------------+
|                          Are you sure?                          |
+-----------------------------------------------------------------+
|                                                                 |
|         Deleting this person will remove them from all          |
|    Planning Center apps. Their profile and activity will be     |
|           delted immediately. This can't be undone.             |
|                                                                 |
|                               +---------------------+           |
|              Cancel           |  Yes, Delete Cathy  |           |
|                               +---------------------+           |
+-----------------------------------------------------------------+
</code></pre>

<h2 id="discardstate">Discard State</h2>

<p>Discarding transient state isn't destructive. The user shouldn't feel too concerned about going back or exiting the process. But You'll see that it's really hard to write body text for.</p>

<p>The action button should look pretty safe. They shouldn't be afraid to back out of a process.</p>

<h4 id="actionbutton-1">Action Button</h4>

<p>The button read "Cancel", "Go back", "Leave", etc. It should NOT be <code>red</code>. <code>gray</code> or <code>no color</code> are appropriate.</p>

<pre><code>
+----------+    +----------------+
|  Cancel  |    |  Registration  |
+----------+    +----------------+
      ^                  ^
      |                  |
 (gray/none)          (green)
</code></pre>

<h4 id="prompt-1">Prompt</h4>

<p>This prompt is where you can find yourself in the "cancel my cancel" pit. Unfortunately, that doesn't leave us with many options. The way out is to be explicit and <em>really</em> force the "yes"/"no" response.</p>

<ul>
<li>Cancel Button: "No, ..." (gray/no-color)</li>

<li>Continue Button: "Yes, ..." (red)</li>
</ul>

<pre><code>
+----------------------------------------------------------------+
|                        Cancel Registration?                    |
+----------------------------------------------------------------+
|                                                                |
|            You haven't completed your registration.            |
|         If you cancel now, your progress will be lost.         |
|                                                                |
|                               +----------------------------+   |
|      No, keep going           |  Yes, cancel registration  |   |
|                               +----------------------------+   |
+----------------------------------------------------------------+
</code></pre>

<h2 id="disruptcontrolledprocess">Disrupt Controlled Process</h2>

<p>A controlled process is one that can be halted or rerun with little consequence. Users should be adequately warned about the outcome but nothing truly destructive is happening.</p>

<p>The Action Button color is pretty contextual. I'd guess <code>yellow</code> in the majority of cases.</p>

<h4 id="actionbutton-2">Action Button</h4>

<p>The button should read as active: "Stop", "Pause", "Interrupt", etc. "Cancel" is too passive and should be reserved for cancelling your request to interrupt the process.</p>

<pre><code>
+------------------+
|  Stop importing  |    &lt;- dealer's choice on color
+------------------+
</code></pre>

<h4 id="prompt-2">Prompt</h4>

<p>So the prompt is where you can find yourself in the "cancel my cancel" pit. Unfortunately, that doesn't leave us with a lot of options. The way out is to be explicit and <em>really</em> force the "yes"/"no" response.</p>

<ul>
<li>Cancel Button: "No, ..." (gray/no-color)</li>

<li>Continue Button: "Yes, ..." (red)</li>
</ul>

<pre><code>
+-------------------------------------------------------------+
|                       Stop CSV import?                      |
+-------------------------------------------------------------+
|                                                             |
|            Your CSV import has not completed.               |
|   If you stop the import, no users will have been added.    |
|          You may safely import this CSV later.              |
|                                                             |
|                               +-------------------------+   |
|      No, keep importing       |  Yes, stop this import  |   |
|                               +-------------------------+   |
+-------------------------------------------------------------+
</code></pre>

<h2 id="disruptuncontrolledprocess">Disrupt Uncontrolled Process</h2>

<p>An uncontrolled process is one that can't be cleanly stopped, rolled back, or restarted. Think mass-mailer. These are dangerous and should look like it.</p>

<h4 id="actionbutton-3">Action Button</h4>

<p>The button should be active and somewhat ominous. "Halt", "Stop", "Pause", "Interrupt", etc. "Cancel" is too passive and should be reserved for cancelling your request to interrupt the process.</p>

<pre><code>
+----------------+
|  Stop mailing  |    &lt;- red button
+----------------+
</code></pre>

<h4 id="prompt-3">Prompt</h4>

<p>So the prompt is where you can find yourself in the "cancel my cancel" pit. Unfortunately, that doesn't leave us with a lot of options. The way out is to be explicit and <em>really</em> force the "yes"/"no" response.</p>

<ul>
<li>Cancel Button: "No, ..." (gray/no-color)</li>

<li>Continue Button: "Yes, ..." (red)</li>
</ul>

<pre><code>
+-------------------------------------------------------------------+
|                           Stop mailing?                           |
+-------------------------------------------------------------------+
|                                                                   |
|     This email is being sent to 100 people. If you stop now,      |
|   a portion of those people may have already recieved an email.   |
|       This mailing cannot be picked up where it left off.         |
|                                                                   |
|                                  +---------------------+          |
|       No, continue mailing       |  Yes, stop mailing  |          |
|                                  +---------------------+          |
+-------------------------------------------------------------------+
</code></pre>

<h2 id="dontusestockicons">Don't use stock icons</h2>

<p>Don't use the stock icons. They don't match our aesthetic and are generally overstated. If you use these guidelines, the generic graphics won't provide much user-value.</p>
  </div>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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

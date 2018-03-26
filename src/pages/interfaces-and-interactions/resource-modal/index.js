import React from "react";
import { PageList } from "../../../components/all_site_page_list";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div>
    <h1>Prompts</h1>
    <PageList data={data} />
    <h1 id="promptguidelines">Prompt Guidelines</h1>

<p>We talk a lot about "routable dialogs." The idea gathered a lot of mindshare but little traction and implementations have been unsuccessful.</p>

<p>Written here is the sum of my thinking on the matter; I'm calling these modals <strong>Resource Modals</strong>. The constraints we have merit a different way of thinking. The solution can't live in JavaScript alone; we need a policy.</p>

<h2 id="scope">Scope</h2>

<p>This policy applies strictly to modals that show a resource.</p>

<h2 id="constraints">Constraints</h2>

<ul>
<li>Showing a modal writes a linkable URL (like Trello, Facebook/Instagram)</li>

<li>User cannot <code>Back</code> into a Modal (unlike Trello)</li>

<li><code>Back</code> dismisses the current modal (like Facebook/Instagram)</li>
</ul>

<h2 id="difficulties">Difficulties</h2>

<ul>
<li>If <code>Back</code> dismisses a modal, users that arrive at modal (via link) cannot dismiss it. It's also possible for a user to <code>dismiss</code> themselves out of the app entirely.</li>
</ul>

<h2 id="proposal">Proposal</h2>

<h3 id="navigationbehavior">Navigation behavior</h3>

<ul>
<li>Resource Modal writes new URL to <code>resource_path(resource)</code> via <code>pushState</code></li>

<li><code>Back</code> dismissed the Modal (default behavior with <code>pushState</code>)</li>

<li><code>dismiss/cancel/close</code> delegate to <code>window.history.back()</code></li>
</ul>

<h3 id="pastedlinkbehavior">Pasted-link behavior</h3>

<ul>
<li>Link is a Rails resource path. Routes directly to resource <code>show/edit</code> page</li>
</ul>

<h2 id="implementation">Implementation</h2>

<h3 id="actionpackvariants">Action Pack Variants</h3>

<p>Registrations is currently using Variants for modals. It's wildly successful.</p>

<p>This is a very generalized implementation:</p>

<pre><code class="ruby language-ruby">class ApplicationController &lt; ActionController::Base
  before_action :set_variant

  layout proc &#125; false if request.xhr? &#125; 

  def set_variant
    request.variant = :modal if params[:variant] == "modal"
  end
end
</code></pre>

<pre><code class="html language-html">&lt;button data-modal-url="/resource/123.html?variant=modal"&gt;Launch Resource Modal&lt;/button&gt;
</code></pre>

<p>In practice, Interfaces would append the query param when fetching modal content.</p>

<h4 id="futurevariantapi">Future Variant API</h4>

<p>Rails 5.0 will have a great <a href="https://github.com/rails/rails/issues/18818">first-class</a> API for this:</p>

<pre><code class="html language-html">&lt;button data-modal-url="/resource/123.html+modal"&gt;Launch Resource Modal&lt;/button&gt;
</code></pre>

<h3 id="resourcepartial">Resource Partial</h3>

<p>Use a shared resource partial to keep variants consistent.</p>

<pre><code>show.html.erb
show.html+modal.erb
_resource_show.html.erb
</code></pre>

<p><strong><em>resource</em>show.html.erb</strong></p>

<pre><code class="erb language-erb">&lt;div class="resource"&gt;
  &lt;div class="resource-name"&gt;
    &lt;%= @resource.name %&gt;
  &lt;/div&gt;
  &lt;div class="resource-body"&gt;
    &lt;%= @resource.body %&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

<p><strong>show.html.erb</strong></p>

<pre><code class="erb language-erb">&lt;h2 class="page-title"&gt;&lt;%= @resource.name %&gt;&lt;/h2&gt;
&lt;div class="page-content"&gt;
  &lt;%= render "_resource_show" %&gt;

  ...
&lt;/div&gt;
</code></pre>

<p><strong>show.html+modal.erb</strong></p>

<pre><code class="erb language-erb">&lt;!-- important that layout is not sent --&gt;
&lt;div class="modal"&gt;
  &lt;header class="modal-header"&gt;
    &lt;%= @resource.name %&gt;
  &lt;/header&gt;

  &lt;div&gt; class="modal-content"&gt;
    &lt;%= render "_resource_show" %&gt;
  &lt;/div&gt;

  ...
&lt;/div&gt;
</code></pre>

<h3 id="example">Example</h3>

<h5 id="indexview">index view</h5>

<pre><code>+--------------------------------------------------+
|             instagram.com/chantastic             |
+--------------------------------------------------+
|                                                  |
|                                                  |
|  +--------+  +--------+  +--------+  +--------+  |
|  |        |  |        |  |        |  |        |  |
|  |        |  |        |  |        |  |        |  |
|  |        |  |        |  |        |  |        |  |
|  +--------+  +--------+  +--------+  +--------+  |
|                                                  |
|  +--------+  +--------+  +--------+  +--------+  |
|  |        |  |        |  |        |  |        |  |
|  |        |  |        |  |        |  |        |  |
|  |        |  |        |  |        |  |        |  |
|  +--------+  +--------+  +--------+  +--------+  |
|                                                  |
|                                                  |
+--------------------------------------------------+
</code></pre>

<h5 id="modalshow">modal-show</h5>

<p>Seen when a user navigates to a Resource Modal.</p>

<pre><code>+--------------------------------------------------+
|      instagram.com/chantastic/p/0N8ndhMsaS       |
+--------------------------------------------------+
|                                                  |
|      +------------------------------------+      |
|  +---|                                  x |---+  |
|  |   |                                    |   |  |
|  |   |                                    |   |  |
|  |   |                                    |   |  |
|  +---|                                    |---+  |
|      |                                    |      |
|  +---|                                    |---+  |
|  |   |                                    |   |  |
|  |   |                                    |   |  |
|  |   |                                    |   |  |
|  +---|                                    |---+  |
|      +------------------------------------+      |
|                                                  |
+--------------------------------------------------+
</code></pre>

<h5 id="show">show</h5>

<p>Seen when a user arrives at a resource via link.</p>

<pre><code>+--------------------------------------------------+
|      instagram.com/chantastic/p/0N8ndhMsaS       |
+--------------------------------------------------+
|                                                  |
|  +--------------------------------------------+  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  |                                            |  |
|  +--------------------------------------------+  |
|                                                  |
|                            | see all pictures |  |
|                                                  |
+--------------------------------------------------+
</code></pre>

<h3 id="variantactions">Variant Actions</h3>

<p>Each variant has different standard actions.</p>

<p><strong>edit.html.erb</strong></p>

<pre><code>+-----------------------+   +----------+
|  see all &#124;resource&#125;s  |   |   save   |
+-----------------------+   +----------+

* see all &#124;resource&#125;s  -&gt;  GET   /resource
* save                 -&gt;  PATCH /resource/:id
</code></pre>

<p><strong>edit.html+modal.erb</strong></p>

<pre><code>+----------+   +----------+
|  cancel  |   |   save   |
+----------+   +----------+

* cancel  -&gt;  `window.history.back`
* save    -&gt;  PATCH /resource/:id
</code></pre>

<h2 id="tools">Tools</h2>

<ul>
<li><a href="https://github.com/browserstate/history.js/">History.js</a> — crappy-browser <code>history</code> polyfill</li>
</ul>

<h2 id="implementationgiving">Implementation (Giving)</h2>

<p>Talking with @danott, I was able to see their implementation of variants for modals. Cool stuff:</p>

<h5 id="applicationcontrollererb">ApplicationController.erb</h5>

<p>The <code>:modal</code> variant type is set for <code>format.js</code> requests. This simply adds precedents to <code>resource.html+variant</code> but falls through for regular SRJ requests.</p>

<pre><code class="ruby language-ruby">class ApplicationController &lt; BaseController
  before_action :apply_modal_variant

  ...

  def apply_modal_variant
    request.variant = :modal if request.format.js?
  end
end
</code></pre>

<h5 id="layoutsapplicationhtmlmodalerb">layouts/application.html+modal.erb</h5>

<p>They've created a <code>+modal</code> application layout. Rails-magic&reg; uses this layout by default for <code>+modal</code> variants. Soops-cool:</p>

<pre><code class="erb language-erb">&lt;%= yield %&gt;
</code></pre>

<p>This is a great, low-configuration option.</p>
</div>
);

export default IndexPage;

export const query = graphql`
  query ResourceModalQuery {
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

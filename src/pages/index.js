import React from "react";
import Layout from "../components/main_layout";
import appsSprite from "@planningcenter/icons/sprites/apps.svg";
import Symbol from "@planningcenter/symbol";

function OutdatedCell(props) {
  return (
    <Cell style={{ backgroundColor: "#de1920", color: "white" }} {...props} />
  );
}

function InProgressCell(props) {
  return <Cell style={{ backgroundColor: "#fff97b" }} {...props} />;
}

function Cell({ component: Component = "td", ...props }) {
  return <Component {...props} />;
}

function StyledList({ component: Component = "ul", ...props }) {
  return (
    <Component
      style={{
        paddingLeft: "1em",
        marginBottom: 0,
        textAlign: "left",
      }}
      {...props}
    />
  );
}

const IndexPage = () => (
  <Layout>
    <style>{`.symbol { font-size: 2rem}`}</style>
    <div>
      <h1 style={{ marginTop: 0 }}>Goal</h1>
      <section>
        <p>
          Make a cohesive platform for customers through conversation and
          consensus.
        </p>
        <p>
          We favor standard technologies, to maximize portability and industry
          knowledge.
        </p>
      </section>
      <h1 style={{ marginTop: 0 }}>Status</h1>
      <p>This is the status of some suite-wide unifification efforts.</p>
      <div className="remark-table">
        <table>
          <thead>
            <tr>
              <td>app</td>
              <td>bundler</td>
              <td>icons</td>
              <td>favicon</td>
              <td>emails</td>
              <td>typeface</td>
              <td>rem</td>
              <td>utility-classes</td>
              <td>specified components</td>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "accounts",
                color: "#3B80C6",
                utilityClasses: (
                  <InProgressCell as="td" data-label="rem">
                    <ul>
                      <li>
                        <a href="https://github.com/chantastic/minions.css">
                          <code>minions.css</code>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/chantastic/minions_rails">
                          <code>minions_rails</code>
                        </a>
                      </li>
                    </ul>
                  </InProgressCell>
                ),
              },
              {
                name: "calendar",
                color: "#CC4832",
                specifiedComponents: <td />,
                utilityClasses: (
                  <InProgressCell as="td" data-label="rem">
                    <ul>
                      <li>
                        <a href="https://github.com/ministrycentered/ui-kit">
                          <code>UI-Kit</code>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/chantastic/minions_rails">
                          <code>minions_rails</code>
                        </a>
                      </li>
                    </ul>
                  </InProgressCell>
                ),
                rem: (
                  <OutdatedCell as="td" data-label="rem">
                    <code>62.5%</code>
                  </OutdatedCell>
                ),
              },
              {
                name: "check-ins",
                color: "#876096",
                specifiedComponents: <td />,
                utilityClasses: (
                  <InProgressCell as="td" data-label="rem">
                    <ul>
                      <li>
                        <a href="https://github.com/chantastic/minions.css">
                          <code>minions.css</code>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/chantastic/minions_rails">
                          <code>minions_rails</code>
                        </a>
                      </li>
                    </ul>
                  </InProgressCell>
                ),
              },
              {
                name: "church-center",
                color: "",
              },
              {
                name: "giving",
                color: "#F4C551",

                utilityClasses: (
                  <InProgressCell as="td" data-label="rem">
                    <ul>
                      <li>
                        <a href="https://github.com/chantastic/minions_rails">
                          <code>minions_rails</code>
                        </a>
                      </li>
                    </ul>
                  </InProgressCell>
                ),
              },
              {
                name: "groups",
                color: "#FB7642",
                utilityClasses: (
                  <InProgressCell as="td" data-label="rem">
                    <ul>
                      <li>
                        <a href="https://github.com/chantastic/minions_rails">
                          <code>minions_rails</code>
                        </a>
                      </li>
                    </ul>
                  </InProgressCell>
                ),
              },
              {
                name: "publishing",
                typeface: (
                  <InProgressCell as="td">
                    <code>host</code>
                  </InProgressCell>
                ),
                utilityClasses: <td />,
              },
              {
                name: "people",
                color: "#4278e3",
                utilityClasses: (
                  <InProgressCell as="td" data-label="rem">
                    <ul>
                      <li>
                        <a href="https://github.com/chantastic/minions.css">
                          <code>minions.css</code>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/chantastic/minions_rails">
                          <code>minions_rails</code>
                        </a>
                      </li>
                    </ul>
                  </InProgressCell>
                ),
              },
              {
                name: "registrations",
                color: "#46948D",
              },
              {
                name: "services",
                color: "#659630",
                icons: (
                  <InProgressCell as="td" data-label="icons">
                    <a href="https://github.com/ministrycentered/ui-kit">
                      <code>UI-Kit</code>
                    </a>
                  </InProgressCell>
                ),
                typeface: (
                  <InProgressCell as="td" data-label="icons">
                    <code>host</code>
                  </InProgressCell>
                ),
                rem: (
                  <OutdatedCell as="td" data-label="rem">
                    <code>62.5%</code>
                  </OutdatedCell>
                ),
                specifiedComponents: (
                  <InProgressCell data-label="specified-components">
                    <a href="https://github.com/ministrycentered/ui-kit">
                      <code>UI-Kit</code>
                    </a>
                  </InProgressCell>
                ),
                utilityClasses: (
                  <td data-label="utility-classes">
                    <a href="https://github.com/ministrycentered/ui-kit">
                      <code>UI-Kit</code>
                    </a>
                  </td>
                ),
              },
            ].map(_app => {
              let app = {
                name: "",
                color: "",
                bundler: (
                  <td data-label="bundler">
                    <a href="https://github.com/rails/webpacker">
                      <code>rails/webpacker</code>
                    </a>
                  </td>
                ),
                icons: (
                  <td data-label="icons">
                    <code>
                      <a
                        href="https://github.com/planningcenter/icons"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        >= @planningcenter/icons@2
                      </a>
                    </code>
                  </td>
                ),
                emails: (
                  <td data-label="emails">
                    <a href="https://github.com/ministrycentered/pco-communication">
                      <code>>= pco-communication@1.8.1</code>
                    </a>
                  </td>
                ),
                favicon: (
                  <td data-label="favicon">
                    <a href="https://github.com/ministrycentered/interfaces">
                      <code>>= interfaces@2</code>
                    </a>
                  </td>
                ),
                typeface: (
                  <td data-label="typeface">
                    <a href="https://www.npmjs.com/package/@planningcenter/typeface">
                      <code>@planningcenter/typeface</code>
                    </a>
                  </td>
                ),
                rem: (
                  <td data-label="rem">
                    <code>default</code>
                  </td>
                ),
                utilityClasses: (
                  <td data-label="rem">
                    <a href="https://github.com/chantastic/minions.css">
                      <code>minions.css</code>
                    </a>
                  </td>
                ),
                specifiedComponents: (
                  <InProgressCell data-label="rem">
                    <a href="https://github.com/planningcenter/design/tree/master/planningcenter/components">
                      <code>@planningcenter/components (partial)</code>
                    </a>
                  </InProgressCell>
                ),
                ..._app,
              };
              return (
                <tr>
                  <td data-label="app">
                    <Symbol
                      symbol={`${appsSprite}#${app.name}-app`}
                      style={{ color: app.color }}
                    />
                  </td>
                  {app.bundler}
                  {app.icons}
                  {app.favicon}
                  {app.emails}
                  {app.breakpoints}
                  {app.typeface}
                  {app.rem}
                  {app.utilityClasses}
                  {app.specifiedComponents}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h2>Topics</h2>
      <p>
        This page is a living document for Planning Center design systems. Here
        you'll find the current state of team decisions on cross-app
        expectations.
      </p>
    </div>
  </Layout>
);

export default IndexPage;

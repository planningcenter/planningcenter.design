import React from "react";
import Layout from "../components/layouts";
import appsSprite from "@planningcenter/icons/sprites/apps.svg";
import Symbol from "@planningcenter/symbol";
import "table.css";

const IndexPage = () => (
  <Layout>
    <style>{`.symbol { font-size: 2rem}`}</style>
    <div className="article">
      <h2>Status</h2>

      <table>
        <thead>
          <tr>
            <td>app</td>
            <td>bundler</td>
            <td>icons</td>
            <td>favicon</td>
            <td>emails</td>
          </tr>
        </thead>
        <tbody>
          {[
            {
              name: "accounts",
              color: "#3B80C6",
              icons: (
                <td
                  data-label="icons"
                  style={{ backgroundColor: "#de1920", color: "white" }}
                >
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <code>@planningcenter/icons@1</code>
                    </li>
                    <li>
                      <code>interfaces_icons</code>
                    </li>
                    <li>
                      <code>IcoMoon iconfont</code>
                    </li>
                  </ul>
                </td>
              ),
              favicon: (
                <td data-label="favicon">
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>interfaces@2</code>
                  </a>
                </td>
              ),
              emails: (
                <td data-label="emails" style={{ backgroundColor: "#fff97b" }}>
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <a href="https://github.com/ministrycentered/pco-communication">
                        <code>pco-communication@2</code>
                      </a>
                    </li>

                    <li>app-specific</li>
                  </ul>
                </td>
              ),
              bundler: (
                <td
                  data-label="bundler"
                  style={{ backgroundColor: "#de1920", color: "white" }}
                >
                  <code>sprockets-es6-amd</code>
                </td>
              ),
            },
            {
              name: "check-ins",
              color: "#876096",
              icons: (
                <td data-label="icons" style={{ backgroundColor: "#fff97b" }}>
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <code>
                        <a
                          href="https://github.com/planningcenter/icons"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @planning-center/icons@2
                        </a>
                      </code>
                    </li>
                    <li>
                      <code>@planningcenter/icons@1</code>
                    </li>
                    <li>
                      <code>interfaces_icons</code>
                    </li>
                    <li>
                      <code>IcoMoon iconfont</code>
                    </li>
                  </ul>
                </td>
              ),
              favicon: (
                <td data-label="favicon">
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>interfaces@2</code>
                  </a>
                </td>
              ),
              emails: (
                <td data-label="emails" style={{ backgroundColor: "#fff97b" }}>
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <a href="https://github.com/ministrycentered/pco-communication">
                        <code>pco-communication@2</code>
                      </a>
                    </li>

                    <li>app-specific</li>
                  </ul>
                </td>
              ),
              bundler: (
                <td data-label="bundler">
                  <a href="https://github.com/rails/webpacker">
                    <code>rails/webpacker</code>
                  </a>
                </td>
              ),
            },
            {
              name: "groups",
              color: "#F4C551",
              icons: (
                <td data-label="icons" style={{ backgroundColor: "#fff97b" }}>
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <code>
                        <a
                          href="https://github.com/planningcenter/icons"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @planning-center/icons@2
                        </a>
                      </code>
                    </li>
                    <li>
                      <code>@planningcenter/icons@1</code>
                    </li>
                    <li>
                      <code>IcoMoon iconfont</code>
                    </li>
                  </ul>
                </td>
              ),
              favicon: (
                <td>
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>interfaces@2</code>
                  </a>
                </td>
              ),
              emails: (
                <td>
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>pco-communication@2</code>
                  </a>
                </td>
              ),
              bundler: (
                <td data-label="bundler">
                  <a href="https://github.com/rails/webpacker">
                    <code>rails/webpacker</code>
                  </a>
                </td>
              ),
            },
            {
              name: "groups",
              color: "#FB7642",
              icons: (
                <td data-label="icons" style={{ backgroundColor: "#fff97b" }}>
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <code>
                        <a
                          href="https://github.com/planningcenter/icons"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @planning-center/icons@2
                        </a>
                      </code>
                    </li>
                    <li>
                      <code>@planningcenter/icons@1</code>
                    </li>
                    <li>
                      <code>IcoMoon iconfont</code>
                    </li>
                  </ul>
                </td>
              ),
              favicon: (
                <td>
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>interfaces@2</code>
                  </a>
                </td>
              ),
              emails: (
                <td>
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>pco-communication@2</code>
                  </a>
                </td>
              ),
              bundler: (
                <td data-label="bundler">
                  <a href="https://github.com/rails/webpacker">
                    <code>rails/webpacker</code>
                  </a>
                </td>
              ),
            },
            {
              name: "people",
              color: "#4278e3",
              icons: (
                <td data-label="icons" style={{ backgroundColor: "#fff97b" }}>
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <code>
                        <a
                          href="https://github.com/planningcenter/icons"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @planning-center/icons@2
                        </a>
                      </code>
                    </li>
                    <li>
                      <code>IcoMoon iconfont</code>
                    </li>
                  </ul>
                </td>
              ),
              favicon: (
                <td data-labels="favicon">
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>interfaces@2</code>
                  </a>
                </td>
              ),
              emails: (
                <td data-label="emails" style={{ backgroundColor: "#fff97b" }}>
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <a href="https://github.com/ministrycentered/pco-communication">
                        <code>pco-communication@2</code>
                      </a>
                    </li>

                    <li>app-specific</li>
                  </ul>
                </td>
              ),
              bundler: (
                <td data-label="bundler">
                  <a href="https://github.com/rails/webpacker">
                    <code>rails/webpacker</code>
                  </a>
                </td>
              ),
            },
            {
              name: "registrations",
              color: "#46948D",
              icons: (
                <td
                  data-label="icons"
                  style={{ backgroundColor: "#de1920", color: "white" }}
                >
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <code>@planningcenter/icons@1</code>
                    </li>
                    <li>
                      <code>interfaces_icons</code>
                    </li>
                    <li>
                      <code>IcoMoon iconfont</code>
                    </li>
                  </ul>
                </td>
              ),
              favicon: (
                <td data-label="favicon">
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>interfaces@2</code>
                  </a>
                </td>
              ),
              emails: (
                <td data-label="emails" style={{ backgroundColor: "#fff97b" }}>
                  <ul
                    style={{
                      marginBottom: 0,
                      paddingLeft: "1em",
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <a href="https://github.com/ministrycentered/pco-communication">
                        <code>pco-communication@2</code>
                      </a>
                    </li>
                    <li>app-specific</li>
                  </ul>
                </td>
              ),
              bundler: (
                <td
                  data-label="bundler"
                  style={{ backgroundColor: "#de1920", color: "white" }}
                >
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "1em",
                      marginBottom: 0,
                    }}
                  >
                    <li>
                      <a href="https://github.com/rails/webpacker">
                        <code>rails/webpacker</code>
                      </a>
                    </li>
                    <li>
                      <code>sprockets-es6-amd</code>
                    </li>
                  </ul>
                </td>
              ),
            },
            {
              name: "resources",
              color: "#963522",
              icons: (
                <td data-label="icons" style={{ backgroundColor: "#fff97b" }}>
                  <ul
                    style={{
                      paddingLeft: "1em",
                      marginBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <code>
                        <a
                          href="https://github.com/planningcenter/icons"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @planning-center/icons@2
                        </a>
                      </code>
                    </li>
                    <li>
                      <code>@planningcenter/icons@1</code>
                    </li>
                    <li>
                      <code>interfaces_icons</code>
                    </li>
                    <li>
                      <code>IcoMoon iconfont</code>
                    </li>
                  </ul>
                </td>
              ),
              favicon: (
                <td>
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>interfaces@2</code>
                  </a>
                </td>
              ),
              emails: (
                <td style={{ backgroundColor: "#de1920", color: "white" }}>
                  <code>app-specific</code>
                </td>
              ),
              bundler: (
                <td data-label="bundler">
                  <a href="https://github.com/rails/webpacker">
                    <code>rails/webpacker</code>
                  </a>
                </td>
              ),
            },
          ].map(_app => {
            let app = {
              name: "",
              color: "",
              bundler: <td />,
              emails: <td />,
              favicon: <td />,
              icon: <td />,
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
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Topics</h2>
      <p>
        This page is a living document for Planning Center design systems. Here
        you'll find the current state of team decisions on cross-app
        expectations.
      </p>

      <strong>Forthcoming topics...</strong>
      <h3>8pt grid system</h3>
      <h3>System font</h3>
      <h3>Minions</h3>
      <h3>Font scale</h3>
      <h3>Material breakpoints (simplified)</h3>
      <h3>Progressive enancement APIs and how to use them</h3>
      <h4>
        <code>position: sticky</code>
      </h4>
      <h4>
        <code>CSS Grid</code>
      </h4>
    </div>
  </Layout>
);

export default IndexPage;

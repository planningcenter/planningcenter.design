import React from "react";
import Layout from "../components/layouts";
import appsSprite from "@planningcenter/icons/sprites/apps.svg";
import Symbol from "@planningcenter/symbol";
import "table.css";

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

let outdatedIconSets = [
  "@planning-center/icons@1",
  "interfaces_icons",
  "IcoMoon iconfont",
];

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
                <OutdatedCell data-label="icons">
                  <StyledList>
                    {outdatedIconSets.map(lib => (
                      <li>
                        <code>{lib}</code>
                      </li>
                    ))}
                  </StyledList>
                </OutdatedCell>
              ),
              emails: (
                <InProgressCell data-label="emails">
                  <StyledList>
                    <li>
                      <a href="https://github.com/ministrycentered/pco-communication">
                        <code>pco-communication@2</code>
                      </a>
                    </li>

                    <li>app-specific</li>
                  </StyledList>
                </InProgressCell>
              ),
              bundler: (
                <OutdatedCell data-label="bundler">
                  <code>sprockets-es6-amd</code>
                </OutdatedCell>
              ),
            },
            {
              name: "check-ins",
              color: "#876096",
              icons: (
                <InProgressCell data-label="icons">
                  <StyledList>
                    <li>
                      <code>
                        <a
                          href="https://github.com/planningcenter/icons"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @planningcenter/icons@2
                        </a>
                      </code>
                    </li>
                    {outdatedIconSets.map(lib => (
                      <li>
                        <code>{lib}</code>
                      </li>
                    ))}
                  </StyledList>
                </InProgressCell>
              ),
              emails: (
                <InProgressCell data-label="emails">
                  <StyledList>
                    <li>
                      <a href="https://github.com/ministrycentered/pco-communication">
                        <code>pco-communication@2</code>
                      </a>
                    </li>

                    <li>app-specific</li>
                  </StyledList>
                </InProgressCell>
              ),
            },
            {
              name: "groups",
              color: "#F4C551",
              icons: (
                <InProgressCell data-label="icons">
                  <StyledList>
                    <li>
                      <code>
                        <a
                          href="https://github.com/planningcenter/icons"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @planningcenter/icons@2
                        </a>
                      </code>
                    </li>
                    {outdatedIconSets
                      .filter(set => set !== "interfaces_icons")
                      .map(lib => (
                        <li>
                          <code>{lib}</code>
                        </li>
                      ))}
                  </StyledList>
                </InProgressCell>
              ),
            },
            {
              name: "groups",
              color: "#FB7642",
              icons: (
                <InProgressCell data-label="icons">
                  <StyledList>
                    <li>
                      <code>
                        <a
                          href="https://github.com/planningcenter/icons"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @planningcenter/icons@2
                        </a>
                      </code>
                    </li>
                    {outdatedIconSets
                      .filter(set => set !== "interfaces_icons")
                      .map(lib => (
                        <li>
                          <code>{lib}</code>
                        </li>
                      ))}
                  </StyledList>
                </InProgressCell>
              ),
            },
            {
              name: "people",
              color: "#4278e3",
              emails: (
                <InProgressCell data-label="emails">
                  <StyledList>
                    <li>
                      <a href="https://github.com/ministrycentered/pco-communication">
                        <code>pco-communication@2</code>
                      </a>
                    </li>

                    <li>app-specific</li>
                  </StyledList>
                </InProgressCell>
              ),
            },
            {
              name: "registrations",
              color: "#46948D",
              icons: (
                <OutdatedCell data-label="icons">
                  <StyledList>
                    {outdatedIconSets.map(lib => (
                      <li>
                        <code>{lib}</code>
                      </li>
                    ))}
                  </StyledList>
                </OutdatedCell>
              ),
              emails: (
                <InProgressCell data-label="emails">
                  <StyledList>
                    <li>
                      <a href="https://github.com/ministrycentered/pco-communication">
                        <code>pco-communication@2</code>
                      </a>
                    </li>
                    <li>app-specific</li>
                  </StyledList>
                </InProgressCell>
              ),
              bundler: (
                <OutdatedCell data-label="bundler">
                  <StyledList>
                    <li>
                      <a href="https://github.com/rails/webpacker">
                        <code>rails/webpacker</code>
                      </a>
                    </li>
                    <li>
                      <code>sprockets-es6-amd</code>
                    </li>
                  </StyledList>
                </OutdatedCell>
              ),
            },
            {
              name: "resources",
              color: "#963522",
              icons: (
                <InProgressCell data-label="icons">
                  <StyledList>
                    <li>
                      <code>
                        <a
                          href="https://github.com/planningcenter/icons"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @planningcenter/icons@2
                        </a>
                      </code>
                    </li>
                    {outdatedIconSets.map(lib => (
                      <li>
                        <code>{lib}</code>
                      </li>
                    ))}
                  </StyledList>
                </InProgressCell>
              ),
              emails: (
                <OutdatedCell data-label="emails">
                  <code>app-specific</code>
                </OutdatedCell>
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
                      @planningcenter/icons@2
                    </a>
                  </code>
                </td>
              ),
              emails: (
                <td data-label="emails">
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>pco-communication@2</code>
                  </a>
                </td>
              ),
              favicon: (
                <td data-label="favicon">
                  <a href="https://github.com/ministrycentered/pco-communication">
                    <code>interfaces@2</code>
                  </a>
                </td>
              ),
              icon: (
                <td data-label="favicon">
                  <a href="https://github.com/planningcenter/icons">
                    <code>@planningcenter/icons@2</code>
                  </a>
                </td>
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

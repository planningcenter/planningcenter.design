import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import { StaticQuery, graphql } from "gatsby";
import PlanningCenterDesignSVGPath from "../images/planning-center-design.svg";
import "@planningcenter/icons/css/symbol.css";
import "../styles/shared.css";
import "../styles/prism-ghcolors.css";

const TemplateWrapper = ({ children }) => (
  <div style={{ display: "flex", minHeight: "100vh", paddingLeft: 70 }}>
    <Helmet
      title="Planning Center Design"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    {children}
    <img
      src={PlanningCenterDesignSVGPath}
      className="symbol"
      style={{ fontSize: "2rem" }}
      alt="Planning Center Design Icon"
    />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

// export default ({ children }) => (
//   <StaticQuery
//     query= {
//   graphql`
//       query LayoutQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
// render={data => (
//       <>
//         <Helmet titleTemplate= {`%s | ${data.site.siteMetadata.title}` } defaultTitle = { data.site.siteMetadata.title } />
//         <div>
//           { children }
//         </div >
//       </>
//     )}
//   />
// )

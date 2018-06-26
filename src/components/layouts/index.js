import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Nav from "../Nav";
// import { StaticQuery, graphql } from "gatsby";
import "@planningcenter/icons/css/symbol.css";
import "../../styles/shared.css";
import "../../styles/prism-ghcolors.css";

const TemplateWrapper = ({ children }) => (
  <div style={{ display: "flex", minHeight: "100vh", paddingLeft: 70 }}>
    <Helmet
      title="Planning Center Design"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Nav />
    {children}
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

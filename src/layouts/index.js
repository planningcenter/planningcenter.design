import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import "../styles/shared.css";
import "prismjs/themes/prism-coy.css";

const TemplateWrapper = ({ children }) => (
  <div style={{ display: "flex", minHeight: "100vh" }}>
    <Helmet
      title="Planning Center Design"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Nav />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
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
    <Nav />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

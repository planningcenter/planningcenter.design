import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../styles/shared.css";
import "../styles/index.css";


const TemplateWrapper = ({ children }) => (
  <div className="Wrapper" style={{ alignItems: "stretch", display: "flex", minHeight: "100vh" }}>
    <Helmet
      title="Planning Center Design"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Nav/>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

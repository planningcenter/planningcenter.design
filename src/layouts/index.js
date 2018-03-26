import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "../styles/shared.css";
import "../styles/index.css";

const TemplateWrapper = ({ children }) => (
  <div className="Wrapper">
    <Helmet
      title="Planning Center Dot Design"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Header />
    <main className="Main">
      {children()}
    </main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

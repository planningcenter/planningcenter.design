import React from "react";
import { PageList } from "../components/all_site_page_list";

const IndexPage = ({ data }) => (
  <div>
    <h1>Fontend Development</h1>
    <PageList data={data} />
  </div>
);

export default IndexPage;

export const query = graphql`
  query DevelopmentQuery {
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

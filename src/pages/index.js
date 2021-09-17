import React from "react";
import FullIndexPage from "../components/pages/FullIndexPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <FullIndexPage />
    </Layout>
  );
}

export default IndexPage;

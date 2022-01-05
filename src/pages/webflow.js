import React from "react";
import FullWebflowPage from "../components/pages/FullWebflowPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";

function WebflowPage() {
  return (
    <Layout>
      <SEO title="Webflow Docs" />
      <FullWebflowPage />
    </Layout>
  );
}

export default WebflowPage;

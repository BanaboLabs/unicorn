import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";
import FullCareersPage from "../components/pages/FullV2CareersPage";

function WebflowPage() {
  return (
    <Layout>
      <SEO title="Careers" />
      <FullCareersPage />
    </Layout>
  );
}

export default WebflowPage;

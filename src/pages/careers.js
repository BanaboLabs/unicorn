import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";
import FullCareersPage from "../components/pages/FullV2CareersPage";

function CareersPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Careers" />
      <FullCareersPage />
    </Layout>
  );
}

export default CareersPage;

import React from "react";
import FullLandingPage from "../components/pages/FullLandingPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";

function LandingPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Landing" />
      <FullLandingPage />
    </Layout>
  );
}

export default LandingPage;

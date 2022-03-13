import React from "react";
import FullV2SignupPage from "../components/pages/FullV2SignupPage";
import Layout from "../components/layout/layout";
import { Helmet } from "react-helmet";
import SEO from "../components/layout/seo";

function LandingPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Banabo" />
      <FullV2SignupPage />
    </Layout>
  );
}

export default LandingPage;

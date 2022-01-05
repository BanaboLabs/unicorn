import React from "react";
import FullV2SignupPage from "../components/pages/FullV2SignupPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

function LandingPage() {
  return (
    <Layout>
      <SEO />
      <FullV2SignupPage />
    </Layout>
  );
}

export default LandingPage;

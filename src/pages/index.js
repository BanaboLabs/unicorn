import React from "react";
import FullV2SignupPage from "../components/pages/FullV2SignupPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

function LandingPage() {
  return (
    <Layout>
      <SEO title="Banabo" />
      <FullV2SignupPage />
    </Layout>
  );
}

export default LandingPage;

/*
import FullIndexPage from "../components/pages/FullIndexPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import GlobalFonts from "../fonts/fonts";
import { Helmet } from "react-helmet";

function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <GlobalFonts />
      <SEO title="Attribute every growth channel" />
      <FullIndexPage />
    </Layout>
  );
}

export default IndexPage;

*/

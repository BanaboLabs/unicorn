import React from "react";
import Unicorn from "../components/unicorn";
import Layout from "../components/layout/layout";
import { Helmet } from "react-helmet";
import SEO from "../components/layout/seo";

function LandingPage() {
  return (
    <Layout>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Home - Unicorn" />
      <Unicorn />
    </Layout>
  );
}

export default LandingPage;

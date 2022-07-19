import React from "react";
import Unicorn from "../components/unicorn";
import Layout from "../components/layout/layout";
import { Helmet } from "react-helmet";
import SEO from "../components/layout/seo";

function LandingPage() {
  return (
    <Layout>
      <Helmet>
        <script
          type="text/javascript"
          src="https://s3.us-west-1.amazonaws.com/scripts.banabo.io/default.js"
        />
        <script src="https://scripts.banabo.io/index.js"></script>
      </Helmet>
      <SEO title="Home - Unicorn" />
      <Unicorn />
    </Layout>
  );
}

export default LandingPage;

import React from "react";
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
        <script
          defer
          data-domain="banabo.io"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Helmet>
      <GlobalFonts />
      <SEO title="Attribute every growth channel" />
      <FullIndexPage />
    </Layout>
  );
}

export default IndexPage;

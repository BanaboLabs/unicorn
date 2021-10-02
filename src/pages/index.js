import React from "react";
import FullIndexPage from "../components/pages/FullIndexPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import GlobalFonts from "../fonts/fonts";
import { Helmet } from "react-helmet";

function IndexPage() {
  return (
    <Layout>
      <GlobalFonts />
      <SEO title="Home" />
      <FullIndexPage />
    </Layout>
  );
}

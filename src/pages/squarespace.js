import React from "react";
import FullSquarespacePage from "../components/pages/FullSquarespacePage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Helmet } from "react-helmet";

function SquarespacePage() {
  return (
    <Layout>
      <SEO title="Squarespace Docs" />
      <FullSquarespacePage />
    </Layout>
  );
}

export default SquarespacePage;

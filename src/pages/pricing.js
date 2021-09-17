import React from "react";
import FullPricingPage from "../components/pages/FullPricingPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

function PricingPage() {
  return (
    <Layout>
      <SEO title="Pricing" />
      <FullPricingPage />
    </Layout>
  );
}

export default PricingPage;

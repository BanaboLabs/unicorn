import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import FullContactPage from "../components/pages/FullContactPage";

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <FullContactPage />
    </Layout>
  );
}

export default ContactPage;

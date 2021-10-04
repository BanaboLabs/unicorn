import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import FullContactPage from "../components/pages/FullContactPage";
import { Helmet } from "react-helmet";
import FullStory from "react-fullstory";

const ORG_ID = "12ZTK0";

function ContactPage() {
  return (
    <Layout>
      <div className="app">
        <FullStory org={ORG_ID} />
      </div>
      <Helmet>
        <script src="https://engine.banabo.io/embeddable/index.js"></script>
      </Helmet>
      <SEO title="Contact" />
      <FullContactPage />
    </Layout>
  );
}

export default ContactPage;

import React from "react";
import FullSignUpPage from "../components/pages/FullSignUpPage";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

function SignupPage() {
  return (
    <Layout>
      <SEO title="Signup" />
      <FullSignUpPage />
    </Layout>
  );
}

export default SignupPage;

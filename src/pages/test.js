import React from "react";
import Unicorn from "../components/unicorn";
import Layout from "../components/layout/layout";
import { Helmet } from "react-helmet";
import SEO from "../components/layout/seo";
import styled from "styled-components";

function LandingPage() {
  return (
    <Layout>
      <Helmet>
        <script
          src="https://s3.us-west-2.amazonaws.com/dev-scripts.banabo.io/index.js"
          type="text/javascript"
        />
        <script src="https://scripts.banabo.io/index.js"></script>
      </Helmet>
      <SEO title="Home - Unicorn" />
      <Wrapper>
        <Text>1867</Text>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Text = styled.div`
  color: black;
  font-size: 200px;
`;

export default LandingPage;

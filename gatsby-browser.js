import "./static/fonts.css";
import React from "react";
import Layout from "./src/components/layout/layout";
import LandingPage from "./src/pages";

export const wrapPageElement = ({ element }) => (
  <>
    <Layout>{element}</Layout>
  </>
);

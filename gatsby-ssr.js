/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { GlobalStyles } from "./src/components/layout";
import { lightTheme } from "./src/themes";

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={lightTheme}>
    <Normalize />
    <GlobalStyles />
    {element}
  </ThemeProvider>
);

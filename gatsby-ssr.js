/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import { CSSReset } from "";
import { GlobalCSS } from "";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <CSSReset />
      <GlobalCSS />
      {element}
    </>
  );
};

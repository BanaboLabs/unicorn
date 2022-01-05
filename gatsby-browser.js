import "./static/fonts.css";
require("./my-global-styles.css");
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
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

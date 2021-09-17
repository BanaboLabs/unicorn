const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/colinsnyder/Desktop/www/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/colinsnyder/Desktop/www/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/colinsnyder/Desktop/www/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/colinsnyder/Desktop/www/src/pages/index.js"))),
  "component---src-pages-pricing-js": hot(preferDefault(require("/Users/colinsnyder/Desktop/www/src/pages/pricing.js"))),
  "component---src-pages-signup-js": hot(preferDefault(require("/Users/colinsnyder/Desktop/www/src/pages/signup.js")))
}


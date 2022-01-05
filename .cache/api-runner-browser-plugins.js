module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-styled-components/gatsby-browser.js'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby starter default","short_name":"starter","start_url":"/","icon":"./src/images/banabologowhite.svg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"774b087f751eb9f9f936ef0e036b601e"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

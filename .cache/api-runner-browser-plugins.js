module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby starter default","short_name":"starter","start_url":"/","icon":"./src/images/banabologowhite.svg","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"774b087f751eb9f9f936ef0e036b601e"},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-reveal/gatsby-browser.js'),
      options: {"plugins":[],"threshold":1,"once":true,"disable":false,"selector":"[data-sal]","animateClassName":"sal-animate","disabledClassName":"sal-disabled","rootMargin":"0% 50%","enterEventName":"sal:in","exitEventName":"sal:out"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

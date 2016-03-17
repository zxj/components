'use strict';

module.exports=(function(){
	return [{
        repos: 'https://github.com/vuejs/vuex',
        version: '0.3.0',
        description: 'Flux-inspired Application Architecture for Vue.js.',
        name: "vuex",
        main: "lib/index.js",
        mapping: [
            {
                reg: /^\/dist\/(vue\.js)/,
                release: '$1'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    },{
        extend:'0.3.0',
        version:'0.6.2'
    }]
})();

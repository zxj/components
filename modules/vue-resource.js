'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/vuejs/vue-resource',
        version: '0.1.13',
        description: 'Resource component for Vue.js',
        name: 'vue-resource',
        main: 'vue-resource.js',
        dependencies: [
            "vue@>=0.12.0"
        ],
        mapping: [
            {
                reg: /^\/dist\/(vue-resource\.js)/,
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
        version: '0.1.15',
        extend: '0.1.13'
    },{
        version: '0.1.17',
        extend: '0.1.13'
    },{
        version: '0.7.0',
        extend: '0.1.17'
    }]
})();

/**
 * Template for building module compatible with AMD(RequireJS), CommonJS(node.js) and browser global(window).
 * https://github.com/amobiz/commonamd.js
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 2014-09-20
 */
(function(module) {
    'use strict';

    module('MyModule')
    .require('Promise')
    .define(function(Promise) {
        return {
        };
    });

})(function(name) {
    'use strict';

    /* global define, require, module, window */
    var deps = [];

    // AMD(RequireJS)
    if (typeof define === 'function' && define.amd) {
        return {
            require: function(lib) {
                deps.push(lib);
                return this;
            },
            define: function(factory) {
                define(deps, factory);
            },
            run: function(script) {
                require(deps, script);
            }
        };
    }
    // CommonJS(node.js)
    else if (typeof module !== 'undefined' && module.exports) {
        return {
            require: function(lib) {
                deps.push(require(lib));
                return this;
            },
            define: function(factory) {
                module.exports = factory.apply(null, deps);
            },
            run: function(script) {
                script();
            }
        };
    }
    // Browser globals
    else {
        return {
            require: function(lib) {
                deps.push(window[lib]);
                return this;
            },
            define: function(factory) {
                window[name] = factory.apply(null, deps);
            },
            run: function(script) {
                script();
            }
        };
    }
});

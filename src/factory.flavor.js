/**
 * Template for building module compatible with AMD(RequireJS), CommonJS(node.js) and browser global(window).
 * https://github.com/amobiz/commonamd.js
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 2014-09-20
 */
(function(name, /* optional */deps, factory) {
    'use strict';

    /* global define, require, module, window */
    var i;

    // deps is not an array, means the module has no dependencies, and deps is a factory function.
    if (typeof deps === 'function') {
        factory = deps;
        deps = [];
    }

    // AMD(RequireJS)
    if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
    // CommonJS(node.js)
    else if (typeof module !== 'undefined' && module.exports) {
        if (deps.length) {
            for (i = 0; i < deps.length; ++i) {
                deps[i] = require(deps[i]);
            }
        }
        module.exports = factory.apply(null, deps);
    }
    // Browser globals
    else {
        if (deps.length) {
            for (i = 0; i < deps.length; ++i) {
                deps[i] = window[deps[i]];
            }
        }
        window[name] = factory.apply(null, deps);
    }
})('MyModule', ['Promise'], function(Promise) {
    'use strict';

    return {
    };
});

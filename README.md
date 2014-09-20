lazy-umd.js
===========

Template for building module compatible with AMD(RequireJS), CommonJS(node.js) and browser global(window).

Why another UMD (Universal Module Definition) while there is already a great [UMD](https://github.com/umdjs/umd)?

Well, I'm lazy, I don't want to tweak the script loader part every time creating a new module.

Lazy-umd.js comes with two flavors.

1.Factory Flavor

In factory flavor, script loader precedes your module code. Define your module in the factory function.
```
(function(name, deps, factory) {
    // script loader code, don't modify
})('Your-Module-Name-or-Path', ['Dependency', 'AnotherDependency'], function(Dependency, AnotherDependency) {
    // return your module object.
    return {
    };
});
```

2.Builder Flavor

Inspired by [melchior.js](https://github.com/voronianski/melchior.js), a chainable module definition (CMD) dependency loader for JavaScript.

In builder flavor, your module precedes script loader. Use the providing `module` builder to chain your module definition.
```
(function(module) {
    // define your module here
    module('Your-Module-Name-or-Path')
    .require('Dependency')
    .require('AnotherDependency')
    .define(function(Dependency, AnotherDependency) {
        // return your module object.
        return {
        };
    });
})(function(name) {
    // script loader code, don't modify
});
```

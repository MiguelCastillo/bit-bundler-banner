# bit-bundler-banner

[![Greenkeeper badge](https://badges.greenkeeper.io/MiguelCastillo/bit-bundler-banner.svg)](https://greenkeeper.io/)

Add a banner to your bundles

# Usage

## install
```
$ npm install --save-dev bit-bundler-banner
```

## config

Simple setup passing the string to be added to the bundle to the top.

``` javascript
var Bitbundler = require("bit-bundler");

var bitbundler = new Bitbundler({
  bundler: [
    ["bit-bundler-banner", "/*! bit-bundler-banner. Miguel Castillo. Licensed under MIT */"]
  ]
});
```

You can altenatively pass a function that returns a string to be used as the banner string.

``` javascript
var Bitbundler = require("bit-bundler");

var bitbundler = new Bitbundler({
  bundler: [
    ["bit-bundler-banner", (bundle) => `/*! bit-bundler-banner ${bundle.name}. Miguel Castillo. Licensed under MIT */`]
  ]
});
```

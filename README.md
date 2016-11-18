# bit-bundler-banner
Add a banner to your bundles

# Usage

## install
```
$ npm install --save-dev bit-bundler-banner
```

## config

``` javascript
var Bitbundler = require("bit-bundler");
var banner = require("bit-bundler-banner");

var bitbundler = new Bitbundler({
  bundler: {
    plugins: [
      banner("/*! bit-bundler-banner. Miguel Castillo. Licensed under MIT */")
    ]
  }
});
```

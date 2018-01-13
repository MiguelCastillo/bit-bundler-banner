const combineSourceMap = require("combine-source-map");

function banner(options) {
  function addBanner(bundle) {
    if (!bundle.content) {
      return;
    }
    
    const bannerString = options;
    const newContent = bannerString + "\n" + bundle.content;
    const sm = combineSourceMap
      .create()
      .addFile({
        source: newContent,
        sourceFile: typeof bundle.dest === "string" ? bundle.dest : "_bundle.js",
      }, {
        line: bannerString.split("\n").length
      });

    return bundle.setContent(combineSourceMap.removeComments(newContent) + "\n" + sm.comment());
  }

  function postbundle(bundler, context) {
    return context.updateBundles(addBanner);
  }

  return {
    postbundle: postbundle
  };
}

module.exports = banner;

function banner(options) {
  function configureHeader(bundle) {
    if (bundle) {
      return bundle.setContent(options + bundle.result);
    }
  }

  function postbundle(bundler, context) {
    return context.visitBundles(configureHeader);
  }

  return {
    postbundle: postbundle
  };
}

module.exports = banner;

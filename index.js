function banner(options) {
  function configureHeader(bundle) {
    if (bundle) {
      bundle.result = options + bundle.result;
    }

    return bundle;
  }

  function postbundle(bundler, context) {
    return Object
      .keys(context.shards)
      .reduce(function(context, shardFile) {
        return context.setShard(shardFile, configureHeader(context.shards[shardFile]));
      }, context.setBundle(configureHeader(context.bundle)));
  }

  return {
    postbundle: postbundle
  };
}

module.exports = banner;

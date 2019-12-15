// Adds file loader to the docusarus webpack config
module.exports = function(context, options) {
  return {
    name: "file-loader-webpack-plugin",
    configureWebpack(config, isServer, utils) {
      config.module.rules.push({
        test: /\.(png|jpg)$/,
        loader: "file-loader"
      });
    }
  };
};

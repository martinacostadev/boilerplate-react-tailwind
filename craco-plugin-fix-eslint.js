// Neccesary to remove an eslint warning in CRA 4.x
// https://github.com/gsoft-inc/craco/issues/205

module.exports = {
  overrideCracoConfig: ({ cracoConfig }) => {
    if (typeof cracoConfig.eslint.enable !== "undefined") {
      cracoConfig.disableEslint = !cracoConfig.eslint.enable;
    }
    delete cracoConfig.eslint;
    return cracoConfig;
  },
  overrideWebpackConfig: ({ webpackConfig, cracoConfig }) => {
    if (
      typeof cracoConfig.disableEslint !== "undefined" &&
      cracoConfig.disableEslint === true
    ) {
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (instance) => instance.constructor.name !== "ESLintWebpackPlugin"
      );
    }
    return webpackConfig;
  },
};

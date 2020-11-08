const { POSTCSS_MODES } = require("@craco/craco");
const fixEslint = require("./craco-plugin-fix-eslint");

module.exports = {
  style: {
    postcss: {
      mode: POSTCSS_MODES.file,
    },
  },
  plugins: [
    {
      plugin: fixEslint,
    },
  ],
};

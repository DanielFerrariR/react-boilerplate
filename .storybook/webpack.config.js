const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = async ({ config }) => {
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/fonts"),
          to: "fonts",
        },
      ],
    }),
  );

  return config;
};

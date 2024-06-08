module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  async babel(config) {
    // Workaround as 6.4.19 storybook version isnt loading root babel.config.js file
    const babelConfig = require("../babel.config.js");
    return { ...config, ...babelConfig };
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};

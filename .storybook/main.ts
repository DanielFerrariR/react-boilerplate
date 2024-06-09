import { StorybookConfig } from '@storybook/react-webpack5';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

const webpackConfig = require('../webpack/webpack.config.base')({}, {});
const loaders = require('../webpack/loaders')({}, {});

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          url: false,
        },
      },
    },
    '@storybook/addon-interactions',
  ],
  async webpackFinal(config: any) {
    // Replacing the svg loader
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push(loaders.svgLoader);

    // Adding our path alias
    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpackConfig.resolve.alias,
    };

    // Copying files to the build folder
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../src/fonts'),
            to: 'fonts',
          },
          {
            from: path.resolve(__dirname, '../src/fonts/fonts.css'),
            to: '',
          },
        ],
      }),
    );

    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};

export default config;

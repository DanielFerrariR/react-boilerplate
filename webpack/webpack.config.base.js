const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const fs = require('fs');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevServer = process.env.WEBPACK_DEV_SERVER === 'true';
  const isAnalyze = process.env.IS_ANALYZE === 'true';
  const isCypress = process.env.IS_CYPRESS === 'true';
  const loaders = require('./loaders')(env, argv);

  return {
    entry: {
      index: [path.resolve(__dirname, '../src/index')],
    },
    output: {
      path: path.resolve(__dirname, '../build'),
      filename:
        isProduction && !isAnalyze ? '[name].[contenthash].js' : '[name].js',
      publicPath: '/',
    },
    module: {
      rules: Object.values(loaders),
    },
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, '.env'),
        systemvars: true,
        safe: path.resolve(__dirname, '.env.example'),
      }),
      new webpack.ProvidePlugin({
        // Needed because webpack 5 stopped to add node.js APIs automatically
        Buffer: ['buffer', 'Buffer'],
      }),
      new CleanPlugin.CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'React Boilerplate',
        template: path.resolve(__dirname, '../public/index.html'),
        favicon: path.resolve(__dirname, '../public/favicon.ico'),
        isCypress,
        inject: false,
        preload: `<style>${fs.readFileSync(
          path.resolve(__dirname, '../public/preload.css'),
          'utf-8',
        )}</style>`,
        minify: isProduction && {
          collapseWhitespace: true,
          removeComments: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeTagWhitespace: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../src/fonts'),
            to: 'fonts',
          },
        ].filter(Boolean),
      }),
      isDevServer && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      alias: {
        src: path.resolve(__dirname, '../src'),
        public: path.resolve(__dirname, '../public'),
        test: path.resolve(__dirname, '../test'),
        stories: path.resolve(__dirname, '../stories'),
      },
      // Needed because webpack 5 stopped to add node.js APIs polyfills automatically
      fallback: {
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
        util: require.resolve('util/'),
        buffer: require.resolve('buffer/'),
      },
    },
  };
};

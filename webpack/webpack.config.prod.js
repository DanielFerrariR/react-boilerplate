const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => ({
  ...require('./webpack.config.base')(env, argv),
  plugins: [
    ...require('./webpack.config.base')(env, argv).plugins,
    new CompressionPlugin({
      test: /\.(html|css|js|svg)$/i, // only compress non-binary files
      threshold: 1500, // no need to compress assets < MTU
      algorithm: 'gzip',
      compressionOptions: {
        level: 9, // strongest compression, gzip decompression rate is not affected by this
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-report.html',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'bundle-stats.json',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ].filter(Boolean),
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
});

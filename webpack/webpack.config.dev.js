const path = require('path');

module.exports = (env, argv) => ({
  ...require('./webpack.config.base')(env, argv),
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, '../build'),
    port: 3000,
    client: {
      overlay: false,
    },
  },
  watchOptions: {
    ignored: ['/node_modules/'],
  },
});

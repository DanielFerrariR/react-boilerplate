const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => ({
  ...require('./webpack.config.base')(env, argv),
  mode: 'development',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      systemvars: true,
      safe: path.resolve(__dirname, '.env.example'),
    }),
  ],
});

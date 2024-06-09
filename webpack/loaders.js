const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevServer = process.env.FW_WEBPACK_DEV_SERVER === 'true';

  const jsTsLoader = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [
            isDevServer && require.resolve('react-refresh/babel'),
          ].filter(Boolean),
        },
      },
    ],
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          url: false,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: ['autoprefixer'],
          },
        },
      },
    ],
  };

  const sassLoader = {
    ...cssLoader,
    test: /\.scss$/i,
    use: [
      ...cssLoader.use,
      {
        loader: 'sass-loader',
      },
    ],
  };

  const fileLoader = {
    test: /\.(png|jpg|woff2?)$/,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: 'babel-loader',
      },
      {
        loader: '@svgr/webpack',
        options: {
          babel: false,
          typescript: true,
          icon: true,
        },
      },
    ],
  };

  return { fileLoader, jsTsLoader, cssLoader, sassLoader, svgLoader };
};

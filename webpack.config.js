module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const checkCircularDependencies = process.env.CHECK_CIRCULAR_DEPENDENCIES;

  if (checkCircularDependencies)
    return require('./webpack/webpack.config.circular')(env, argv);

  return isProduction
    ? require('./webpack/webpack.config.prod')(env, argv)
    : require('./webpack/webpack.config.dev')(env, argv);
};

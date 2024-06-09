const CircularDependencyPlugin = require('circular-dependency-plugin');
const fs = require('fs');

module.exports = (env, argv) => {
  const checkCircularDependencies = process.env.CHECK_CIRCULAR_DEPENDENCIES;
  const circularDependencies = [];

  return {
    ...require('./webpack.config.base')(env, argv),
    plugins: [
      ...require('./webpack.config.base')(env, argv).plugins,
      checkCircularDependencies === 'true' &&
        new CircularDependencyPlugin({
          exclude: /node_modules/,
          include: /src/,
          // you can customize onDetected to filter the reports and isolate
          // a few ones for debugging
          // onDetected: ({ paths, compilation }) => {
          //   if (paths.some((path) => path.includes('table'))) {
          //     compilation.errors.push(new Error(paths.join(' -> ')));
          //   }
          // },
          failOnError: false,
          allowAsyncCycles: false,
          cwd: process.cwd(),
        }),
      checkCircularDependencies === 'write' &&
        new CircularDependencyPlugin({
          exclude: /node_modules/,
          include: /src/,
          onDetected: ({ paths }) => {
            circularDependencies.push(paths);
          },
          onEnd: ({ compilation }) => {
            const fileName = 'circularDependencies.json';
            fs.writeFileSync(fileName, JSON.stringify(circularDependencies));
            compilation.warnings.push(
              new Error(
                `compilation: ${circularDependencies.length} circular dependencies saved to ${fileName}`,
              ),
            );
          },
          failOnError: false,
          allowAsyncCycles: false,
          cwd: process.cwd(),
        }),
    ].filter(Boolean),
  };
};

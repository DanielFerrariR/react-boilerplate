module.exports = (api) => {
  const isTest = api.env('test');

  if (isTest) {
    api.cache(() => isTest);
  }

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      [
        '@babel/preset-typescript',
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
    ],
    plugins: [],
    compact: true,
  };
};

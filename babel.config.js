module.exports = (api) => {
  const isTest = api.env('test');
  const isCypress = process.env.IS_CYPRESS === 'true';

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
    plugins: [isCypress && 'istanbul'].filter(Boolean),
    compact: true,
  };
};

const jsRules = {
  'react/function-component-definition': [
    2,
    { namedComponents: 'arrow-function' },
  ],
  'global-require': 'off',
  'import/prefer-default-export': 'off',
  'no-restricted-syntax': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '.storybook/*.*',
        'webpack/**/*.*',
        'test/**/*.*',
        'typings/**/*.*',
        '/*.*',
      ],
    },
  ],
  'import/extensions': [
    'error',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      scss: 'never',
      svg: 'never',
    },
  ],
};

const tsRules = {
  // react
  'react/prop-types': 'off', // Keep disabled for typescript as isnt needed
  'react/require-default-props': 'off', // Best practice is avoid using defaultProps
  '@typescript-eslint/no-non-null-assertion': 'off',
};

const markdownRules = {
  'no-irregular-whitespace': 'off',
};

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: ['jest', 'testing-library'],
  rules: jsRules,
  settings: {
    'import/resolver': {
      node: true,
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  overrides: [
    {
      files: '**/*.+(md|mdx)',
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': false,
        'mdx/language-mapper': {},
      },
      rules: markdownRules,
    },
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
      },
      plugins: [
        'jest',
        '@typescript-eslint',
        'eslint-plugin-tsdoc',
        'testing-library',
      ],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'plugin:testing-library/react',
        'prettier',
      ],
      rules: {
        ...jsRules,
        ...tsRules,
      },
    },
  ],
};

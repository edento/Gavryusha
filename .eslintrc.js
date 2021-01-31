module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
    // "plugin:import/typescript",
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['/node_modules/**', '/build/**'],
  plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': 0,
    // [
    //   'error',
    //   {
    //     // endOfLine: 'auto',
    //   },
    // ],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: 'req|res|next|val' }],
    'react/jsx-wrap-multilines': ['error', { arrow: true, return: true, declaration: true }],
    'global-require': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // Check it out ↓
    'import/no-unresolved': 0,
    ///////////////////////////
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // And this too - React.FC vs not
    'react/prop-types': 0,
    ////////////////////////////////
  },
  overrides: [
    {
      files: ['**/*.ts{,x}'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true, project: './tsconfig.json' },
      // node: {
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
      //   paths: ['src'],
      // },
    },
  },
};

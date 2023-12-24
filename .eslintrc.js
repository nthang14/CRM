module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  extends: ['next/core-web-vitals'],
  plugins: [],
  // add your custom rules here
  rules: {
    indent: ['off'],
    // quotes: [2, 'single'],
    'max-len': [
      'error',
      120,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignorePattern: 'class="',
      },
    ],
    'unicorn/error-message': 'off',
    'prefer-const': [
      'off',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    // 'no-shadow': [
    //   'error',
    //   {
    //     allow: ['state'],
    //   },
    // ],
    // 'no-param-reassign': [
    //   'error',
    //   {
    //     props: false,
    //   },
    // ],
    'prefer-destructuring': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
}
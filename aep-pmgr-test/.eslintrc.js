module.exports = {
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true,
  },
  extends: ['standard', 'plugin:cypress/recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
  plugins: ['cypress'],
}

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    'jest/globals': true
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0
  }
}

module.exports = {
  env: {
    browser: true,
    mocha: true,
    es2021: true,
  },
  extends: ['standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['packages/ss-frontend/src/**'],
  plugins: ['@typescript-eslint'],
  rules: {},
}

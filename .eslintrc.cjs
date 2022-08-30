/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  'prettier/prettier': [
    'error',
    {
      trailingComma: 'es5',
      tabWidth: 2,
      singleQuote: true,
      semi: false,
    },
  ],
}

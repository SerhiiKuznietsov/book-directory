const { configs } = require('@eslint/js');

module.exports = [
  configs.recommended,
  {
    files: ['**/*.js'],
    ignores: ['node_modules/*'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        node: true,
      },
    },
    rules: {
      'no-undef': 'off',
      'no-prototype-builtins': 'off',
    },
  },
];

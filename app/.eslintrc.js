module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
      {
          files: ['*.ts', '*.tsx'],
          parserOptions: {
              project: ['./tsconfig.json'],
          },
      },
  ],
  parser: '@typescript-eslint/parser',
  rules: {
      'prettier/prettier': 0,
      '@typescript-eslint/no-unused-vars': 'off',
      // '@typescript-eslint/no-unused-vars-experimental': 'error',
      semi: ['error', 'never'],
      'no-extra-semi': 2,
      quotes: [1, 'single', { 'avoidEscape': true }],
      'react-native/no-inline-styles': 'off',
  },
}

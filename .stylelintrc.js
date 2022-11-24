module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss', 'stylelint-prettier', 'stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    'order/properties-order': [],
    'prettier/prettier': true,
    'declaration-no-important': true,
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'value-no-vendor-prefix': null,
    'block-no-empty': null,
    'no-empty-source': null,
    'font-family-no-missing-generic-family-keyword': [true, { ignoreFontFamilies: ['Helvetica Neue'] }],
    'custom-property-pattern': [
      '^[A-Za-z][a-z0-9-]*$',
      { resolveNestedSelectors: true, message: 'You should use next pattern /^[A-Za-z][a-z0-9-_]*$/' },
    ],
    'selector-class-pattern': [
      '^[A-Za-z&][a-z0-9-_&.]*$',
      { resolveNestedSelectors: true, message: 'You should use next pattern /^[A-Za-z][a-z0-9-_]*$/' },
    ],
    'max-empty-lines': 1,
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'], ignore: ['after-comment', 'stylelint-commands'] },
    ],
    'comment-whitespace-inside': 'always',
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': true,
        'empty-line-between-groups': true,
      },
    ],
  },
  customSyntax: 'postcss-scss',
};

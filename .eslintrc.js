module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'no-console': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-multi-comp': 'off',
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        'everything-else',
        'render'
      ],
    }],
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'after-props',
      selfClosing: 'after-props'
    }],
    'jsx-a11y/label-has-for': 'off'
  }
};

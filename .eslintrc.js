module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        "next/core-web-vitals"
    ],
    'plugins': [
        'import',
        'react-hooks'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2021,
        'sourceType': 'module'
    },
    'ignorePatterns': [
        'temp.js',
        'node_modules/'
    ],
    'rules': {
        'strict': 0,
        'semi': [2, 'always'],
        'indent': [2, 4],
        'comma-dangle': 2,
        'comma-style': [2, 'last'],
        'comma-spacing': [2, { before: false, after: true }],
        'arrow-spacing': [2, { before: true, after: true }],
        'keyword-spacing': [2, { before: true, after: true }],
        'key-spacing': [1, { mode: 'strict' }],
        'array-bracket-spacing': [2, 'never'],
        'object-curly-spacing': [2, 'always'],
        'computed-property-spacing': [2, 'never'],
        'space-before-function-paren': ['error', 'always'],
        'space-before-blocks': ['error', 'always'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'no-redeclare': 1,
        'no-warning-comments': [1, {
            'terms': ['todo', 'fixme'],
            'location': 'start'
        }],
        'no-multi-spaces': 1,
        'no-trailing-spaces': 1,
        'no-whitespace-before-property': 1,
        'no-debugger': 1,
        'no-extra-semi': 1,
        'no-unused-vars': 1,
        'no-console': 0,
        'no-plusplus': 1,
        'max-depth': [2, 3],
        'max-len': [1, 120],
        'max-lines-per-function': [1, { "max": 150 }],
        'max-params': [1, { "max": 4 }],
        'no-param-reassign': 'off',
        '@next/next/no-img-element': 'off'
    }
};
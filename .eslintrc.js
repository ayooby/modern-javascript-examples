export default {
    'env': {
        'es6': true,
        'browser': true,
        'mocha': true,
        'commonjs': true,
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-var': [
            'error',
        ]
    }
};

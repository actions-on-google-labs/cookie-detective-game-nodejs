// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2018,
		sourceType: 'module',
		// parser: 'babel-eslint',
	},
	env: {
		browser: true,
	},
	extends: [
		'airbnb-base',
		'prettier',
		'plugin:vue/recommended',
		'plugin:vue-types/strongly-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['import', 'prettier', 'vue'],
	settings: {
		'import/resolver': {
			webpack: {
				config: 'build-tools/config/webpack/webpack.conf.base.js',
			},
		},
	},
	rules: {
	  'consistent-return': 0,
		// don't require .vue extension when importing
		'import/extensions': [
			'error',
			'always',
			{
				js: 'never',
				vue: 'never',
				ts: 'never',
			},
		],
		'import/prefer-default-export': 0,
		'import/no-cycle': 0,
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		// allow debugger during development
		'no-debugger': 2,
		'no-console': ['error', { allow: ['debug', 'warn', 'error'] }],
		'no-param-reassign': 0,
		'no-plusplus': 0,
		// only for use with getter-setters
		'no-underscore-dangle': 0,
    'one-var': 0,
		'prettier/prettier': [
			'error',
			{ singleQuote: true, trailingComma: 'all', printWidth: 100, tabWidth: 2, useTabs: true },
		],
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 3,
			},
		],
		'vue/singleline-html-element-content-newline': 'off',
		'@typescript-eslint/explicit-function-return-type': { allowExpressions: true },
		'@typescript-eslint/prefer-interface': false,
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/interface-name-prefix': 'always',
		'@typescript-eslint/no-empty-function': false,
		'@typescript-eslint/no-explicit-any': false,
		'@typescript-eslint/no-inferrable-types': false,
		'@typescript-eslint/no-non-null-assertion': false,
		'@typescript-eslint/explicit-member-accessibility': [
			{ accessibility: 'explicit', overrides: { constructor: 'no-public' } },
		],
		'@typescript-eslint/camelcase': false,
	},
	overrides: [
		{
			files: ['src/**/*.vue'],
			rules: {
				'prettier/prettier': ['off'],
			},
		},
	],
};

module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
	},
	env: {
		browser: true,
	},
	extends: ['airbnb-base', 'prettier'],
	plugins: ['import', 'prettier'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: true,
		},
	},
	rules: {
		// allow dev-dep imports in files in sync-folder
		'import/no-extraneous-dependencies': ['error', { devDependencies: ['./tools/sync/**/*.js'] }],
		'import/extensions': ['error', 'always'],
		'import/no-dynamic-require': 0,
		'global-require': 'off',
		// prettier compatibility
		'max-len': 0,
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'es5',
				printWidth: 100,
				tabWidth: 2,
				useTabs: true,
			},
		],
		'no-underscore-dangle': 0,
		'no-param-reassign': 0,
		'no-plusplus': 0,
		'linebreak-style': 0,
		'consistent-return': 0,
		'no-multi-assign': 0,
		'one-var': 0,
		'no-shadow': 0,
		'no-console': ['error', { allow: ['debug', 'warn', 'error'] }],
		'prefer-destructuring': 0,
	},
};

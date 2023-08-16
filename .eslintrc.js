module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-strongly-recommended',
		'plugin:vue/vue3-recommended',
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			},
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'plugins': [
		'vue',
		'jsdoc'
	],
	'ignorePatterns': ['node_modules/', 'dist/', 'out/', 'build/', 'public/', '.vscode/', '.git/'],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'vue/multi-word-component-names': 0,
		'object-curly-spacing': [
			'error',
			'always'
		],
		'vue/block-order': ['error', {
			'order': [ 'script', 'template', 'style' ]
		}],
		'nonblock-statement-body-position': ['error', 'below'],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
		'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
		'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-unused-vars': ['error', { 'args': 'none' }],
		'no-var': 'error',
		'prefer-const': 'error',
		'prefer-arrow-callback': 'error',
		'curly': ['error', 'multi-or-nest', 'consistent'],
		'jsdoc/check-access': 1, // Recommended
		'jsdoc/check-alignment': 1, // Recommended
		'jsdoc/check-param-names': 1, // Recommended
		'jsdoc/check-property-names': 1, // Recommended
		'jsdoc/check-tag-names': 1, // Recommended
		'jsdoc/check-types': 1, // Recommended
		'jsdoc/check-values': 1, // Recommended
		'jsdoc/empty-tags': 1, // Recommended
		'jsdoc/implements-on-classes': 1, // Recommended
		'jsdoc/multiline-blocks': 1, // Recommended
		'jsdoc/no-multi-asterisks': 1, // Recommended
		'jsdoc/no-undefined-types': 1, // Recommended
		'jsdoc/require-param-description': 1, // Recommended
		'jsdoc/require-param-name': 1, // Recommended
		'jsdoc/require-param-type': 1, // Recommended
		'jsdoc/require-property-description': 1, // Recommended
		'jsdoc/require-property-name': 1, // Recommended
		'jsdoc/require-property-type': 1, // Recommended
		'jsdoc/require-returns-check': 1, // Recommended
		'jsdoc/require-returns-description': 1, // Recommended
		'jsdoc/require-returns-type': 1, // Recommended
		'jsdoc/require-yields': 1, // Recommended
		'jsdoc/require-yields-check': 1, // Recommended
		'jsdoc/tag-lines': 1, // Recommended
		'jsdoc/valid-types': 1 // Recommended
	}
};

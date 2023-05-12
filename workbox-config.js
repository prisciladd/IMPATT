module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{png,json,ico,jpeg,html,txt,css,js}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
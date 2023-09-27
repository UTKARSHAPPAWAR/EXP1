module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,ejs,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
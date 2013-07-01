require.config({
	baseUrl: 'components',

	deps: ['/js/app'],

	paths: {
		text: 'requirejs-plugins/lib/text',
		json: 'requirejs-plugin/src/json',
		handlebars: 'handlebars/handlebars'
	}

	// load non-amd dependencies
	shim: {
		handlebars: {
			exports: 'Handlebars'
		}
	}
});
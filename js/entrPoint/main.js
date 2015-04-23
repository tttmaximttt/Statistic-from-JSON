requirejs.config({
	appName: '',
	//Reosurce root
	baseUrl: './',
	//our paths to lib
	paths: {
		'jQuery': 'bower_components/jquery/dist/jquery',
		'underscore': 'bower_components/underscore/underscore',
		'q': 'bower_components/q/q',
		'knockout':'bower_components/knockout/dist/knockout',
		'provider': 'js/provider/dataProvider'
	},
	//our shims for lib
	shim: {
		'underscore': {
			exports: '_'
		},
		'jQuery': {
			exports: '$'
		},
		'knockout':{
			exports: 'ko'
		},
		'q': {
			exports: 'Q'
		},
		'provider':'dataProvider'
	}
});

//define(function (require,app) {
//	var myApp = require('app');
//});

require(['require','app'], function (require) {
	return require('app');
});

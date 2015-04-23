var path = require('path');

module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		watch: {
			files:['style/style.css'],
			scripts:{
				files: 'js/**/*.js',
				tasks: ['jshint'],
			},
			options: {
				livereload: true,
			}
		},
		express: {
			site: {
				options: {
					port: 9000,
					bases: 'site/testtask'
				}
			}
		},
		connect:{
			server:{
				options:{
					port:8443,
					hostname:'localhost',
					base: '.',
					livereload:true,
					open:{
						target: 'localhost:8443'
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', []);
	grunt.registerTask('server', ['connect','watch']);
};
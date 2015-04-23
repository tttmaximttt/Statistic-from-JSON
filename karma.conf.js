// Karma configuration
// Generated on Tue Jan 13 2015 12:59:17 GMT+0200 (EET
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai', 'sinon-chai'],

    plugins:['karma-requirejs',
      'karma-mocha',
      'karma-chai',
      'karma-sinon-chai',
      'karma-phantomjs-launcher'
    ],
    // list of files / patterns to load in the browser
    files: [
      {pattern: 'bower_components/jquery/dist/jquery.js', included: false},
      {pattern: 'bower_components/knockout/dist/knockout.js', included: false},
      {pattern: 'bower_components/q/q.js', included: false},
      {pattern: 'bower_components/requirejs/require.js', included: false},
      {pattern: 'bower_components/underscore/underscore.js', included: false},
      {pattern: 'js/**/*.js', included: false},
      {pattern: 'users/users.json', included: false},
      {pattern: 'test/*.js', included: false},
      'test-main.js'
    ],

    proxies:  {
      '/users/users.json': 'http://localhost:9876/base/users/users.json'
    },

    // list of files to exclude
    exclude: [
        'js/entrPoint/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};

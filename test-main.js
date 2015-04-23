
var allTestFiles = [];
//console.log('hello')
var TEST_REGEXP = /Spec\.js$/;

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(file);
  }
});
//console.log(allTestFiles);
requirejs.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
  paths: {
    'jQuery': 'bower_components/jquery/dist/jquery',
    'underscore': 'bower_components/underscore/underscore',
    'q': 'bower_components/q/q',
    'knockout':'bower_components/knockout/dist/knockout',
    'provider': 'js/provider/dataProvider'
  },
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
  },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});

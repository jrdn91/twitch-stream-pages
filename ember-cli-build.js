/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets'
      ]
    },
    'ember-math-helpers': {
      only: ['add']
    }
  });

  app.import({
    development: 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    production:  'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
  });

  return app.toTree();
};

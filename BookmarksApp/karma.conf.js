module.exports = function(config) {
  config.set({
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.html',
      'src/**/*.js'
    ],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/**/!(*.spec).js': ['coverage'],
      'src/**/*.html': ['ng-html2js']
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};

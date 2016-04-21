module.exports = function(config) {
  config.set({
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.html',
      'src/**/*.js'
    ],
    reporters: ['spec', 'coverage'],
    specReporter: {
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false,
      showSpecTiming: true
      },
    preprocessors: {
      'src/**/!(*.spec).js': ['coverage'],
      'src/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/'
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};

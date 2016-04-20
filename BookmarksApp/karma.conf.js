module.exports = function(config) {
  config.set({
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: ['src/**/*.spec.js'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/**/!(*.test).js': ['coverage']
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};

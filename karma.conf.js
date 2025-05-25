module.exports = function (config) {
  config.set({
    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'directives/**/*.module.js',
      'main/**/*.module.js',
      '*.module.js',
      'directives/**/*.js',
      'main/**/*.js'
    ],

    exclude: [],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['ChromeHeadlessNoSandbox'],

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--headless',
          '--remote-debugging-port=9222'
        ]
      }
    },

    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: 'test-results',
      outputFile: 'unit-test-results.xml',
      useBrowserName: true
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ]
  });
};

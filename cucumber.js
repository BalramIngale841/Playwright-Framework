module.exports = {
  default: {
    paths: ['features/**/*.feature'],  // ✅ ONLY checkout
    require: [
      'src/steps/**/*.js',
      'src/support/**/*.js'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    publishQuiet: true
  }
};

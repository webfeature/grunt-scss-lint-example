module.exports = {

    scss: ['src/'],
    options: {
        bundleExec: true, // use scss-lint gem installed by bundler
        config: 'config/.scss-lint.yml',
        reporterOutput: 'log/scss-lint-report.xml',
        compact: true,
        maxBuffer: NaN,
        force: true
    }
};

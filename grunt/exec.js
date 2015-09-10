module.exports = function (grunt, options) {
    return {
       ci_scss_lint: {
            cmd: 'bundle exec scss-lint -c config/.scss-lint.yml -r scss_lint_reporter_checkstyle -f Checkstyle -o log/scss_lint_checkstyle.xml src/',
           exitCode: [
               0, 1
           ]
        }
    }
};
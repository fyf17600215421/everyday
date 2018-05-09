const gulp = require("gulp"),
    webserver = require("gulp-webserver");


gulp.task("default", function() {
    gulp.src("src")
        .pipe(webserver({
            port: "3333",
            livereload: true,
            middleware: function(req, res, next) {

                next();
            }
        }))
})
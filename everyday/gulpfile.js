const gulp = require("gulp"),
    webserver = require("gulp-webserver");

const data = require('./src/data/milk.json')

gulp.task("default", function() {
    gulp.src("src")
        .pipe(webserver({
            port: "3333",
            livereload: true,
            middleware: function(req, res, next) {

                if (/\/data/g.test(req.url)) {
                    let milk = JSON.stringify(data);
                    return res.end(milk);
                }
                next();
            }
        }))
})
const gulp = require("gulp"),
    webserver = require("gulp-webserver");

let swiperData = require("./src/data/swiper.json");



gulp.task("default", function() {
    gulp.src("src")
        .pipe(webserver({
            port: "3333",
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url === "/swiper") {
                    res.end(JSON.stringify(swiperData));
                }
                next();
            }
        }))
})
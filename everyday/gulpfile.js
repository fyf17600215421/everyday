const gulp = require("gulp"),
    webserver = require("gulp-webserver");


const data = require('./src/data/milk.json')

let swiperData = require("./src/data/swiper.json");




gulp.task("default", function() {
    gulp.src("src")
        .pipe(webserver({
            port: "3333",
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                if (/\/data/g.test(req.url)) {
                    let milk = JSON.stringify(data);
                    return res.end(milk);
                } else if (req.url === "/swiper") {
                    res.end(JSON.stringify(swiperData));
                }
                next();
            }
        }))
})
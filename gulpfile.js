var gulp = require("gulp"),
	stylus = require("gulp-stylus"),
	autoprefixer = require("gulp-autoprefixer"),
	uglify = require("gulp-uglify"),
	browserSync = require("browser-sync"),
	plumber = require("gulp-plumber");
	;

// FILE SOURCES AND FILE OUTPUTS
var target = {
	stylus_src: "neptuno.styl",
	cssOutput: "dist/css/"
};

/* STYLES TASKS */
gulp.task("styles", function(){
	gulp.src(target.stylus_src)
	.pipe(plumber())
	.pipe(stylus({
		compress: true
	}))
	.pipe(autoprefixer(
		'last 2 version',
		'> 1%',
		'ie 8',
		'ie 9',
		'ios 6',
		'android 4'
	))
	.pipe(gulp.dest(target.cssOutput));
});

/* LIVERELOAD WITH BROWSER-SYNC*/
gulp.task("browserSync", function(){
	browserSync.init(["dist/**/*", "index.html"], {
		server: {
			host: "localhost"
		},
		open: true
	});
});

/* WATCH TASKS */
gulp.task("watch-styles", function(){
	gulp.watch(["styles/**/*.styl"], ["styles"]);
});

gulp.task("default", ["styles", "browserSync", "watch-styles"]);
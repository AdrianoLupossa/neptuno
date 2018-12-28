var gulp = require("gulp");
var stylus = require("gulp-stylus");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var zip = require("gulp-zip");
var del = require("del");

// FILE SOURCES AND FILE OUTPUTS
var target = {
	stylus_src: "neptuno.styl",
	components_src: "styles/_all_components.styl",
	formElements_src: "styles/_all_formElements.styl",
	buildOutput: "build/",
	cssOutput: "dist/css/"
};

/* STYLES TASKS */
function Styles (compress, filename = "neptuno.css") {
	gulp.src(target.stylus_src)
		.pipe(plumber())
		.pipe(stylus({
			compress: compress
		}))
		.pipe(autoprefixer(
			'last 2 version',
			'> 1%',
			'ie 8',
			'ie 9',
			'ios 6',
			'android 4'
		))
		.pipe(rename(filename))
		.pipe(gulp.dest(target.cssOutput));
}
gulp.task("styles", function(){
	Styles(true, "neptuno.min.css");
	Styles(false);
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


// BUILD TASKS
function Components (compress, output_filename) {
	gulp.src(target.components_src)
		.pipe(stylus({
			compress: compress
		}))
		.pipe(plumber())
		.pipe(autoprefixer(
			'last 2 version',
			'> 1%',
			'ie 8',
			'ie 9',
			'ios 6',
			'android 4'
		))
		.pipe(rename(output_filename))
		.pipe(gulp.dest(target.buildOutput))
};

function Compress (output_filename) {
	gulp.src([`build/${output_filename}.min.css`, `build/${output_filename}.css`])
		.pipe(plumber())
		.pipe(zip(`${output_filename}.zip`))
		.pipe(gulp.dest(target.buildOutput))
};

gulp.task("build-components", function(){
	Components(false, "neptuno-components.css");
	Components(true, "neptuno-components.min.css");
});

gulp.task("build-forms", function(){
	Components(false, "neptuno-formElements.css");
	Components(true, "neptuno-formElements.min.css");
});

gulp.task('clean', function () {
  return del([
    "build/neptuno-components.min.css",
    "build/neptuno-components.css",
    "build/neptuno-formElements.min.css",
    "build/neptuno-formElements.css"
  ]);
});

gulp.task("compress-zip", function(){
	Compress("neptuno-components");
	Compress("neptuno-formElements");
	gulp.src(["dist/css/*", "dist/fonts/*"], {base: "dist/"})
		.pipe(zip("neptunocss.zip"))
		.pipe(gulp.dest(target.buildOutput));
	gulp.src(["index.html", "dist/**"], {base: "./"})
		.pipe(zip("neptunocss+docs.zip"))
		.pipe(gulp.dest(target.buildOutput));
});

gulp.task("build", ["build-components", "build-forms"], function(){
	setTimeout(() => { gulp.start("compress-zip") }, 5000);
	setTimeout(() => { gulp.start("clean") }, 6000);
});


// gulp { browser-sync, compile-styles, watch-styles}
// gulp build { neptuno-components.zip[dev, prod], neptuno-formElements.zip[dev, prod], neptunoCSS+docs.zip[dev, prod, docs]}
// gulp dist { htmlmin, app.css min, compressImages}
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var closure = require('gulp-closure-compiler');
var argz = require('yargs').argv;

/*
	if "-p" flag is set while calling gulp, it will build in production mode using google's compiler
	with code minification, tree-shaking and all the other good stuff developers love :) 
*/
gulp.task("default", ["sass"], function(){
	var compileLeveL = argz.p && argz.p === true ? "ADVANCED_OPTIMIZATIONS" : "SIMPLE_OPTIMIZATIONS";

	gulp.src("src/main/**/*.js")
		.pipe(closure({
			compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
			fileName: 'main.js',
			compilerFlags:{
				compilation_level: compileLeveL
			},
			externs: [
			]
		}))
		.pipe(gulp.dest('public/js'))
});

gulp.task("watch", function(){
	gulp.watch(["src/**/*.js"], ["default"])
});

gulp.task("test", function(){
	// return gulp.src('src/test/**/*.js')
	// 	.pipe(jasmine())
})

gulp.task('sass', function () {
	gulp.src('src/main/scss/**/*.scss')
		.pipe(concat('style.scss'))
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('public/resources'));
});

gulp.task('sass:watch', function(){
	gulp.watch(["src/main/scss/**/*.*"], ["sass"])
})
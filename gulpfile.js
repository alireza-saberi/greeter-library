/*
* @Author: Ali
* @Date:   2017-02-15 14:21:53
* @Last Modified by:   Ali
* @Last Modified time: 2017-02-15 19:37:54
*/

var gulp = require('gulp');
var shell = require('gulp-shell');
var ghpages = require('gh-pages');
var path = require('path');
var jsdoc = require('gulp-jsdoc3');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {
  return gulp.src('./greeter.js')
    .pipe(eslint({configFile: 'eslint.json'}))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('doc', function (cb) {
    var config = require('./jsdoc.conf.json');
    gulp.src('./greeter.js', {read: false})
        .pipe(jsdoc(config , cb));
});

gulp.task('publish', ['doc'], function () {
  ghpages.publish(path.join(__dirname, 'out'), console.error);
});

gulp.task('default', ['doc'], function () {
    // This will only run if the lint task is successful...
});
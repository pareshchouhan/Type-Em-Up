var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');


gulp.task('default', function() {
    return gulp.src(['src/**/*.ts', 'src/*.ts'])
        .pipe(tsProject())
        .pipe(gulp.dest('build/'));
});


gulp.task('watch', ['default'], function() {
    gulp.watch(['src/**/*.ts', 'src/*.ts'], ['default']);
});
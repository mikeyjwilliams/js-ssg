const pkg = require('./package.json');
const gulp = require('gulp');
const header = require('gulp-header');
const ts = require('gulp-typescript')
const { resolve } = require('path');


const fs = require('fs');

const banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' * @author <%= pkg.author %>',
  ' **/',
  ''].join('\n');

const path = {
    src: './src',
    dest: './dist'
}

gulp.task('header', () => {
    return gulp.src('./src/js/main.js')
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest('./src/js'));
});

gulp.task('ts-compile', () => {
    return gulp.src('./src/ts/**/*.ts')
        .pipe(ts({
            outFile: 'main.js',
        }))
        .pipe(gulp.dest('./dist/js'));

});

gulp.task('clean:dist', () =>{
    fs.rm(path.dest, { recursive: true }, err =>{
        if (err) {
            throw err
        }
        console.log(`${dir} is deleted!`);
    })



});

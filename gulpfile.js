const gulp = require('gulp')
const gulpless = require('gulp-less')
const postcss = require('gulp-postcss')
const debug = require('gulp-debug')
var csso = require('gulp-csso')
const autoprefixer = require('autoprefixer')
const NpmImportPlugin = require('less-plugin-npm-import')
const { series } = require("gulp");

gulp.task('less', function () {
    const plugins = [autoprefixer()]

    return gulp
        .src('src/themes/*-theme.less')
        .pipe(debug({title: 'Less files:'}))
        .pipe(
            gulpless({
                javascriptEnabled: true,
                plugins: [new NpmImportPlugin({prefix: '~'})],
            }),
        )
        .pipe(postcss(plugins))
        .pipe(
            csso({
                debug: true,
            }),
        )
        .pipe(gulp.dest('./public'))
})
gulp.task('watch', function () {
	gulp.watch('src/themes/*-theme.less', series(['less']));
});

gulp.task('default', series(['less','watch']));

/*
yarn add -D gulp gulp-less gulp-postcss gulp-debug gulp-csso autoprefixer less-plugin-npm-import
npm i -D postcss
npx gulp less
yarn add react-css-theme-switcher
*/
'use strict'

const {task} = require('gulp');

let gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create();



gulp.task("hello", gulp.series(function (){
    console.log('Привіт');
}));

/*less*/
    let to_less = done =>{
        return gulp.src('app/less/**/*.less')
            .pipe(less())
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.stream());
        done();
    };
/*less*/

/*Browser Sync*/
     let browser_sync = done =>{
         browserSync.init({
             server:{
                 baseDir:"./app"
             },
         });
         console.log('Сервер запущен');
         done();
     }
/*Browser Sync*/

/*Watch*/
 let watch = () =>{
     gulp.watch('./app/less/**/*.less', to_less).on('change', browserSync.reload);
     gulp.watch('./app/*html').on('change', browserSync.reload);
     gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
     console.log('Відслідковуються файли активовано');
 }
/*Watch*/



gulp.task('browser-sync', browser_sync);
gulp.task('less', to_less);
gulp.task('watch', gulp.parallel(browser_sync, to_less));



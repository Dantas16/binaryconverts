//Gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
//Create a browser-sync instance - Cria uma instância de browser-sync
var bs = require('browser-sync').create();

//Sass
gulp.task('sass', function(){
    return gulp.src('css/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('css'))
            .pipe(bs.reload({stream: true})); //Reload after sass compilation
});

//Typescript
gulp.task('typescript', function(){
    return tsProject.src()
            .pipe(tsProject())
            .js.pipe(gulp.dest(''));
});

//BrowserSync Server
gulp.task('browser-sync', ['sass'], function(){
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

//Watch all source files changes and reload
gulp.task('watch', ['browser-sync'], function(){
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('*.ts', ['typescript']);
    gulp.watch('*.js').on('change', bs.reload);
    gulp.watch('*.html').on('change', bs.reload);
});
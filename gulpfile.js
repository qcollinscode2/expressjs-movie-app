
// Directory variables.
var cssPath = "public/assets/styles/";
var jsPath = "public/js/";
var jsPath2 = "public/js/es6/";
var minJsPath = 'public/js/min/';
var minCssPath = 'public/styles/min/';
var minImgPath = 'public/img/min/';
var imgPath = "public/img/";
var htmlPath = "views/";

// File variables.
var anyHtmlFile = htmlPath + "**/*.html";
var cssFile = 'mainstyle.css';
var jsFile = 'main.js';
var jsFile2 = 'maines6.js';
var anyJsFile = jsPath + '**/*.js';
var anyJsFile2 = jsPath2 + '**/*.js';
var anyMinJsFile = minJsPath + '**/*.min.js';
var anyCssFile = cssPath + '**/*.css';
var anyImgFile = imgPath + '**/*.*';
var notMinJsFile = '!public/js/**/*.min.js';
var notMinCssFile = '!public/styles/**/*.min.css';
var notMinImgFile = '!public/img/**/*.min.*';

// /////////////////////////////////////
// SASS to CSS Task
// /////////////////////////////////////

// create a task that converts sass files into css files

// /////////////////////////////////////
// Minify CSS Task
// /////////////////////////////////////

// create a task that minifies all css files

gulp.task('minicss', function() {
  gulp.src([anyCssFile, notMinCssFile])
  .pipe(gulpRename({
    suffix: '.min'
  }))
  .pipe(gulpNano())
  .pipe(gulp.dest(minCssPath))
  .pipe(browserSync.stream());
});

// /////////////////////////////////////
// JS5 to JS6 Task
// /////////////////////////////////////

// transpile ES2015 to ES5 using ES2015 preset

gulp.task('es6', function() {
  return gulp.src(jsPath2 + jsFile2)
        .pipe(gulpBabel({
          presets: ['es2015']
        }))
        .pipe(gulpRename({
          basename: 'main'
        }))
        .pipe(gulp.dest(jsPath))
        .pipe(browserSync.stream());
});

// /////////////////////////////////////
// Minify Javascript Task
// /////////////////////////////////////

// create a task that minifies javascript files

gulp.task('minijs', function() {
  gulp.src([anyJsFile, notMinJsFile])
  .pipe(gulpPlumber())
  .pipe(gulpRename({suffix:'.min'}))
  .pipe(gulpUglify())
  .pipe(gulp.dest(minJsPath))
  .pipe(browserSync.stream());
});

// /////////////////////////////////////////
// Minify HTML Task
// /////////////////////////////////////////

// create a task that minifies all html files


// /////////////////////////////////////////
// Minify Image Task
// /////////////////////////////////////////

// create a task that minifies all images

gulp.task('miniimg', function() {
  gulp.src([anyImgFile, notMinImgFile])
  .pipe(gulpPlumber())
  .pipe(gulpCache(gulpImageMin({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  })))
  .pipe(gulpRename({
    suffix: '.min'
  }))
  .pipe(gulp.dest(minImgPath))
  .pipe(browserSync.stream());
});

// /////////////////////////////////////////
// Browser-sync Task
// /////////////////////////////////////////

gulp.task('syncBrowser', function() {
  browserSync.init({
    server: './src',
    notify: false
  });

// add broswerSync.reload to the tasks array to make all browsers reload after tasks are complete.
  gulp.watch([anyJsFile2], ['es6']);
  gulp.watch([anyCssFile, notMinCssFile], ['minicss']);
  gulp.watch([anyJsFile, notMinJsFile], ['minijs']);
  gulp.watch([anyHtmlFile, notMinHtmlFile]).on('change', browserSync.reload);
  gulp.watch([anyImgFile, notMinImgFile], ['miniimg']);
});

// /////////////////////////////////////////
// Default Task
// /////////////////////////////////////////

gulp.task('default', ['minicss', 'es6', 'minijs', 'miniimg', 'syncBrowser']);

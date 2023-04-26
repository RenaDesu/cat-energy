import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
// import terser from 'gulp-terser';
// import squoosh from 'gulp-libsquoosh';
// import svgo from 'gulp-svgmin';
// import svgstore from 'gulp-svgstore';
// // import {deleteSync} from 'del';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', {
      sourcemaps: true
    }) // ищем style.less
    .pipe(plumber()) // обработка ошибок
    .pipe(less()) // style.less -> style.css
    .pipe(postcss([
      autoprefixer(), // style.css[prefix] (кроссбраузерность)
      csso() // style.css[prefix] -> style.css[prefix, min] минифицируем
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('source/css', {
      sourcemaps: '.'
    })) // сохраняем style.css в папку
    .pipe(browser.stream());
}



// // HTML

// const html = () => {
//   return gulp.src('source/*.html')
//     .pipe(htmlmin({
//       collapseWhitespace: true
//     }))
//     .pipe(gulp.dest('build'));
// }

// // Scripts

// const scripts = () => {
//   return gulp.src('source/js/*.js')
//     .pipe(terser())
//     .pipe(gulp.dest('build/js'));
// }

// // Images

// const optimizeImages = () => {
//   return gulp.src('source/img/**/*.{jpg,png}')
//     .pipe(squoosh())
//     .pipe(gulp.dest('build/img'));
// }

// const copyImages = () => {
//   return gulp.src('source/img/**/*.{jpg,png}')
//     .pipe(gulp.dest('build/img'));
// }

// // WebP

// const createWebp = () => {
//   return gulp.src('source/img/**/*.{jpg,png}')
//     .pipe(squoosh({
//       webp: {}
//     }))
//     .pipe(gulp.dest('build/img'));
// }

// // SVG

// const svg = () => {
//   return gulp.src(['source/img/*.svg', '!source/img/icons/*.svg'])
//     .pipe(svgo())
//     .pipe(gulp.dest('build/img'));
// }

// const sprite = () => {
//   return gulp.src('source/img/icons/*.svg')
//     .pipe(svgo())
//     .pipe(svgstore({
//       inlineSvg: true
//     }))
//     .pipe(rename('sprite.svg'))
//     .pipe(gulp.dest('build/img'));
// }

// // Copy

// const copy = (done) => {
//   gulp.src([
//       'source/fonts/*.{woff2,woff}',
//       'source/*.ico',
//       'source/*.webmanifest'
//     ], {
//       base: 'source'
//     })
//     .pipe(gulp.dest('build'))
//   done();
// }

// // Clean

// const clean = () => {
//   return deleteSync(['build/*/']);
// };



// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// // Reload

// const reload = (done) => {
//   browser.reload();
//   done();
// }

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}


// // Build

// export const build = gulp.series(
//   clean,
//   copy,
//   optimizeImages,
//   gulp.parallel(
//     styles,
//     html,
//     scripts,
//     svg,
//     sprite,
//     createWebp
//   ),
// );

export default gulp.series(
  styles, server, watcher
);

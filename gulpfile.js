// 載入 gulp
var gulp = require('gulp'),
		sass = require('gulp-sass');

// 定義名稱為 default 的 gulp 工作
gulp.task('default', ['watch', 'scss']);

gulp.task('scss', function () {
  return gulp.src('./source/scss/**/*.scss') // sass 的來源資料夾
	.pipe(sass(                     // 編譯 sass
			{outputStyle: 'expanded'}     // sass 的輸出格式
		).on('error', sass.logError))
	.pipe(gulp.dest('./public/stylesheets')); // sass 編譯完成後的匯出資料夾
});

gulp.task('watch', function () {
	gulp.watch('scss/**/*.scss', ['styles']);
});

// 載入 gulp
var gulp = require('gulp');
var sass = require('gulp-sass');            // 載入 sass 編譯器
var webserver = require('gulp-webserver');  // 載入 webserver
var del = require('del');                   // 載入刪除指定文件

// 定義名稱為 default 的 gulp 工作
gulp.task('default', ['clean', 'watch', 'webserver']);

// scss 編譯
gulp.task('scss', function () {
  return gulp.src('scss/**/*.scss')   // sass 的來源資料夾
	.pipe(sass({                        // 編譯 sass
		outputStyle: 'expanded'           // sass 的輸出格式
  }).on('error', sass.logError))
	.pipe(gulp.dest('css'));            // sass 編譯完成後的匯出資料夾
});

//刪除指定文件
gulp.task('clean', function () {
  return del(['css']);
});


// webserver
gulp.task('webserver', function() {
  setTimeout(function(){
    gulp.src('./')                   // 預設開啟路徑
      .pipe(webserver({              // 啟動 webserver
        livereload: true,            // Livereload 的功能
        open: false,                 // 是否自動開啟 瀏覽器
        host: '0.0.0.0',             // 如果使用 0.0.0.0 的 ip，還會另外開啟 wifi 等對外網路
        port: 10000,                 // 開放通訊埠
      }));
  }, 1000);
});

//監聽 scss 編譯
gulp.task('watch', function () {
	gulp.watch('scss/**/*.scss', ['scss']);
});

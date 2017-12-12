# Gulp 學習筆記
## 路徑介紹
```
/
├── css                   # 打包後創建的資料夾
│   └── app.css
├── gulpfile.js           # Gulp 腳本檔案
├── html                  # 測試文件打包使用
│   └── unableLogin.html
├── package.json          # 套件管理
└── scss                  # 測試文件打包使用
    ├── _common.scss
    ├── _iforgot.scss
    ├── _notloging.scss
    ├── _search.scss
    ├── _terms.scss
    ├── app.scss
    ├── common
    │   ├── _buttons.scss
    │   ├── _footer.scss
    │   ├── _form.scss
    │   ├── _frame.scss
    │   ├── _header.scss
    │   ├── _normalize.scss
    │   └── _queries.scss
    └── define
        ├── ___mixins.scss
        ├── ___var.scss
        └── __init.scss
```
## 使用套件
+ `gulp-sass` sass 編譯器
+ `gulp-webserver` 前端開發伺服器

## 安裝說明
### 安裝 Gulp
#### 1. **如果先前沒有安裝 Gulp 需先安裝**
```
$ npm install -g gulp
```
#### 2. **如果有套用 Gulp 的專案需在專案下安裝 Gulp 套件**
```
$ npm install --save-dev gulp

//因為此專案有 package.json 所以輸入以下指令即可
$ npm install
```
#### 3. **在專案下的根目錄建立 `gulpfile.js`**
安裝完後在根目錄下創建一個 `gulpfile.js`，之後只要在專案下執行 `gulp` 後，`gulp` 會直接讀取 `gulpfile.js` 檔案去運行。
**預設寫法：**
```
// 引用 Gulp plugin
var gulp = require('gulp');

// 建立預設 Gulp task
gulp.task('default', function () {
    console.log('Hi~Welcome~gulp!!');
});
```
執行 `gulp` 的話會運行 **default** 的任務，除非 **task** 有新增別的任務，且直接執行新增的任務，以此專案為例 `gulp scss`，否則都會執行 **default** 這個任務。
```
$ gulp //執行 default
$ gulp scss //執行 scss 編譯

// Gulp 後的訊息
[22:26:31] Using gulpfile ~/Users/dalice.chu/Desktop/gulp_test/gulpfile.js
[22:26:31] Starting 'default'...
Hi~Welcome~gulp!!
[22:26:31] Finished 'default' after 126 μs
```
## Gulp API 說明
### gulp.task(name, [deps], fn)
+ **說明：**用在定義一個任務，一個 `task` 為一個任務。
+ **name：**任務名稱（必填，所以不能為空）。
+ **deps：**將要依賴的任務全部都包在此。(被依賴的任務需要返回當前任務的事件流)
+ **fn：**該任務調用的套件操作。
```
gulp.task('default', ['watch', 'scss', 'webserver']);

gulp.task('scss', function () {
  return gulp.src('scss/**/*.scss') 
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('css'));
});

```
# gulp 學習筆記
## 路徑介紹
```
/
├── css                   # 打包後創建的資料夾
│   └── app.css
├── gulpfile.js           # gulp 腳本檔案
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
### 安裝 gulp
+ _如果先前沒有安裝 gulp 需先安裝_
```
$ npm install -g gulp
```
+ _如果有套用 gulp 的專案需在專案下安裝 gulp 套件_
```
$ npm install --save-dev gulp
```
+ _在專案下的根目錄建立 `gulpfile.js`_
安裝完後在根目錄下創建一個 `gulpfile.js`，之後只要在專案下執行 `gulp` 後，`gulp` 會直接讀取 `gulpfile.js` 檔案去運行。
```
// 引用 gulp plugin
var gulp = require('gulp');

// 建立預設 gulp task
gulp.task('default', function () {
    console.log('hi~welcome~gulp!!');
});
```
執行 `gulp` 的話會運行 `default` 的任務，除非 `task` 有新增別的任務，且直接執行新增的任務，ex: `$ gulp scss`，否則都會執行 `default`。
```
$ gulp
[22:26:31] Using gulpfile ~/Users/dalice.chu/Desktop/gulp_test/gulpfile.js
[22:26:31] Starting 'default'...
hi~welcome~gulp!!
[22:26:31] Finished 'default' after 126 μs
```
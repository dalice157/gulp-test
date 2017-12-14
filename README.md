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
+ `del` 刪除指定文件

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
#### 4. **執行第一個 Gulp**
執行 `gulp` 的話會預設運行 **default** 的任務，除非 **task** 有新增別的任務，所以先執行預設即可。
```
$ gulp //執行 default

// Gulp 後的訊息
[22:26:31] Using gulpfile ~/Users/dalice.chu/Desktop/gulp_test/gulpfile.js
[22:26:31] Starting 'default'...
Hi~Welcome~gulp!!
[22:26:31] Finished 'default' after 126 μs
```
這現就可看到 gulp 運行的畫面了。
## Gulp API 說明
### gulp.task(name[, deps], fn)
+ **說明**： 創建一個任務，一個 **task** 為一個任務。
+ **name**： 任務名稱。（必填，所以不能為空）
+ **deps**： 將要依賴的任務全部都包在此。（被依賴的任務需要返回當前任務的事件流）
+ **fn**： 該任務調用的套件操作。

### gulp.src(globs[, options])
+ **說明**： 創建的任務並告知要針對哪一個文件路徑。
+ **globs**： 用來匹配文件路徑，可以是一個文件路徑也可以將多個文件路徑組成陣列。（必填，所以不能為空）
+ **options**： 此參數很少應用到，但基本上它有三個參數可以選擇。
> 1 .options.buffer
> 2 .options.read
> 3 .options.base

### gulp.dest(path[, options])
+ **說明**： 處理完後輸出的文件路徑。（輸出的路徑會依 src）
+ **path**： 指定文件輸出路徑，或者定義函數返回文件輸出路徑亦可。（必填，所以不能為空）
+ **options**： 有2個參數cwd、mode。
> 1 .options.cwd
> 2 .options.mode

###### 以下為API說明的範例：
```
gulp.task('default', ['watch', 'scss', 'webserver']);

gulp.task('scss', function () {
  return gulp.src('scss/**/*.scss') 
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('css'));
});
```
### gulp.watch(glob [, opts], tasks) or gulp.watch(glob [, opts, cb])
+ **說明**： 用來監聽文件，文件一修改就會執行指定任務
+ **glob**： 用來匹配文件路徑。（必填，所以不能為空）
+ **opts**： 因很少用，所以略過。
+ **tasks**： 放入需要執行的任務名稱陣列。（必填，所以不能為空）
+ **cb(event)**： 每個文件變化執行 callback function。
###### 以下為 watch 範例：
```
gulp.task('watch', function () {
	gulp.watch('scss/**/*.scss', ['scss']);
});
 
gulp.task('watch2', function () {
    gulp.watch('js/**/*.js', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
```

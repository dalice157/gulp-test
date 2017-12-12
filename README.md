# gulp 學習筆記
## 路徑介紹
```
/
├── css                   # 打包後創建的資料夾
│   └── app.css
├── gulpfile.js           # gulp 腳本檔案
├── html
│   └── unableLogin.html
├── package.json          # 套件管理
└── scss
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
## 安裝說明
### 安裝 gulp
1. 如果先前沒有安裝 gulp 需先安裝
```
$ npm install -g gulp
```
2. 如果有套用 gulp 的專案需在專案下安裝 gulp 套件
```
$ npm install --save-dev gulp
```
3. 在專案下的根目錄建立 `gulpfile.js`

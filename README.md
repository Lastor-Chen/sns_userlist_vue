# 簡易社群名單 Vue版

<img src="./public/preview.jpg" width="400">

成品Demo - [Github Pages](https://lastor-chen.github.io/sns_userlist_vue)

這是一個 Vue.js 練習專案。<br>
將以前練習的無框架前端作品改裝為 Vue 架構，使用線上課程提供的練習用 User API 進行延伸。<br>
([前作連結](https://github.com/Lastor-Chen/sns_user_list))

仿照 Twitter / LinkedIn 等社群平台，將 Users 資源 list 在頁面上。<br>
具有 follow / unfollow，無限下拉分頁等功能。

<br>

|  branch  |   內容    | 
|----------|----------|
| master   | 專案本體   | 
| gh-pages | build佈署 |

## 功能
- 頁面動線
  - 可使用 Find 功能，尋找 Users，拓展人脈
  - 可使用關鍵字搜尋 User name
  - 點擊 User 可顯示詳細情報
  - 可以檢視 Following Users
  - 左上 User config 按鈕，暫定為 Github 連結
- 可切換 Card / List，兩種 view mode
- 可以 Follow / Unfollow 其他 User
- 無限下拉分頁

#### Follow / Unfollow
該 User API 僅提供「GET Users」、「GET User」兩種功能。<br>
所以 Follow / Unfollow 是用 sessionStorage 模擬資料庫手刻出來的效果。

#### 無限下拉分頁
使用 Intersection Observer API 監看特定元件。
頁面資料全數加載完畢後，會移除監看釋放頁面資源。

#### Components 架構
|   頂層  |              |                             |
|---------|--------------|-----------------------------|
| App.vue | Navbar       |                             |
|         | ModeBar      |                             |
|         | Users (main) | Spinner、UserCard、UserList |
|         | Modal        |                             |  

※ Find、Following、Search 三頁共用 Users.vue

## 使用技術
|         |  項目  |   項目  |    項目    |   項目     |
|---------|--------|--------|------------|------------|
| 前端語言 | HTML5  | CSS3   | JavaScript |           |
| 技術概念 | RWD    | MVC    | AJAX       |           |
| 框架套件 | Vue.js | jQuery | axios      | Bootstrap |

<br>

|        | API資訊 |
|--------|--------|
| Users data  | Alpha Camp 教學用 API |
| banner images | [Lorem Picusum](https://picsum.photos/) |

## Installation & 本機端啟動

下載專案
```
$ git clone https://github.com/Lastor-Chen/sns_userlist_vue.git
```

安裝 dependencies
```
$ npm install
```

啟動
```
$ npm run serve
```
<template>
  <div class="container">
    <!-- <p id="content-status" class="text-center">Now loading...</p> -->
    <div id="data-panel" class="row" data-mode="card">
      <!-- user data 放置場 -->
      <div class="card-top col-6 col-lg-4 col-xl-3 mb-4">
        <div class="card">
          <div class="banner">
            <img class="show-modal" src="https://picsum.photos/350/100?random=0" data-toggle="modal" data-target="#modal"
              data-id="492">
          </div>
          <div class="row pt-2">
            <img class="avatar show-modal" src="https://uinames.com/api/photos/male/14.jpg" alt="photo" data-toggle="modal"
              data-target="#modal" data-id="492">
            <button class="btn btn-follow btn-outline-primary" type="button" data-follow="Follow" data-following="Following"
              data-id="492"></button>
          </div>
          <div class="card-body pl-3 pr-3">
            <h5 class="card-title show-modal" data-toggle="modal" data-target="#modal" data-id="492">Jenel</h5>
            <h6 class="card-subtitle mb-2 text-muted">@<span class="show-modal" data-toggle="modal" data-target="#modal"
                data-id="492">jenel90</span></h6>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing......</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.show-modal {
  cursor: pointer;
}

.banner {
  overflow: hidden;
  width: 100%;
  height: 100px;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.avatar {
  max-width: 70px;
  margin-top: calc(-70px/2 - 0.5rem); /* 求出讓avatar能剛好卡一半的位置 */
  max-height: 70px; /* mt是負值會影響到高, 需重設 */
  margin-left: calc(15px + 1rem); /* 與card-body對齊 */
  box-shadow: 0 0 0 5px #fff;
  border-radius: 50%;
}

.btn-follow {
  margin: 0 2rem 0 auto;
  min-width: 85px;
  font-size: 0.8em;
}

.btn-outline-primary::before {
  content: attr(data-follow);  /* 按鈕文字 */
}

.btn-primary::before {
  content: attr(data-following);
}

.card-body {
  padding: 0.6rem;
}

.card-title {
  margin-bottom: 0.3rem;
  display: inline-block; /* 讓按鈕判定框符合文字 */
}

.card-title:hover,
.card-subtitle span:hover {
  text-decoration: underline;
}
</style>
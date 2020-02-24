<template>
  <div class="container mt-3">
    <div class="d-flex align-items-center">
      <!-- list mode toggler -->
      <div id="list-mode" class="nav mr-3">
        <i class="fas fa-th p-1" data-mode="card"></i>
        <i class="fas fa-bars p-1" data-mode="list"></i>
      </div>

      <!-- Search result info -->
      <p id="search-info" class="mb-0 text-muted"></p>
    </div>
  </div>
</template>

<style scoped>
#list-mode i {
  font-size: 1.8rem;
  cursor: pointer;
  text-align: center;

  /* 加入一個透明邊框, 讓active切換時畫面不會抖動 */
  border-radius: 10%;
  border: 1px solid transparent;
}

#list-mode i.fa-bars {
  width: 38.8px;
}
</style>
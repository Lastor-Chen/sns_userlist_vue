<template>
  <div class="container mt-3">
    <div class="d-flex align-items-center">
      <!-- list mode toggler -->
      <div 
        id="list-mode"
        class="nav mr-3"
        @click="toggleMode"
      >
        <i 
          class="fas fa-th p-1"
          :class="{ active: mode === 'card' }"
          data-mode="card"
        ></i>
        <i
          class="fas fa-bars p-1"
          :class="{ active: mode === 'list' }"
          data-mode="list"
        ></i>
      </div>

      <!-- Search result info -->
      <p id="search-info" class="mb-0 text-muted" v-if="searchCount">
        共有 {{searchCount}} 筆搜尋結果
      </p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    mode: {
      type: String,
      required: true
    },
    searchCount: {
      type: Number
    }
  },
  methods: {
    toggleMode(e) {
      const selectedMode = $(e.target).attr('data-mode')
      this.$emit('afterToggleMode', selectedMode)
    }
  }
}
</script>

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

#list-mode i.active {
  border: 1px solid #007bff;
}
</style>
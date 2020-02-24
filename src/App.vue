<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar :find-count="findCount"/>

    <!-- mode 切換 & 搜尋提示 -->
    <ModeBar
      :mode="mode"
      @afterToggleMode="afterToggleMode"
    />

    <!-- main content -->
    <main role="main" class="pt-3">
      <router-view 
        :mode="mode"
        @afterFetchUsers="afterFetchUsers"
      />
    </main>

    <!-- Bootstrap Modal -->
    <Modal/>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue'
import ModeBar from './components/ModeBar.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data() {
    return {
      mode: 'card',
      findCount: 0
    }
  },
  components: {
    Navbar,
    ModeBar,
    Modal
  },
  methods: {
    afterToggleMode(selectedMode) {
      this.mode = selectedMode
    },
    afterFetchUsers(count) {
      this.findCount = count
    }
  }
}
</script>
<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar/>

    <!-- mode 切換 & 搜尋提示 -->
    <ModeBar/>

    <!-- main content -->
    <main role="main" class="pt-3">
      <router-view/>
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
  components: {
    Navbar,
    ModeBar,
    Modal
  }
}
</script>
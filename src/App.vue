<template>
  <div id="app">
    <Navbar/>
    <ModeBar/>
    <main role="main" class="pt-3">
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue'
import ModeBar from './components/ModeBar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ModeBar
  }
}
</script>
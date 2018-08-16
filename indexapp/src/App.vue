<template>
  <div id="app">
    <navigator></navigator>
    <div class="container">
      <router-view/>
    </div>
    <footerbar></footerbar>
  </div>
</template>
<script>
import navigator from '@/components/Navigator.vue'
import footerbar from '@/components/FooterBar.vue'
export default {
  components:{
    navigator,
    footerbar
  }
}
</script>

<style>
body{
  background: #f8fafc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
  width: 1400px;
  margin: 0 auto;
}
</style>

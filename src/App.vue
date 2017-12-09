<template>
  <div id="app">
    <mainContent></mainContent>
  </div>
</template>

<script>
import mainContent from '@/components/MainContent'
export default {
  components: {
    mainContent
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>

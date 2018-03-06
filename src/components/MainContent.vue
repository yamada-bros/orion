<template>
  <div class="main-content">

  <drawerMenu></drawerMenu>
  <router-view/>

  </div>
</template>

<script>
import drawerMenu from '@/components/DrawerMenu'

export default {
  name: 'MainContent',
  components: {
    drawerMenu
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="page">

  <header></header>
  <sidebar></sidebar>

  </div>
</template>

<script>
import drawerMenu from '@/components/header'
import drawerMenu from '@/components/sidebar'

export default {
  name: 'page',
  components: {
    header, sidebar
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

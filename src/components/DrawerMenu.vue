<template>
  <div class="page">

  <siteHeader></siteHeader>
  <sideBar></sideBar>

  </div>
</template>

<script>
import siteHeader from '@/components/organization/SiteHeader'
import sideBar from '@/components/organization/SideBar'
import store from '@/store'

export default {
  name: 'DrawerMenu',
  components: {
    siteHeader, sideBar
  },
  data () {
    return {
      msg: '',
    }
  },
  methods: {
    
  },
  computed: {

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

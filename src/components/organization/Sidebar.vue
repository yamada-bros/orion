<template>
  <div class="sidebar" v-bind:class="{active: isOpen}">
    <ul>
        <li><a href="/">TOP</a></li>
        <li><a href="/photo">PHOTO</a></li>
        <li><a href="/movie">MOVIE</a></li>
        <li><a href="/music">MUSIC</a></li>
        <li><a href="/picture">PICTURE</a></li>
    </ul>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'sidebar',
  data () {
    return {
      title: 'orion'
    }
  },
  computed: {
      isOpen: () => store.getters['menu/isOpen']
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
  margin: 10px;
}
a {
  color: #42b983;
}

.sidebar {
    opacity: 0;
}

.active {
    opacity: 1;
}

</style>

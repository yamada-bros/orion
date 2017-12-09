<template>
  <div class="header">
    <a class="menu-trigger" v-on:click="toggleMenu()" v-bind:class="{active: isActive}" href="#">
      <span></span>
      <span></span>
      <span></span>
    </a>
    <p>{{ title }}</p> 
  </div>
</template>

<script>
import types from '../../store/action_type'
import store from '../../store'
export default {
  name: 'Header',
  data () {
    return {
      isActive: false,
      title: 'orion'
    }
  },
  methods: {
    toggleMenu () {
      console.log(this.isActive);
      this.isActive = !this.isActive
      store.dispatch(types.MENU_TOGGLE)
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

.header {
  display: flex;
  align-items: center;
}
.header p {
  margin: 0 auto;
  font-size: 2em;
}

.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 50px;
  height: 44px;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #333;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 20px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}

.menu-trigger.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
.menu-trigger.active span:nth-of-type(2) {
  opacity: 0;
}
.menu-trigger.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(45deg);
  transform: translateY(-20px) rotate(45deg);
}
</style>

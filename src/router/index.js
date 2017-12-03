import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Photo from '@/components/Photo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    }
  ]
})

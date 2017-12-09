import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Photo from '@/components/pages/Photo'
import Picture from '@/components/pages/Picture'
import Movie from '@/components/pages/Movie'
import Music from '@/components/pages/Music'
import SiteHeader from '@/components/organization/SiteHeader'


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
    },
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/organization/siteheader',
      name: 'siteHeader',
      component: SiteHeader
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import About from './views/about/About.vue'
import SuccessCase from './views/case/SuccessCase.vue'
import NewsIndex from './views/news/NewsIndex.vue'
import Class from './views/class/Class.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'class',
      component: Class
    },
    {
      path: '/case',
      name: 'case',
      component: SuccessCase
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/newsindex',
      name: 'newsindex',
      component: NewsIndex
    },
    
  ]
})

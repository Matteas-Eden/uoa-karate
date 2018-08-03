import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Karate from './views/Karate.vue'
import EventsView from './views/EventsView.vue'
import SingleEventView from './views/SingleEventView.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/goju-ryu',
      name: 'goju-ryu',
      component: Karate
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/events/:name',
      name: 'singleEvent',
      component: SingleEventView
    },
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import ChatRoom from '../views/ChatRoom'
import ChatDemo from '../views/ChatDemo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/chat-room/:username',
    name: 'ChatRoom',
    component: ChatRoom
  },
  {
    path: '/chat-demo',
    name: 'ChatDemo',
    component: ChatDemo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/*',
    name: 'e404',
    component: () => import('../views/e404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import ChatRoom from '../views/ChatRoom'
import Sign from '../views/Sign'

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
    path: '/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/about',
    name: 'About',
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

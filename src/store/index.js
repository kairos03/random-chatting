import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import socket from './modules/socket'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    users,
    socket
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
})

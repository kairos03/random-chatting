import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import error from './error'
import vuetify from './plugins/vuetify'
import './plugins/socket'
import './plugins/directives'
import './plugins/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  error,
  render: h => h(App)
}).$mount('#app')

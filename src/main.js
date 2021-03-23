import Vue from 'vue'
import App from './App.vue'
import store from './common/store/index'
import vuetify from './common/lib/vuetify'
import { router } from './common/router/routes'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

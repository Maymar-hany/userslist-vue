import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import '../node_modules/bulma/css/bulma.css'
import { store } from './store/store'
import Toasted from 'vue-toasted'
Vue.use(Toasted)
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  store,
  router,

  render: h => h(App)
}).$mount('#app')

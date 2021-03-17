import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'

import '../node_modules/bulma/css/bulma.css';



Vue.use(VueResource);
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
 routes:Routes,
 mode: 'history'
});
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
        next({
            path: '/',
            params: { nextUrl: to.fullPath }
        })
      }else{
        next()
      }
} else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('token') == null){
      next()
    }
    else{
        next({ name:'users'})
    }
}else {
    next()
}
})
new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Userlist from '../components/UserList.vue'
import Login from '../components/Login.vue'
import Profile from '../components/Profile.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/users',
    name: 'users',
    meta: {
      requiresAuth: true
    },
    component: Userlist
  },
  {
    path: '/',
    name: 'Login',
    meta: {
      guest: true
    },
    component: Login
  },
  {
    path: '/userprofile/:id',
    meta: {
      requiresAuth: true
    },
    component: Profile
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('token') == null) {
      next()
    } else {
      next({ name: 'users' })
    }
  } else {
    next()
  }
})

export default router

import Vue from 'vue'
import firebase from '@/firebase/init'
import Router from 'vue-router'
import store from '@/store/index'

import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import AddProducts from './components/AddProducts'
import InventoryList from './components/InventoryList'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { 
        requiresAuth: true,
        layout: 'LayoutMain'
      }
    },
    {
      path: '/addProducts',
      name: 'addProducts',
      component: AddProducts,
      meta: {
        requiresAuth: true,
        layout: 'LayoutMain'
      }
    },
    {
      path: '/inventoryList',
      name: 'inventoryList',
      component: InventoryList,
      meta: {
        requiresAuth: true,
        layout: 'LayoutMain'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { 
        public : true,
        layout: 'default'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: {
        public: true,
        layout: 'default'
      }
    },
    { // Always leave this as last one
      path: '*',
      component: () => import('./views/404')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authReq = to.matched.some((record) => record.meta.requiresAuth)
  const loggedIn = store.getters.isLoggedIn
  if (authReq && !loggedIn) {
    next('/login')
  } else if(to.matched.some((record) => record.meta.public)){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next(false)
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router;

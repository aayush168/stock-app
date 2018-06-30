import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import companyProfile from './modules/company-profile'

import firebase from "../firebase/init"

Vue.use(Vuex)
Vue.use(firebase)

const store = new Vuex.Store({
  modules: {
    auth,
    companyProfile
  }
})

export default store

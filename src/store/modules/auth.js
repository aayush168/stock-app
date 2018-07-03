import firebase from "@/firebase/init";
import db from "@/firebase/db";
import router from "@/router";

function initialState() {
  return {
    user: {},
    isLoggedIn: false,
    pending: false
  }
}
const state = {
  ...initialState()
}

const getters = {
  pending: state => state.pending,
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
}

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  },
  clearUserData(state) {
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },
}

const actions = {
  login({commit}, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(err => {
    })
  },
  logout({ commit }) {
    firebase.auth().signOut().then(() => {
      commit('clearUserData')
      router.push('/login')
    })
  },
  async googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
  signUp({ commit,state }, payload) {
    state.pending = true
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(res => {
      state.pending = false
    }).catch(err => {
      state.pending = false      
      throw err
    })
  }
}

const auth = {
  state,
  getters,
  mutations,
  actions
};

export default auth;
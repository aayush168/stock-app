import firebase from "@/firebase/init";
import db from "@/firebase/db";
import router from "@/router";

function initialState() {
  return {
    user: {},
    isLoggedIn: false,
    pendingLogin: false,
    pendingSignup: false,
    pendingGoogle: false
  }
}
const state = {
  ...initialState()
}

const getters = {
  pendingLogin: state => state.pendingLogin,
  pendingSignUp: state => state.pendingSignup,
  pendingGoogle: state => state.pendingGoogle,
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
  async login({commit}, payload) {
    state.pendingLogin = true
    try {
      await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      state.pendingLogin = false
    } catch(err) {
      state.pendingLogin = false
      throw err
    }
  },
  logout({ commit }) {
    firebase.auth().signOut().then(() => {
      commit('clearUserData')
      router.push('/login')
    })
  },
  async googleLogin() {
    state.pendingGoogle = true
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      state.pendingGoogle = false
    } catch (err) {
      state.pendingGoogle = false      
      throw err
    }
  },
  signUp({ commit,state }, payload) {
    state.pendingSignup = true
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(res => {
      state.pendingSignup = false
    }).catch(err => {
      state.pendingSignup = false      
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
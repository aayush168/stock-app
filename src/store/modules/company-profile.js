import db from "@/firebase/db";

function initialState() {
  return {
    profile: {}
  }
}
const state = {
  ...initialState()
}

const getters = {
  profile: state => state.profile,
}

const mutations = {
  clearUserData(state) {
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },
}

const actions = {
  createCompanyProfile(context, payload) {
    db.collection('users').doc(context.rootState.auth.user.id).collection('company-profile').doc(payload.companyName).set(payload);    
  }
}

const companyProfile = {
  state,
  getters,
  mutations,
  actions
};

export default companyProfile;
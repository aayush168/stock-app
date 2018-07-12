import db from "@/firebase/db";

function initialState() {
  return {
    productLists: []
  }
}
const state = {
  ...initialState()
}

const getters = {
  productLists: state => state.productLists
}

const mutations = {
  clearData(state) {
    const s = initialState();
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },
}

const actions = {
  setProduct(context, payload) {
    var databaseRef = db.collection('company').doc(context.rootState.auth.user.id)
    databaseRef.collection('products').doc(payload.name).set(payload).then(docSnapshot => {
      console.log(docSnapshot)
    }).catch(err => {
      console.log(err)
    })
  },
  getProducts(context) {
    var databaseRef = db.collection('company').doc(context.rootState.auth.user.id)
    databaseRef.collection('products').get().then(snapshot => {
      snapshot.forEach(doc => {
        context.state.productLists.push(doc.data())
        console.log(doc.id, '=>', doc.data())
      })
    })
  },
  updateProduct(context) {

  }
}

const products = {
  state,
  getters,
  mutations,
  actions
};

export default products;
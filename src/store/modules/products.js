import db from "@/firebase/db";

function initialState() {
  return {
    products: []
  }
}
const state = {
  ...initialState()
}

const getters = {
  products: state => state.products
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
    var getDoc = databaseRef.get().then(doc => {
      console.log(doc.data())
    })
    console.log(getDoc)
  },
  getProducts(context) {
    var products = db.collection('company').doc(context.rootState.auth.user.id).collection('products');
    console.log(products)
  }

}

const products = {
  state,
  getters,
  mutations,
  actions
};

export default products;
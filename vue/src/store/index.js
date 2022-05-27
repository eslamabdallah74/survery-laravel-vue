const { createStore } = require("vuex");

const store = createStore({
  state: {
    user: {
      data: {name: 'zola'},
      token: null,
    }
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {}
})

export default store;


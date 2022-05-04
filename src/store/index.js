import { createStore } from 'vuex'
import patients from './modules/patients.module'
import consults from './modules/consults.module'

export default createStore({
  state() {
    return {}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    patients, consults
  }
})

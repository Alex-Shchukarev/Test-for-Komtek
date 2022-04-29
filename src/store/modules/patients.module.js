import dataBase from '../defaultDataBase'

export default {
    namespaced: true,
    state() {
        return {
            patients: JSON.parse(localStorage.getItem('hospital')) ?? []
        }
    },
    getters: {
        patients(state) {
            return state.patients
        }
    },
    mutations: {
        loadStore(state) {
            localStorage.setItem('hospital', JSON.stringify(dataBase))
        }
        
    },
    actions: {
        loadDefaultStore({commit}) {
            commit('loadStore')
        }
    }
}
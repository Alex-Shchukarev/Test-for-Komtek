import { consultsData } from '../defaultDataBase'

export default {
    namespaced: true,
    state() {
        return {
            consults: JSON.parse(localStorage.getItem('consults')) ?? []
        }
    },
    getters: {
        consults(state) {
            return state.consults
        },
        consultsPatient(_, getters) {
            const result = {}
            getters.consults.forEach(c => result[ c.patientId ] = c)
            return result
        }
    },
    mutations: {
        load(state) {
            localStorage.setItem('consults', JSON.stringify(consultsData))
            state.consults = JSON.parse(localStorage.getItem('consults'))
        },
        addConsult(state, consult) {
            const consultsPatient = state.consults.find(c => c.patientId == consult.id).patientConsults
            const idx = consultsPatient[consultsPatient.length-1].id + 1
            consultsPatient.push({...consult, id: idx})
            localStorage.setItem('consults', JSON.stringify(state.consults))
        },
        deleteConsult(state, payload) {
            const idx = state.consults.find(c => c.patientId === payload.patientId)
                        .patientConsults.findIndex(c => c.id === payload.consultId)
            payload.patientConsults.splice(idx, 1)
            localStorage.setItem('consults', JSON.stringify(state.consults))
        },
        changeConsult(state, newData) {
            const patientId = String(newData.id)
            const updateForConsult = state.consults.find(p => p.patientId == patientId[0])
                                        .patientConsults.find(c => c.id === newData.id)
            Object.assign(updateForConsult, newData)
            localStorage.setItem('consults', JSON.stringify(state.consults))
        },
        deletePatientConsults(state, patientId) {
            const idx = state.consults.findIndex(p => p.patientId === patientId)
            state.consults.splice(idx, 1)
            localStorage.setItem('consults', JSON.stringify(state.consults))
        }
        
    },
    actions: {
        loadConsults({commit}) {
            commit('load')
        },
        createConsult({commit}, consult) {
            commit('addConsult', consult)
        },
        removeConsult({commit}, payload) {
            commit('deleteConsult', payload)
        },
        updateConsult({commit}, newData) {
            commit('changeConsult', newData)
        },
        removePatientConsults({commit}, patientId) {
            commit('deletePatientConsults', patientId)
        }
    }
}
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
            getters.consults.forEach(c => result[ c.id ] = c)
            return result
        }
    },
    mutations: {
        load(_) {
            localStorage.setItem('consults', JSON.stringify(consultsData))
        },
        // addPatient(state, patient) {
        //     const idx = state.patients[state.patients.length-1].id + 1
        //     patient = Object.fromEntries(Object.entries(patient).map(([ key, value ]) => [key, value ?? '']))
        //     const fullName = (patient.surname + ' ' + patient.firstName + ' ' + patient.fatherName).trim()
        //     state.patients.push({ ...patient, id: idx, fullName })
        //     localStorage.setItem('hospital', JSON.stringify(state.patients))
        // },
        deleteConsult(state, payload) {
            const idx = state.consults.find(c => c.patientId === payload.consultsPatient.patientId)
                        .patientConsults.findIndex(c => c.id === payload.consultId)
            payload.consultsPatient.patientConsults.splice(idx, 1)
            localStorage.setItem('consults', JSON.stringify(state.consults))
        },
        // changePatient(state, newData) {
        //     const updatedPatient = state.patients.find(p => p.id === newData.id)
        //     Object.assign(updatedPatient, newData)
        //     localStorage.setItem('hospital', JSON.stringify(state.patients))
        //}
        
    },
    actions: {
        loadConsults({commit}) {
            commit('load')
        },
        // createPatient({commit}, patient) {
        //     commit('addPatient', patient)
        // },
        removeConsult({commit}, payload) {
            commit('deleteConsult', payload)
        },
        // updatePatient({commit}, newData) {
        //     commit('changePatient', newData)
        // }
    }
}
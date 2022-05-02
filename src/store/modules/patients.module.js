import store from '..'
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
        },
        patient(_, getters) {
            const result = {}
            getters.patients.forEach(p => result[ p.id ] = p)
            return result
        }
    },
    mutations: {
        loadStore(_) {
            localStorage.setItem('hospital', JSON.stringify(dataBase))
        },
        addPatient(state, patient) {
            const idx = state.patients[state.patients.length-1].id + 1
            const fullName = (patient.surname + ' ' + patient.firstName + ' ' + patient.fatherName).trim()
            state.patients.push({ ...patient, id: idx, fullName })
            localStorage.setItem('hospital', JSON.stringify(state.patients))
        },
        deletePatient(state, id) {
            state.patients = state.patients.filter(p => p.id !== id)
            localStorage.setItem('hospital', JSON.stringify(state.patients))
        },
        changePatient(state, newData) {
            console.log(newData)
        }
        
    },
    actions: {
        loadDefaultStore({commit}) {
            commit('loadStore')
        },
        createPatient({commit}, patient) {
            commit('addPatient', patient)
        },
        removePatient({commit}, id) {
            commit('deletePatient', id)
        },
        updatePatient({commit}, updateData) {
            commit('changePatient', updateData)
        },
        // patientById(_, id) {
        //     const patient = store.getters['patient'](id)
        //     return patient
        // }
    }
}
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
            patient = Object.fromEntries(Object.entries(patient).map(([ key, value ]) => [key, value ?? '']))
            const fullName = (patient.surname + ' ' + patient.firstName + ' ' + patient.fatherName).trim()
            state.patients.push({ ...patient, id: idx, fullName })
            localStorage.setItem('hospital', JSON.stringify(state.patients))
        },
        deletePatient(state, id) {
            state.patients = state.patients.filter(p => p.id !== id)
            localStorage.setItem('hospital', JSON.stringify(state.patients))
        },
        changePatient(state, newData) {
            const updatedPatient = state.patients.find(p => p.id === newData.id)
            Object.assign(updatedPatient, newData)
            localStorage.setItem('hospital', JSON.stringify(state.patients))
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
        updatePatient({commit}, newData) {
            commit('changePatient', newData)
        },
        // patientById(_, id) {
        //     const patient = store.getters['patient'](id)
        //     return patient
        // }
    }
}
<template>
  <app-page title="Пациенты">
    <template #header>
      <button class="btn primary" title="Создать нового пациента" @click="openCreator">Создать</button>
    </template>
    <patient-filter v-model="filter"></patient-filter>
    <patients-table :patients="patients"></patients-table>
    <teleport to="body">
      <the-modal title="Карточка создания нового пациента" v-if="modal" @close="closeCreator">
        <modal-body @created="closeCreator"></modal-body>
      </the-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '../components/ui-elements/AppPage.vue'
import PatientFilter from '../components/ui-elements/PatientFilter.vue'
import PatientsTable from '../components/ui-elements/PatientsTable.vue'
import TheModal from '../components/TheModal.vue'
import ModalBody from '../components/ui-elements/ModalBody.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Home',
  setup() {
    const store = useStore()
    const modal = ref(false)
    const filter = ref({})

    const patients = computed( () => store.getters['patients/patients'].filter( p => {
      if(filter.value.snils) {
        return p.snils.includes(filter.value.snils)
      } return p 
    } )
    .filter( p => {
      if(filter.value.fullName) {
        return p.fullName.includes(filter.value.fullName)
      } return p
    } )
    )
    const openCreator = () => modal.value = true
    const closeCreator = () => modal.value = false


    return { patients, modal, openCreator, closeCreator, filter }
  },
  components: {
    AppPage, PatientFilter, PatientsTable, TheModal, ModalBody
  }
}
</script>

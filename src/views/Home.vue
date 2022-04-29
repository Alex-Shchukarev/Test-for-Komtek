<template>
  <app-page title="Пациенты">
    <template #header>
      <button class="btn primary" title="Создать нового пациента" @click="openCreator">Создать</button>
    </template>
    <patient-filter></patient-filter>
    <patients-table></patients-table>
    <teleport to="body">
      <the-modal title="Карточка создания нового пациента" v-if="modal" @close="closeCreator">
        <modal-body></modal-body>
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
import { ref } from 'vue'
export default {
  name: 'Home',
  setup() {
    const modal = ref(false)
    const openCreator = () => modal.value = true
    const closeCreator = () => modal.value = false

    return { modal, openCreator, closeCreator }
  },
  components: {
    AppPage, PatientFilter, PatientsTable, TheModal, ModalBody
  }
}
</script>

<template>
  <app-page title="Карточка пациента" v-if="patient">
    <template #header>
      <small class="modal-close" @click="closeCard">&times;</small>
    </template>
    <p><strong>Фамилия Имя Отчество</strong>: {{ patient.fullName }}</p>
    <p><strong>Дата рождения:</strong>: {{ new Date(patient.birthday).toLocaleDateString() }}</p>
    <p><strong>Пол</strong>: {{ patient.gender === 'Мужской' ? 'Мужской' : 'Женский' }}</p>
    <p><strong>СНИЛС</strong>: {{ snilsFormatter(patient.snils) }}</p>
    <div class="form-control-mini">
      <p><strong>Вес</strong>: {{ patient.weight }} кг&nbsp;</p>
      <p><strong>Рост</strong>: {{ patient.height }} см&nbsp;</p>
      <p><strong>Возраст</strong>: {{ patient.age }} лет</p>
    </div>
    <hr/>
    <consults-table :consults="consultsPatient"></consults-table>
    <hr/>
    <button class="btn primary" @click="closeCard">Закрыть</button>
  </app-page>
  <h2 class="text-center text-white" v-else>Пациент с такими параметрами не найден</h2>
</template>

<script>
import AppPage from '../components/ui-elements/AppPage.vue'
import ConsultsTable from '../components/ui-elements/ConsultsTable.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { snilsFormatter } from '../utils/snils-formate'
export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id
    const patient = computed(() => store.getters[ 'patients/patient' ])
    const consultsPatient = computed(() => store.getters[ 'consults/consults' ].find(c => c.patientId == id))
    const closeCard = () => router.push('/')

    return { patient: patient.value[ id ], snilsFormatter, closeCard, consultsPatient }
  },
  components: { AppPage, ConsultsTable }
}
</script>

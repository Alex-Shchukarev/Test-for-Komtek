<template>
  <h4 v-if="isClients" class="text-center">Пациенты не найдены</h4>
  <table class="table" v-else>
    <tr>
      <th>{{orderState.direction}}</th>
      <th @click="orderItems(patients, 'fullName')">Ф.И.О.</th>
      <th @click="orderItems(patients, 'birthday')">Дата рождения</th>
      <th @click="orderItems(patients, 'gender')">Пол</th>
      <th @click="orderItems(patients, 'snils')">Снилс</th>
      <th></th>
      <th></th>
    </tr>
    <tbody>
      <tr v-for="patient in patients" :key="patient.id">
        <td>
          <img src="../../assets/edit.svg" title="Редактировать" alt="Редактировать"/>
        </td>
        <td>{{ patient.fullName }}</td>
        <td>{{ new Date(patient.birthday).toLocaleDateString() }}</td>
        <td>{{ patient.gender === 'Мужской' ? 'М' : 'Ж' }}</td>
        <td>{{ snilsFormatter(patient.snils) }}</td>
        <td>
          <router-link v-slot="{ navigate }" custom :to="{ name:'Patient', params: { id: patient.id } }">
            <button class="btn" @click="navigate">Открыть</button>
          </router-link>
        </td>
        <td>
          <img src="../../assets/delete.svg" title="Удалить" alt="Удалить" @click="removePatient(patient.id)"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { snilsFormatter } from '../../utils/snils-formate'
import order from '../../utils/compare-for-sort'
export default {
  props: [ 'patients' ],
  setup(props) {
    const store = useStore()
    const { orderItems, orderState } = order()
    const isClients = computed( () => props.patients.length === 0 )  // проверяем наличие списка пациентов в БД
    const removePatient = id => {                                    // удаляем пациента
      store.dispatch('patients/removePatient', id)
    }
    return { isClients, removePatient, snilsFormatter, orderItems, orderState }
  },
}
</script>
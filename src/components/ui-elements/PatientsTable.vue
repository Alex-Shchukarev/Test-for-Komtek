<template>
  <h4 v-if="isClients" class="text-center">Пациенты не найдены</h4>
  <table class="table" v-else>
    <tr>
      <th></th>
      <th>Ф.И.О.</th>
      <th>Дата рождения</th>
      <th>Пол</th>
      <th>Снилс</th>
      <th></th>
      <th></th>
    </tr>
    <tbody>
      <tr v-for="patient in patients" :key="patient.id">
        <td>
          <img src="../../assets/edit.svg" title="Редактировать" alt="Редактировать"/>
        </td>
        <td>{{ patient.surname }} {{ patient.firstName }} {{ patient.fatherName }}</td>
        <td>{{ new Date(patient.birthday).toLocaleDateString() }}</td>
        <td>{{ patient.gender }}</td>
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
export default {
  props: ['patients'],
  setup(props) {
    const store = useStore()
    const isClients = computed( () => props.patients.length === 0 )
    const removePatient = id => {
      store.dispatch('patients/removePatient', id)
    }
    return { isClients, removePatient, snilsFormatter }
  },
}
</script>
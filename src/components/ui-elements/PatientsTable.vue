<template>
  <h4 v-if="isClients" class="text-center">Пациенты не найдены</h4>
  <table class="table" v-else>
    <tr>
      <th>#</th>
      <th>Ф.И.О.</th>
      <th>Дата рождения</th>
      <th>Пол</th>
      <th>Снилс</th>
      <th>?</th>
      <th>%</th>
    </tr>
    <tbody>
      <tr v-for="client in clients" :key="client.id">
        <td>#</td>
        <td>{{client.surname}} {{client.firstName}} {{client.fatherName}}</td>
        <td>{{client.birthday}}</td>
        <td>{{client.sex}}</td>
        <td>{{client.snils}}</td>
        <td>?</td>
        <td>%</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['clients'],
  setup(props) {
    const isClients = computed( () => props.clients.length === 0 )
    return { isClients }
  },
}
</script>
<template>
    <h4 v-if="!consults" class="text-center">Консультации не найдены</h4>
    <div v-else>
        <div class="card-title">
            <h3>Консультации пациента</h3>
            <button class="btn primary" title="Создать новую консультацию" @click="openCreator">Создать</button>
        </div>
        <table class="table">
            <tr>
                <th></th>
                <th>Дата</th>
                <th>Время</th>
                <th>Симптомы</th>
                <th></th>
            </tr>
            <tbody>
                <tr v-for="consult in consults.patientConsults" :key="consult.id">
                    <td>
                        <img src="../../assets/edit.svg" title="Редактировать" alt="Редактировать" @click="edit(consult.id)"/>
                    </td>
                    <td>{{ new Date(consult.date).toLocaleDateString() }}</td>
                    <td>{{ consult.time }}</td>
                    <td>{{ consult.simptoms }}</td>
                    <td>
                        <img src="../../assets/delete.svg" title="Удалить" alt="Удалить" @click="removeConsult(consult.id)"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
export default {
    props: [ 'consults' ],
    setup(props) {
        const store = useStore()
        const route = useRoute()
        //console.log(props.consults)
        const removeConsult = id => {
            const consult = {
                consultsPatient: props.consults,
                consultId: id,
            }
            store.dispatch('consults/removeConsult', consult)
        }
        watch(props.consults, val => console.log(val))
        //const id = props.id
        // const consultsPatient = computed(() => store.getters[ 'consults/consult' ])
        
        return { removeConsult }
    },
}
</script>
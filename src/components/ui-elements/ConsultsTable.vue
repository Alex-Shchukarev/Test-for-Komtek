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
        <teleport to="body">
            <the-modal title="Карточка создания новой консультации" v-if="modal" @close="closeCreator">
                <modal-body-consult @created="closeCreator"></modal-body-consult>
            </the-modal>
        </teleport>
    </div>
</template>

<script>
import TheModal from '../TheModal.vue'
import ModalBodyConsult from './ModalBodyConsult.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
    props: [ 'consults' ],
    setup(props) {
        const store = useStore()
        const router = useRouter()
        const modal = ref(false)
    
        const openCreator = () => modal.value = true
        const closeCreator = () => modal.value = false 
        const removeConsult = id => {
            const consult = {
                ...props.consults,
                consultId: id,
            }
            store.dispatch('consults/removeConsult', consult)
        }
        const edit = id => router.push(`/editor/consult${id}`)
        
        return { modal, openCreator, closeCreator, removeConsult, edit }
    },
    components: { TheModal, ModalBodyConsult }
}
</script>
<template>
    <app-page title="Редактирование данных консультации">
        <template #header>
            <small class="modal-close" @click="closeEditor">&times;</small>
        </template>
        <form @submit.prevent="submitEditForm">
            <div class="edit-form">
                <p><strong>Дата</strong>: {{ new Date(consult.date).toLocaleDateString() }}&nbsp;</p>
                <div :class="['form-control', { invalid: errorDate }]">
                    <input type="date" id="date" v-model="date" @blur="hbDate" />
                    <small v-if="errorDate">{{ errorDate }}</small>
                </div>
            </div>
            <div class="edit-form">
                <p><strong>Время</strong>: {{ consult.time }}&nbsp;</p>
                <div :class="['form-control', { invalid: errorTime }]">
                    <input type="time" id="time" v-model="time" @blur="hbTime" min="08:00" max="20:00"/>
                    <small v-if="errorTime">{{ errorTime }}</small>
                </div>
            </div>
            <div class="edit-form">
                <p><strong>Симптомы</strong>:&nbsp;</p>
                <div class="form-control">
                    <textarea id="simptoms" v-model.trim="simptoms"></textarea>
                </div>
            </div>
            <button class="btn" type="submit">Обновить</button>
            <button class="btn primary" @click="closeEditor">Закрыть</button>
        </form>
    </app-page>
</template>

<script>
import AppPage from '../components/ui-elements/AppPage.vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { cleanFormat } from '../utils/clean-obj'
import { useEditConsult } from '../use/consult-editor'
export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const id = route.params.id
        const consultsPatient = computed(() => store.getters[ 'consults/consultsPatient' ][id[0]]
                                                .patientConsults.find(c => c.id == id))

        const closeEditor = () => router.push(`/patient/${id[0]}`)
        const submit = values => {
            const updateData = cleanFormat(values)
            store.dispatch('consults/updateConsult', { ...consultsPatient.value, ...updateData })
        }

        return { consult: consultsPatient, closeEditor, ...useEditConsult(submit) }
    },
    components: { AppPage }
}
</script>
<template>
    <app-page title="Редактирование данных пациента">
        <template #header>
            <small class="modal-close" @click="closeEditor">&times;</small>
        </template>
        <form @submit.prevent="submitEditForm">
            <div class="edit-form">
                <p><strong>Фамилия Имя Отчество</strong>: {{ patient.fullName }}&nbsp;</p>
                <div class="form-control">
                    <input type="text" id="fullName" v-model="fullName"/>
                </div>
            </div>
            <div class="edit-form">
                <p><strong>Дата рождения:</strong>: {{ new Date(patient.birthday).toLocaleDateString() }}&nbsp;</p>
                <div :class="[ 'form-control', { invalid: errorBirthday } ]">
                    <input type="date" id="birthday" v-model="birthday" @blur="hbBirthday"/>
                    <small v-if="errorBirthday">{{ errorBirthday }}</small>
                </div>
            </div>
            <div class="edit-form">
                <p><strong>Пол</strong>: {{ patient.gender === 'Мужской' ? 'Мужской' : 'Женский' }}&nbsp;</p>
                <div class="form-control">
                    <select id="gender" v-model="gender">
                    <option value="Мужской">Мужской</option>
                    <option value="Женский">Женский</option>
                </select>
                </div>
            </div>
            <div class="edit-form">
                <p><strong>СНИЛС</strong>: {{ snilsFormatter(patient.snils) }}&nbsp;</p>
                <div :class="[ 'form-control', { invalid: errorSnils } ]">
                    <input type="text" id="snils" v-model="snils" @blur="hbSnils"/>
                    <small v-if="errorSnils">{{ errorSnils }}</small>
                </div>
            </div>
            <div class="edit-form">
                <p><strong>Вес</strong>: {{ patient.weight }} кг&nbsp;</p>
                <div class="form-control">
                    <input type="number" id="weight" v-model.number="weight" min="1" max="200" step="0.1"/>
                </div>
            </div>
            <div class="edit-form">
                <p><strong>Рост</strong>: {{ patient.height }} см&nbsp;</p>
                <div class="form-control">
                    <input type="number" id="height" v-model.number="height" min="20" max="250" step="0.5"/>
                </div>
            </div>
            <div class="edit-form">
                <p><strong>Возраст</strong>: {{ patient.age }} лет&nbsp;</p>
                <div class="form-control">
                    <input type="number" id="age" v-model.number="age" min="0" max="100"/>
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
import { snilsFormatter } from '../utils/snils-formate'
import { cleanFormat } from '../utils/clean-obj'
import { useEditPatient } from '../use/patient-editor'
export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const id = route.params.id
        const patient = computed(() => store.getters[ 'patients/patient' ])

        const closeEditor = () => router.push('/')
        const submit = values => {
            const updateData = cleanFormat(values)
            store.dispatch('patients/updatePatient', { ...patient.value[ id ], ...updateData })
        }

        return { patient: patient.value[ id ], closeEditor, snilsFormatter, ...useEditPatient(submit) }
    },
    components: { AppPage }
}
</script>
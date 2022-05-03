<template>
    <form @submit.prevent="submitForm">
        <div :class="[ 'form-control', { invalid: errorSurname } ]">
            <label for="surname">Фамилия</label>
            <input type="text" id="surname" v-model="surname" @blur="hbSurname"/>
            <small v-if="errorSurname">{{ errorSurname }}</small>
        </div>
        <div :class="[ 'form-control', { invalid: errorFirstName } ]">
            <label for="firstName">Имя</label>
            <input type="text" id="firstName" v-model="firstName" @blur="hbFirstName"/>
            <small v-if="errorFirstName">{{ errorFirstName }}</small>
        </div>
        <div class="form-control">
            <label for="fatherName">Отчество</label>
            <input type="text" id="fatherName" v-model.trim="fatherName"/>
        </div>
        <div :class="[ 'form-control', { invalid: errorBirthday } ]">
            <label for="birthday">Дата рождения</label>
            <input type="date" id="birthday" v-model="birthday" @blur="hbBirthday"/>
            <small v-if="errorBirthday">{{ errorBirthday }}</small>
        </div>
        <div :class="[ 'form-control', { invalid: errorGender } ]">
            <label for="gender">Пол</label>
            <select id="gender" v-model="gender" @blur="hbGender">
                <option value="Мужской">Мужской</option>
                <option value="Женский">Женский</option>
            </select>
            <small v-if="errorGender">{{ errorGender }}</small>
        </div>
        <div :class="[ 'form-control', { invalid: errorSnils } ]">
            <label for="snils">СНИЛС</label>
            <input type="text" id="snils" v-model="snils" @blur="hbSnils"/>
            <small v-if="errorSnils">{{ errorSnils }}</small>
        </div>
        <div class="form-control-mini">
            <div class="form-control">
                <label for="weight">Вес, кг</label>
                <input type="number" id="weight" v-model.number="weight" min="1" max="200" step="0.1"/>
            </div>
            <div class="form-control">
                <label for="height">Рост, см</label>
                <input type="number" id="height" v-model.number="height" min="20" max="250" step="0.5"/>
            </div>
            <div class="form-control">
                <label for="age">Возраст, лет</label>
                <input type="number" id="age" v-model.number="age" min="0" max="100"/>
            </div>
        </div>
        <button class="btn primary" type="submit" :disabled="isSubmitting">Создать</button>
    </form>
</template>

<script>
import { useCreatePatient } from '../../use/patient-creator'
import { useStore } from 'vuex'
export default {
    emits: [ 'created' ],
    setup(_, { emit }) {
        const store = useStore()
        const submit = values => {
            console.log(values)
            store.dispatch('patients/createPatient', values)
            emit('created')
        }
        return { ...useCreatePatient(submit) }
    },
}
</script>
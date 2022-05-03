<template>
    <div class="filter">
        <div class="form-control">
            <input type="text" placeholder="Ф.И.О." v-model="fullName"/>
        </div>
        <div class="form-control">
            <input type="number" placeholder="СНИЛС" v-model="snils"/>
        </div>
        <button class="btn" v-if="isActiveFilter" @click="reset">Сбросить</button>
    </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
export default {
    emits: [ 'update:modelValue' ],
    props: [ 'modelValue' ],
    setup(_, {emit}) {
        const fullName = ref('')
        const snils = ref('')

        const isActiveFilter = computed( () => fullName.value || snils.value) // Если пользователь начал вводить что-то, показываем кнопку сброса
        watch([ fullName, snils ], values => { // наблюдаем за полями ввода, если пользователь начал вводить что-то, то
            emit('update:modelValue', {        // эмитим объект с этими данными 
                fullName: values[0],
                snils: values[1]
            })
        })
        const reset = () => {    // при нажатии очищаем поля ввода и убираем кнопку сброса
            fullName.value = ''
            snils.value = ''
        } 

        return{ fullName, snils, isActiveFilter, reset }
    },
}
</script>
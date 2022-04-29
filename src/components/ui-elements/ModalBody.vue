<template>
    <form @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="surname">Фамилия</label>
            <input type="text" id="surname" v-model="surname"/>
            <small></small>
        </div>
        <div class="form-control">
            <label for="firstName">Имя</label>
            <input type="text" id="firstName" v-model="firstName"/>
            <small></small>
        </div>
        <div class="form-control">
            <label for="fatherName">Отчество</label>
            <input type="text" id="fatherName" v-model="fatherName"/>
        </div>
        <div class="form-control">
            <label for="birthday">Дата рождения</label>
            <input type="date" id="birthday" v-model="birthday"/>
            <small></small>
        </div>
        <div class="form-control">
            <label for="sex">Пол</label>
            <select id="sex" v-model="sex">
                <option selected disabled>Выберите пол</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
            </select>
            <small></small>
        </div>
        <div class="form-control">
            <label for="snils">СНИЛС</label>
            <input type="number" id="snils" v-model="snils"/>
            <small></small>
        </div>
        <button class="btn primary" type="submit">Создать</button>
    </form>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>
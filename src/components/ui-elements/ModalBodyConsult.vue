<template>
  <form @submit.prevent="submitConsultForm">
    <div :class="['form-control', { invalid: errorDate }]">
      <label for="date">Дата</label>
      <input type="date" id="date" v-model="date" @blur="hbDate" />
      <small v-if="errorDate">{{ errorDate }}</small>
    </div>
    <div :class="['form-control', { invalid: errorTime }]">
      <label for="time">Время</label>
      <input type="time" id="time" v-model="time" @blur="hbTime" min="08:00" max="20:00"/>
      <small v-if="errorTime">{{ errorTime }}</small>
    </div>
    <div class="form-control">
      <label for="simptoms">Симптомы</label>
      <textarea id="simptoms" v-model.trim="simptoms"></textarea>
    </div>
    <button class="btn primary" type="submit" :disabled="isSubmitting">
      Создать
    </button>
  </form>
</template>

<script>
import { useCreateConsult } from '../../use/consult-creator'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  emits: [ 'created' ],
  setup(_, { emit }) {
    const store = useStore()
    const route = useRoute()
    const submit = (values) => {
      const newConsult = { ...values, id: route.params.id }
      store.dispatch('consults/createConsult', newConsult)
      emit('created')
    }

    return { ...useCreateConsult(submit) }
  },
}
</script>

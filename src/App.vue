<template>
  <the-header title="Учетная Система Консультаций"></the-header>
  <div class="container">
    <router-view/>
  </div>
  <the-footer contacts="Тестовое задание для организации Комтек"></the-footer>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    onMounted(() => store.dispatch('patients/loadPatients'))
    onMounted(() => store.dispatch('consults/loadConsults'))
  },
  components: { TheHeader, TheFooter }
}
</script>

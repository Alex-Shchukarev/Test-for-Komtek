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
export default {
  setup() {
    
  },
  components: { TheHeader, TheFooter }
}
</script>

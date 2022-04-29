<template>
  <div class="footer">
    {{ contacts }}
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: String,
      required: false,
      default: 'Контактная информация'
    }
  }
}
</script>
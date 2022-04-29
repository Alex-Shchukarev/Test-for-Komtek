<template>
    <div class="header">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: 'Какая-то учетная программа'
        }
    },
    setup() {
        
    },
}
</script>
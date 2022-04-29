<template>
    <div class="modal-backdrop"></div>
    <div class="modal">
        <div class="modal-header">
            <h2>{{ title }}</h2>
            <small class="modal-close" @click="$emit('close')">&times;</small>
        </div>
        <slot/>
    </div>
</template>

<script>
export default {
    emits: ['close'],
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup(props) {
        
    },
}
</script>
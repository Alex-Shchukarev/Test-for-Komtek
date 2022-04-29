<template>
    <div class="card">
        <div class="card-title">
            <h2>{{ title }}</h2>
            <slot name="header"/>
        </div>
        <hr>
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup(props) {
        document.title = `${props.title} | УКС`
    },
}
</script>
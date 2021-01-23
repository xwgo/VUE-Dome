<template>
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '测试VUE'
        }
    },
    methods: {
        btnClick() {
            console.log('点击按钮')
        }
    }
}
</script>

<style>

</style>
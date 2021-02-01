<template>
  <div>
      <h2>我就是个档案信息</h2>
      <p>{{proUser.name}}</p>
      <p>{{proUser.age}}</p>
      <p>{{proUser.sex}}</p>
  </div>
</template>

<script>
export default {
    name: 'profile',
    data() {
        return {

        }
    },
    computed: {
        proUser() {
            return this.$route.query
        }
    }
}
</script>

<style>

</style>
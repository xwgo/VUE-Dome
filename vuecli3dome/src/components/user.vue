<template>
  <div>
      <h2>用户界面User</h2>
      <p>内容。。。。。。。。。。。。</p>
      <h3>{{userId}}</h3>
  </div>
</template>

<script>
export default {
    name: 'user',
    computed: {
      userId() {
        return this.$route.params.name
      }
    }
}
</script>

<style>

</style>
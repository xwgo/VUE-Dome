<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" replace active-class="active">关于</router-link> -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="`/user/${userId}`" replace>我的</router-link>
    <router-link :to="{
      path: '/profile',
      query: {
        name: 'zhangsan',
        age: 35,
        sex: '男'
      }
    }" replace>档案</router-link>
    <router-view></router-view>
    <!-- <button>首页</button>
    <button>关于</button> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
  .active{
    color: #f00;
  }
</style>

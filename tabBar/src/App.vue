<template>
  <div id="app">
    <div class="tab_bar">
      <div class="bar_item">首页</div>
      <div class="bar_item">分类</div>
      <div class="bar_item">购物车</div>
      <div class="bar_item">我的</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import tabBar from './components/tabbar/TabBar'
import tabBarItem from './components/tabbar/tabBarItem'
export default {
  name: 'App',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>
  @import "./assets/css/style.css";
  @import "./assets/css/base.less";
</style>

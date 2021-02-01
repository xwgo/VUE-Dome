<template>
    <div>
        <div class="bar_item" v-for="item in TabBarItem" :key="item.id">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    data() {
        return {
            tabBars: [
                {
                    id: '1',
                    name: '首页',
                    url: '',
                    active: true
                },
                {
                    id: '2',
                    name: '分类',
                    url: '',
                    active: true
                },
                {
                    id: '3',
                    name: '购物车',
                    url: '',
                    active: true
                },
                {
                    id: '4',
                    name: '我的',
                    url: '',
                    active: true
                },
            ]
        }
    }
}
</script>

<style>
    @import "./TabBar.css";
</style>
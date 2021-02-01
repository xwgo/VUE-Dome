import VueRouter from 'vue-router';
import Vue from 'vue';
const home = () => import('../components/home')
const about = () => import('../components/about')
const user = () => import('../components/user')
const homeNews = () => import('../components/homeNews')
const homeMessage = () => import('../components/homeMessage')
const profile = () => import('../components/profile')
//vue.use(插件)  安装插件
Vue.use(VueRouter)

//创建VueRouter
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        children: [
            {
                path: '',
                redirect: '/home/news'
            },
            {
                path: 'news',
                component: homeNews
            },
            {
                path: 'message',
                component: homeMessage
            },
        ]
    },
    {
        path: '/about',
        component: about,
        meta: {
            title: '关于'
        },
        // beforeEach: (() => {
        //     // document.title = to.matched[0].meta.title;
        //     console.log('$$$$$$$$$');
        // })
    },
    {
        path: '/user/:name',
        component: user
    },
    {
        path: '/profile',
        component: profile
    }
];
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})
//将router传到vue实例中


// router.afterEach((to, from) => {
//     console.log('************');
// })
export default router;
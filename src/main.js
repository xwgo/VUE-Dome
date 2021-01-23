import Vue from 'vue';
import {add, mul} from './js/mathUtils';
import styles from './styles/style.css';
import lessStyles from './styles/style.less';
import App from './vue/app'
console.log(add(1, 2));
console.log(add(10, 20));

export const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})

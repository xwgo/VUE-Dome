// import Vue from 'vue';
export const add = (num1, num2) => {
    return num1 + num2
}

export const mul = (num1, num2) => {
    return num1 * num2
}

// const Header = {
//     template: `
//         <div>
//             <h2>{{message}}</h2>
//             <button @click="btnClick">按钮</button>
//         </div>
//     `,
//     data() {
//         return {
//             message: '测试VUE'
//         }
//     },
//     methods: {
//         btnClick() {
//             console.log('点击按钮')
//         }
//     }
// }

// export const app = new Vue({
//     el: '#app',
//     template: '<Header/>',
//     components: {
//         Header
//     }
// })
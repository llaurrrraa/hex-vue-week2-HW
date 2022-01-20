import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp({
    data(){
        return{
            url:'https://vue3-course-api.hexschool.io/v2',
            apiPath:'llaurrrraa-hexschool',
            products:[],
            tempProducts:{}
        }
    },
    methods:{
        adminCheck(){
            axios.post(`${this.url}/api/user/check`)
                .then(res => {
                    this.getProducts();
                })
                .catch(err => {
                    window.location = 'index.html';
                })
        },
        getProducts(){
            axios.get(`${this.url}/api/${this.apiPath}/admin/products`)
                .then(res => {
                    this.products = res.data.products;
                    // console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        showTempProducts(item){
            this.tempProducts = item;
        },
        // 課前影片測試
        addProducts(){
            const newData = {
                data: {
                    "title": "貓貓二號",
                    "category": "cats",
                    "origin_price": 0,
                    "price": 0,
                    "unit": "隻",
                    "description": "貓貓貓貓貓貓貓貓貓貓貓貓貓貓貓貓",
                    "content": "貓貓貓",
                    "is_enabled": 1,
                    "imageUrl": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80ｚ",
                    "imagesUrl": [
                      "https://images.unsplash.com/photo-1494342311068-0acb56cfa61d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                      "https://images.unsplash.com/photo-1615202991324-fa31937b3f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                      
                    ]
                  }
            }
            axios.post(`${this.url}/api/${this.apiPath}/admin/product`,newData)
                .then(res => {
                    // console.log(res);
                    this.getProducts();
                })
                .catch(err => {
                    console.log(err);
                })
        },
        removeProducts(){
            //-MtHUD4SlReEjQXJoZJF
            axios.delete(`${this.url}/api/${this.apiPath}/admin/product/-MtqSBMadvCLQwyDMAok`)
                .then(res=>{
                    this.getProducts();
                })
                .catch(err=>{
                    console.log(err);
                })
        }


    },
    mounted(){
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;

        this.adminCheck();
    }
}).mount('#app');





// createApp({
//     data(){
//         return{
//             apiUrl:'https://vue3-course-api.hexschool.io/v2',
//             apiPath:'llaurrrraa-hexschool',
//             products:[],
//             tempProducts:{},
//         }
//     },
//     methods:{
//         checkAdmin(){
//             const url = `${this.apiUrl}/api/user/check`;
//             axios.post(url)
//                 .then(res => {
//                     this.getData();
//                 })
//                 .catch(err => {
//                     alert(err.data.message);
//                     window.location = 'index.html';
//                 })
//         },
//         getData(){
//             const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
//             axios.get(url)
//                 .then(res => {
//                     this.products = res.data.products;
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 })
//         },
//         showProducts(item){
//             this.tempProducts = item;
//         }

//     },
//     mounted(){
//         // 取得 token ，後面要記得換 cookie 名稱
//         const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
//         // 下次發送 axios 時，token 的內容會直接加到 headers 裡面
//         axios.defaults.headers.common.Authorization = token;

//         this.checkAdmin();
//     }
// }).mount('#app');
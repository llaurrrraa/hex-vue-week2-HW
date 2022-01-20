import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

const url = 'https://vue3-course-api.hexschool.io/v2';
const myPath = 'llaurrrraa-hexschool';
const Swal = SweetAlert;

createApp({
    data(){
        return{
            user:{
                username:'',
                password:''
            },
            text:'Login',

        }
    },
    methods:{
        login(){
            axios.post(`${url}/admin/signin`,this.user)
                .then(res => {
                    const { token, expired } = res.data;
                    document.cookie = `myToken=${ token }; expires=${ new Date(expired) }; `; 
                    window.location = 'products.html';
                })
                .catch(err => {
                    alert('error');
//                     Swal.fire({
//                         title: 'Error!',
//                         text: `${err.data.message}`,
//                         icon: 'error',
//                         confirmButtonText: '返回'
//                       });
                })
        },

    },
}).mount("#app");

import Vue from 'vue';
import Vuelidate from 'vuelidate'
import App from "./App.vue"

// Расширение Vue
Vue.use(Vuelidate);
new Vue(App).$mount('#app');
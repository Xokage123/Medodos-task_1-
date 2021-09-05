import Vue from 'vue';
import Vuelidate from 'vuelidate'
import Multiselect from 'vue-multiselect'
import App from "./App.vue"

// Расширение Vue
Vue.use(Vuelidate);
// Мультисилектор
Vue.component('multiselect', Multiselect);
new Vue(App).$mount('#app');
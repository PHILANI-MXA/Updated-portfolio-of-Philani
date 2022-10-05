import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bootstrap from 'bootstrap';
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(AOS).use(bootstrap).use(store).use(router).mount('#app');

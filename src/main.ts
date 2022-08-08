import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import 'uno.css';
import App from './App.vue';
import router from './router/index';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');

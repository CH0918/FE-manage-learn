import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'uno.css';
// import '@unocss/reset/normalize.css';
// import '@unocss/reset/eric-meyer.css';
import '@unocss/reset/tailwind.css';

import App from './App.vue';
import router from './router/index';

import VConsole from 'vconsole';
const vConsole = new VConsole();
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');

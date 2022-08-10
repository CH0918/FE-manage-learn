import { createRouter, createWebHistory } from 'vue-router';
import loginIndex from '@/views/login/loginIndex.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'loginIndex',
    component: loginIndex,
    // meta: {
    //   title: '首页',
    // },
  },
];
const router = createRouter({ history: createWebHistory(), routes });
// router.beforeEach((to, from) => {
// if (to.meta.title) {
//   document.title = to.meta.title;
// }
// });
export default router;

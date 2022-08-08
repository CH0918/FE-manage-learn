import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/home.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/foo',
    name: 'foo',
    meta: {
      title: 'this is foo',
    },
    component: () => import('@/views/foo.vue'),
  },
];
const router = createRouter({ history: createWebHistory(), routes });
// router.beforeEach((to, from) => {
// if (to.meta.title) {
//   document.title = to.meta.title;
// }
// });
export default router;

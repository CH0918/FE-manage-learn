import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/home.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/foo',
    name: 'foo',
    component: () => import('@/views/foo.vue'),
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;

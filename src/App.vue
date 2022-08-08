<template>
  <div class="app">
    <!-- <routr-link to="foo">跳去foo页面</routr-link> -->
    <!-- <button @click="gotoFoo">点击跳转</button> -->
    <router-link to="/foo" style="margin-right: 20px">foo11</router-link>
    <router-link to="/">首页</router-link>
    <router-view></router-view>
    <!-- <button @click="store.increment()">+1</button> -->
    <button @click="updateCount">改变count</button>
    <div>store: {{ store.count }}</div>
    <div>double count: {{ store.doubleCount }}</div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import loginApi from '@/service/api/login';
import { useStore } from '@/store';
const store = useStore();
// const login = async () => {
//   const res = await loginApi.login({ userName: 'admin', password: 'admin' });
//   if (res.code === 1) {
//     // do something
//   }
// };
const router = useRouter();
const updateCount = () => {
  store.$patch({
    count: 222,
  });
};
console.log('env = ', import.meta.env);
// const gotoFoo = () => {
//   router.push({
//     path: 'foo',
//   });
//   console.log('router = ', router);
// };
</script>
<style scoped lang="scss"></style>

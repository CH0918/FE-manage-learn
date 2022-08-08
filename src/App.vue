<template>
  <div class="app">
    <!-- <routr-link to="foo">跳去foo页面</routr-link> -->
    <!-- <button @click="gotoFoo">点击跳转</button> -->
    <router-link to="/foo" style="margin-right: 20px">foo</router-link>
    <router-link to="/">首页</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const gotoFoo = () => {
  router.push({
    path: 'foo',
    query: {
      id: 1,
    },
  });
};
</script>
<style scoped lang="scss"></style>

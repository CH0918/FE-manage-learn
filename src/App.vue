<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import loginApi from '@/service/api/login';
import { useStore } from '@/store';
</script>
<style scoped lang="scss"></style>

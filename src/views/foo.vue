<template>
  <div class="p-10 border-1">这是foo页面</div>
  <div>foo store: {{ store.count }}</div>
  <div class="flex">
    <div class="w-40 bg-red-300 rounded-full">1</div>
    <div class="w-40 bg-red-300 rounded-lg">2</div>
    <div class="w-40 bg-red-300 rounded-md">3</div>
  </div>
  <button
    class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600"
  >
    Button
  </button>
</template>

<script setup lang="ts">
import { useStore } from '@/store/index';
const store = useStore();
</script>

<style lang="scss" scoped></style>

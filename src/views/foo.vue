<template>
  <div>这是foo页面</div>
  <div>foo store: {{ store.count }}</div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/index';
const store = useStore();
</script>

<style lang="scss" scoped></style>

<script setup lang="ts">
import ProductCard  from './Product/ProductCard.vue';  
defineProps<{
  msg: string
}>()
</script>

<template>
 <div class="grid grid-flow-col grid-rows-4 gap-4">
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
 </div>
</template>

<style scoped>
</style>

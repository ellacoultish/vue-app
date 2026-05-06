<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <ProductCard
      v-for="product in topProductsBySales"
      :key="product.title"
      :title="product.title"
      :image="product.imageUrl"
      :price="product.price"
      :rating="product.rating"
      :sales="product.sales"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import ProductCard from './Product/ProductCard.vue'
import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()
const { topProductsBySales } = storeToRefs(productsStore)

onMounted(() => {
  void productsStore.fetchProducts()
})
</script>

<style scoped></style>

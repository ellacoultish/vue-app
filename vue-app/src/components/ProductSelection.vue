<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
    <ProductCard
      v-for="product in productsStore.topProductsBySales(8)"
      :key="product.title"
      :title="product.title"
      :image="product.imageUrl"
      :price="product.price"
      :rating="product.rating"
      :sales="product.sales"
      :is-in-basket="basketStore.isInBasket(product)"
      @basket-click="basketClick(product)"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ProductCard from './Product/ProductCard.vue'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/stores/products'
import { useBasketStore } from '@/stores/basket'

const productsStore = useProductsStore()
const basketStore = useBasketStore()

onMounted(() => {
  void productsStore.fetchProducts()
})

function basketClick(product: Product) {
  if (!basketStore.isInBasket(product)) {
    basketStore.addToBasket(product)
  } else {
    basketStore.removeFromBasket(product)
  }
}
</script>

<style scoped></style>

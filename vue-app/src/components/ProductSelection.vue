<template>
  <main class="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
    <ProductSelectionHero
      :average-rating="averageRating"
      :formatted-sales="formattedSales"
      :total-products="totalProducts"
    />

    <section
      id="catalog"
      class="mt-8"
    >
      <ProductCatalogHeader :categories="categories" />
      <ProductGrid
        :basket-items="basketItems"
        :products="featuredProducts"
        @basket-click="handleBasketClick"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ProductCatalogHeader from './Product/ProductCatalogHeader.vue'
import ProductGrid from './Product/ProductGrid.vue'
import ProductSelectionHero from './Product/ProductSelectionHero.vue'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/stores/products'
import { useBasketStore } from '@/stores/basket'

const productsStore = useProductsStore()
const basketStore = useBasketStore()
const categories = ['All', 'Home', 'Desk', 'Travel', 'Wellness']

const featuredProducts = computed(() => productsStore.topProductsBySales(8))
const basketItems = computed(() => basketStore.getBasket())
const totalProducts = computed(() => productsStore.products.length)
const averageRating = computed(() => {
  if (productsStore.products.length === 0) {
    return '0.0'
  }

  const totalRating = productsStore.products.reduce(
    (total, product) => total + product.rating,
    0,
  )

  return (totalRating / productsStore.products.length).toFixed(1)
})
const formattedSales = computed(() => {
  const totalSales = productsStore.products.reduce(
    (total, product) => total + product.sales,
    0,
  )

  return new Intl.NumberFormat('en-GB').format(totalSales)
})

onMounted(() => {
  void productsStore.fetchProducts()
})

function handleBasketClick(product: Product) {
  if (!basketStore.isInBasket(product)) {
    basketStore.addToBasket(product)
  } else {
    basketStore.removeFromBasket(product)
  }
}
</script>

<style scoped></style>

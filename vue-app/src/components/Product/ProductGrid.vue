<template>
  <template v-if="isLoading">
    <ProductGridSkeleton />
  </template>

  <template v-else>
    <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <ProductCard
        v-for="product in products"
        :key="product.title"
        :title="product.title"
        :image="product.imageUrl"
        :price="product.price"
        :rating="product.rating"
        :sales="product.sales"
        :is-in-basket="isInBasket(product)"
        @basket-click="emit('basket-click', product)"
      />
    </div>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '@/stores/products'
import ProductCard from './ProductCard.vue'
import ProductGridSkeleton from './ProductGridSkeleton.vue'

const props = defineProps<{
  basketItems: Product[]
  products: Product[]
  isLoading?: boolean
}>()

const emit = defineEmits<{
  (event: 'basket-click', product: Product): void
}>()

const isLoading = computed(() => props.isLoading ?? false)

function isInBasket(product: Product) {
  return props.basketItems.some(
    (basketItem) => basketItem.title === product.title,
  )
}
</script>

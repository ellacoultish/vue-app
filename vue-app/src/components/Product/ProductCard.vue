<template>
  <BaseCard>
    <div >
      <img class="w-full" :alt="title" />
      <h2>{{ title }}</h2>
      <div>
        <div>
          <span>{{ rating }}</span>
          <span>/ 5</span>
        </div>
        <div>£{{ price }}</div>
        <div>{{ sales }} sales</div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../UI/BaseCard.vue'
withDefaults(defineProps<{
  title?: string
  image?: string
  price?: number
  rating?: number
  sales?: number
}>(),   
  {
    title: 'Example product',
    image: '',
    price: 10.99,
    rating: 3,
    sales: 250
  }
)
</script>

<style scoped>
</style>
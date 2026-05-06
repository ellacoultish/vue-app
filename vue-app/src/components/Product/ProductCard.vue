<template>
  <BaseCard>
    <div class="overflow-hidden bg-white border border-gray-100">
      <img
        class="h-48 w-full object-cover"
        :src="image"
        :alt="title"
      />

      <div class="p-4 space-y-3">
        <h2 class="text-lg font-semibold text-gray-900 line-clamp-2">
          {{ title }}
        </h2>

        <div class="flex items-center justify-between text-sm text-gray-600">
          <div class="flex items-center gap-1">
            <span class="font-medium text-gray-900">{{ rating }}</span>
            <span>/ 5</span>
          </div>

          <div class="font-semibold text-gray-900">£{{ price }}</div>
        </div>

        <div class="text-xs text-gray-500">{{ sales }} sales</div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          :disabled="!isInBasket"
          @click="basketClick()"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../UI/BaseCard.vue'

const emit = defineEmits<{
  (event: 'basketclick'): void
}>()

withDefaults(
  defineProps<{
    title?: string
    image?: string
    price?: number
    rating?: number
    sales?: number
    isInBasket?: boolean
  }>(),
  {
    title: 'Example product',
    image: '',
    price: 10.99,
    rating: 3,
    sales: 250,
    isInBasket: false,
  },
)
function basketClick() {
  emit('basketclick')
}
</script>

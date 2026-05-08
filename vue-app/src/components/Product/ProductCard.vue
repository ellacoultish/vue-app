<template>
  <BaseCard animated>
    <div>
      <img
        class="h-48 w-full object-cover"
        :src="image"
        :alt="title"
      />

      <div class="p-4 space-y-3">
        <h2 class="text-lg font-semibold text-ink line-clamp-2">
          {{ title }}
        </h2>

        <div class="flex items-center justify-between text-sm text-ink-subtle">
          <div class="flex items-center gap-1">
            <span class="font-medium text-ink">{{ rating }}</span>
            <span>/ 5</span>
          </div>

          <div class="font-semibold text-ink">£{{ price }}</div>
        </div>

        <div class="text-xs text-ink-muted">{{ sales }} sales</div>
        <BaseButton
          :disabled="isInBasket"
          variant="brand"
          @click="basketClick()"
        >
          {{ isInBasket ? 'In Cart' : 'Add to Cart' }}
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../UI/BaseCard.vue'
import BaseButton from '../UI/BaseButton.vue'

const emit = defineEmits<{
  (event: 'basket-click'): void
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
  emit('basket-click')
}
</script>

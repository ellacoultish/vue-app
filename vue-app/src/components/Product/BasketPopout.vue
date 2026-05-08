<template>
  <BaseCard
    class="absolute right-0 top-full z-20 mt-3 w-80"
    elevation="xl"
  >
    <CartPreview
      title="Basket"
      :items="items"
      compact
      scrollable
      @remove-item="emit('remove-item', $event)"
    >
      <template #header-action>
        <BaseButton
          size="sm"
          type="button"
          variant="ghost"
          @click="emit('close')"
        >
          Close
        </BaseButton>
      </template>

      <template #footer-action>
        <BaseButton
          class="w-full"
          type="button"
          @click="emit('purchase')"
        >
          Purchase
        </BaseButton>
      </template>
    </CartPreview>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Product } from '@/stores/products'
import CartPreview from './CartPreview.vue'
import BaseCard from '../UI/BaseCard.vue'
import BaseButton from '../UI/BaseButton.vue'

const props = defineProps<{
  items: Product[]
}>()

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'remove-item', product: Product): void
  (event: 'purchase'): void
}>()
</script>

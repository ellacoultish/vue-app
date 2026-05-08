<template>
  <div
    class="absolute right-0 top-full z-20 mt-3 w-80 overflow-hidden rounded-md border border-line bg-surface shadow-xl"
  >
    <div
      class="flex items-center justify-between border-b border-line-soft px-4 py-3"
    >
      <h2 class="text-sm font-semibold text-ink">Basket</h2>
      <BaseButton
        size="sm"
        type="button"
        variant="ghost"
        @click="emit('close')"
      >
        Close
      </BaseButton>
    </div>

    <div
      v-if="items.length === 0"
      class="px-4 py-6 text-sm text-ink-muted"
    >
      Your basket is empty.
    </div>

    <div
      v-else
      class="max-h-96 overflow-y-auto"
    >
      <ul class="divide-y divide-line-soft">
        <li
          v-for="item in items"
          :key="item.title"
          class="flex gap-3 px-4 py-3"
        >
          <img
            class="h-14 w-14 flex-none rounded object-cover"
            :src="item.imageUrl"
            :alt="item.title"
          />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-ink">
              {{ item.title }}
            </p>
            <p class="mt-1 text-sm font-semibold text-ink-soft">
              £{{ item.price }}
            </p>
          </div>
          <BaseButton
            size="sm"
            type="button"
            variant="danger"
            @click="emit('remove-item', item)"
          >
            Remove
          </BaseButton>
        </li>
      </ul>

      <div class="border-t border-line-soft px-4 py-3">
        <div class="mb-3 flex items-center justify-between text-sm">
          <span class="text-ink-muted">Total</span>
          <span class="font-semibold text-ink">£{{ totalPrice }}</span>
        </div>
        <BaseButton
          class="w-full"
          type="button"
          @click="emit('purchase')"
        >
          Purchase
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '@/stores/products'
import BaseButton from '../UI/BaseButton.vue'

const props = defineProps<{
  items: Product[]
}>()

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'remove-item', product: Product): void
  (event: 'purchase'): void
}>()

const totalPrice = computed(() =>
  props.items.reduce((total, item) => total + item.price, 0).toFixed(2),
)
</script>

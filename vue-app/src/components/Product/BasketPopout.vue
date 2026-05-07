<template>
  <div
    class="absolute right-0 top-full z-20 mt-3 w-80 overflow-hidden rounded-md border border-gray-200 bg-white shadow-xl"
  >
    <div
      class="flex items-center justify-between border-b border-gray-100 px-4 py-3"
    >
      <h2 class="text-sm font-semibold text-gray-900">Basket</h2>
      <button
        class="text-sm font-medium text-gray-500 hover:text-gray-900"
        type="button"
        @click="emit('close')"
      >
        Close
      </button>
    </div>

    <div
      v-if="items.length === 0"
      class="px-4 py-6 text-sm text-gray-500"
    >
      Your basket is empty.
    </div>

    <div
      v-else
      class="max-h-96 overflow-y-auto"
    >
      <ul class="divide-y divide-gray-100">
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
            <p class="truncate text-sm font-medium text-gray-900">
              {{ item.title }}
            </p>
            <p class="mt-1 text-sm font-semibold text-gray-700">
              £{{ item.price }}
            </p>
          </div>
          <button
            class="text-xs font-semibold text-red-500 hover:text-red-700"
            type="button"
            @click="emit('remove-item', item)"
          >
            Remove
          </button>
        </li>
      </ul>

      <div class="border-t border-gray-100 px-4 py-3">
        <div class="mb-3 flex items-center justify-between text-sm">
          <span class="text-gray-500">Total</span>
          <span class="font-semibold text-gray-900">£{{ totalPrice }}</span>
        </div>
        <button
          class="w-full rounded bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
          type="button"
          @click="emit('purchase')"
        >
          Purchase
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '@/stores/products'

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

<template>
  <div>
    <div
      class="flex items-start justify-between gap-4 border-b border-line-soft px-4 py-3"
      :class="{ 'border-b-0 px-0 pt-0': !compact }"
    >
      <div>
        <h2
          :id="titleId"
          class="font-semibold text-ink"
          :class="compact ? 'text-sm' : 'text-lg'"
        >
          {{ title }}
        </h2>
        <p class="mt-1 text-sm text-ink-muted">
          {{ itemCount }} {{ itemCount === 1 ? 'item' : 'items' }}
        </p>
      </div>

      <slot name="header-action" />
    </div>

    <p
      v-if="items.length === 0"
      class="text-sm text-ink-muted"
      :class="
        compact
          ? 'px-4 py-6'
          : 'mt-5 rounded border border-line-soft bg-line-soft px-3 py-4'
      "
    >
      Your cart is empty.
    </p>

    <div
      v-else
      :class="{ 'max-h-96 overflow-y-auto': scrollable }"
    >
      <ul
        class="divide-y divide-line-soft"
        :class="{ 'mt-5': !compact }"
      >
        <li
          v-for="item in items"
          :key="item.title"
          class="flex gap-3"
          :class="compact ? 'px-4 py-3' : 'py-4 first:pt-0'"
        >
          <img
            class="flex-none rounded object-cover"
            :class="compact ? 'h-14 w-14' : 'h-16 w-16'"
            :src="item.imageUrl"
            :alt="item.title"
          />
          <div class="min-w-0 flex-1">
            <p
              class="text-sm font-medium text-ink"
              :class="compact ? 'truncate' : 'line-clamp-2'"
            >
              {{ item.title }}
            </p>
            <p class="mt-1 text-sm font-semibold text-ink-soft">
              £{{ item.price.toFixed(2) }}
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

      <div
        class="border-t border-line-soft"
        :class="compact ? 'px-4 py-3' : 'pt-4'"
      >
        <div
          class="flex items-center justify-between text-sm"
          :class="{ 'mb-3': $slots['footer-action'] }"
        >
          <span class="text-ink-muted">Total</span>
          <span
            class="font-semibold text-ink"
            :class="{ 'text-lg': !compact }"
          >
            £{{ totalPrice }}
          </span>
        </div>

        <slot name="footer-action" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '@/stores/products'
import BaseButton from '../UI/BaseButton.vue'

const props = withDefaults(
  defineProps<{
    items: Product[]
    title: string
    titleId?: string
    compact?: boolean
    scrollable?: boolean
  }>(),
  {
    titleId: undefined,
    compact: false,
    scrollable: false,
  },
)

const emit = defineEmits<{
  (event: 'remove-item', product: Product): void
}>()

const itemCount = computed(() => props.items.length)
const totalPrice = computed(() =>
  props.items.reduce((total, item) => total + item.price, 0).toFixed(2),
)
</script>

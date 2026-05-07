<template>
  <button
    class="relative inline-flex items-center justify-center p-2"
    @click="basketClick"
  >
    <ShoppingCartIcon class="w-6 h-6 text-ink-soft" />
    <span
      v-if="count > 0"
      class="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center text-xs font-bold text-surface bg-danger rounded-full"
    >
      {{ count }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
const emit = defineEmits<{
  (event: 'basket-click'): void
}>()

withDefaults(
  defineProps<{
    count?: number
  }>(),
  {
    count: 0,
  },
)
function basketClick() {
  emit('basket-click')
}
</script>

<template>
  <div
    class="flex flex-col gap-4 rounded border border-line bg-surface p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between"
  >
    <div>
      <h2 class="text-xl font-bold text-ink">Featured products</h2>
      <p class="mt-1 text-sm text-ink-muted">
        Bestselling mocked stock, sorted by recent sales.
      </p>
    </div>

    <div class="flex flex-wrap gap-2">
      <BaseButton
        v-for="category in categories"
        :key="category"
        class="rounded-full border border-line hover:border-brand"
        size="sm"
        type="button"
        variant="ghost"
      >
        {{ category }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../UI/BaseButton.vue'

defineProps<{
  categories: string[]
}>()
</script>

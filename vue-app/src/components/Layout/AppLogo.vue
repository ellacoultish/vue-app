<template>
  <RouterLink
    to="/"
    class="flex shrink-0 items-center gap-3 rounded px-1 py-1"
    aria-label="Home"
  >
    <span
      class="flex h-9 w-9 items-center justify-center rounded bg-ink text-sm font-black text-surface"
    >
      ML
    </span>
    <span class="hidden leading-tight sm:block">
      <span class="block text-sm font-bold text-ink">Market Lane</span>
      <span class="block text-xs font-medium text-ink-muted"
        >Everyday goods</span
      >
    </span>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex min-w-0 flex-1 items-center justify-center">
    <div
      class="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-line bg-line-soft p-1"
    >
      <RouterLink
        v-for="link in routeLinks"
        :key="link.to"
        :to="link.to"
        class="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-ink-muted transition hover:text-ink"
        active-class="bg-surface text-ink shadow-sm"
      >
        {{ link.label }}
      </RouterLink>

      <a
        v-for="link in mockLinks"
        :key="link.href"
        :href="link.href"
        class="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-ink-muted transition hover:text-ink"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const routeLinks = [
  { to: '/', label: 'Shop' },
  { to: '/order', label: 'Checkout' },
]

const mockLinks = [
  { href: '#new-arrivals', label: 'New arrivals' },
  { href: '#gift-cards', label: 'Gift cards' },
  { href: '#journal', label: 'Journal' },
]
</script>

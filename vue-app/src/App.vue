<template>
  <header class="border-b bg-white">
    <div class="mx-auto max-w-6xl px-4">
      <nav class="flex h-14 items-center gap-6">
     <RouterLink
  v-for="link in links"
  :key="link.to"
  :to="link.to"
  class="text-sm font-medium text-gray-700 hover:text-black transition"
  >
  {{ link.label }}
</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/order', label: 'Order' }
]
</script>
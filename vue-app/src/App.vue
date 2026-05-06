<template>
  <div class="flex flex-col w-screen h-screen">
    <header>
      <nav class="w-full flex items-center justify-center gap-4 py-4 bg-gray-200">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to">
          {{ link.label }}
        </RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/order', label: 'Order' },
]
</script>

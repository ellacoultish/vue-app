<template>
  <div class="flex flex-col w-screen h-screen">
    <header>
      <nav class="w-full flex py-4 bg-surface-muted">
        <div class="justify-center w-full flex items-center gap-4">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div
          class="relative ml-auto mr-4"
          @click.stop
        >
          <ShoppingCartButton
            class="cursor-pointer"
            :count="basketStore.getBasketCount()"
            @basket-click="toggleBasket"
          />
          <BasketPopout
            v-if="isBasketOpen"
            :items="basketItems"
            @close="isBasketOpen = false"
            @remove-item="basketStore.removeFromBasket"
          />
        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref } from 'vue'
import BasketPopout from './components/Product/BasketPopout.vue'
import ShoppingCartButton from './components/Product/ShoppingCartButton.vue'
import { useBasketStore } from './stores/basket'

const basketStore = useBasketStore()
const isBasketOpen = ref(false)
const basketItems = computed(() => basketStore.getBasket())

const links = [
  { to: '/', label: 'Home' },
  { to: '/order', label: 'Order' },
]

function toggleBasket() {
  isBasketOpen.value = !isBasketOpen.value
}
</script>

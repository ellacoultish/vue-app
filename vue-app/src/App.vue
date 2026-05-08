<template>
  <div class="min-h-screen w-screen bg-line-soft">
    <header
      class="sticky top-0 z-10 border-b border-line bg-surface/95 backdrop-blur"
    >
      <nav
        class="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <AppLogo />
        <MainNavigation />

        <div
          class="relative shrink-0"
          @click.stop
        >
          <ShoppingCartButton
            class="cursor-pointer rounded-full border border-line bg-surface shadow-sm transition hover:border-brand hover:text-brand"
            :count="basketStore.getBasketCount()"
            @basket-click="toggleBasket"
          />
          <BasketPopout
            v-if="isBasketOpen"
            :items="basketItems"
            @close="isBasketOpen = false"
            @remove-item="basketStore.removeFromBasket"
            @purchase="goToOrder"
          />
        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import AppLogo from './components/Layout/AppLogo.vue'
import MainNavigation from './components/Layout/MainNavigation.vue'
import BasketPopout from './components/Product/BasketPopout.vue'
import ShoppingCartButton from './components/Product/ShoppingCartButton.vue'
import { useBasketStore } from './stores/basket'

const basketStore = useBasketStore()
const router = useRouter()
const isBasketOpen = ref(false)
const basketItems = computed(() => basketStore.getBasket())

function toggleBasket() {
  isBasketOpen.value = !isBasketOpen.value
}

function goToOrder() {
  isBasketOpen.value = false
  router.push('/order')
}
</script>

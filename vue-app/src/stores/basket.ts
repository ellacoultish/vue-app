import { ref } from 'vue'
import type { Product } from './products.ts'
import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', () => {
  const basket = ref<Product[]>([])

  function getBasket() {
    return basket.value
  }

  function addToBasket(product: Product) {
    debugger
    basket.value.push(product)
  }

  function removeFromBasket(product: Product) {
    const index = basket.value.findIndex((p) => p.title === product.title)
    if (index !== -1) {
      basket.value.splice(index, 1)
    }
  }

  function clearBasket() {
    basket.value = []
  }

  function isInBasket(product: Product) {
    return basket.value.some((p) => p.title === product.title)
  }

  return { getBasket, addToBasket, removeFromBasket, clearBasket, isInBasket }
})

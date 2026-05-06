import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { getProducts } from '@/api/products'

export interface Product {
  title: string
  price: number
  rating: number
  sales: number
  imageUrl: string
}

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])

  function topProductsBySales(limit = 5) {
    return [...products.value]
      .sort((a, b) => b.sales - a.sales)
      .slice(0, limit)
  }

  async function fetchProducts() {
    const data = await getProducts()

    products.value = data.map((product) => ({
      title: product.title,
      price: product.price,
      rating: product.rating ?? 0,
      sales: product.sales,
      imageUrl: product.imageUrl ?? '',
    }))
  }

  return { products, topProductsBySales, fetchProducts }
})

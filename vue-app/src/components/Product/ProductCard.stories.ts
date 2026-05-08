import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ProductCard from './ProductCard.vue'
import { storyProducts } from './productStoryData'

const product = storyProducts[0]!

const meta = {
  title: 'Product/ProductCard',
  component: ProductCard,
  decorators: [
    () => ({
      template: '<div class="max-w-xs p-4"><story /></div>',
    }),
  ],
} satisfies Meta<typeof ProductCard>

export default meta

type Story = StoryObj<typeof meta>

export const Available: Story = {
  args: {
    title: product.title,
    image: product.imageUrl,
    price: product.price,
    rating: product.rating,
    sales: product.sales,
    isInBasket: false,
  },
}

export const InBasket: Story = {
  args: {
    ...Available.args,
    isInBasket: true,
  },
}

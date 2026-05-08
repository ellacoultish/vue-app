import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ProductGrid from './ProductGrid.vue'
import { storyProducts } from './productStoryData'

const meta = {
  title: 'Product/ProductGrid',
  component: ProductGrid,
  decorators: [
    () => ({
      template: '<div class="max-w-7xl bg-line-soft p-4"><story /></div>',
    }),
  ],
} satisfies Meta<typeof ProductGrid>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    basketItems: [],
    products: storyProducts,
  },
}

export const WithBasketItems: Story = {
  args: {
    basketItems: [storyProducts[0]!, storyProducts[2]!],
    products: storyProducts,
  },
}

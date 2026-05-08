import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ProductSelectionHero from './ProductSelectionHero.vue'

const meta = {
  title: 'Product/ProductSelectionHero',
  component: ProductSelectionHero,
  decorators: [
    () => ({
      template: '<div class="max-w-7xl bg-line-soft p-4"><story /></div>',
    }),
  ],
} satisfies Meta<typeof ProductSelectionHero>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    averageRating: '4.5',
    formattedSales: '7,961',
    totalProducts: 16,
  },
}

export const LoadingStats: Story = {
  args: {
    averageRating: '0.0',
    formattedSales: '0',
    totalProducts: 0,
  },
}

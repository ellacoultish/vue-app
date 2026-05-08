import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ProductCatalogHeader from './ProductCatalogHeader.vue'

const meta = {
  title: 'Product/ProductCatalogHeader',
  component: ProductCatalogHeader,
  decorators: [
    () => ({
      template: '<div class="max-w-7xl bg-line-soft p-4"><story /></div>',
    }),
  ],
} satisfies Meta<typeof ProductCatalogHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    categories: ['All', 'Home', 'Desk', 'Travel', 'Wellness'],
  },
}

export const ManyCategories: Story = {
  args: {
    categories: [
      'All',
      'Home',
      'Desk',
      'Travel',
      'Wellness',
      'Kitchen',
      'Stationery',
      'Accessories',
    ],
  },
}

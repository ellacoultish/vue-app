import type { Meta, StoryObj } from '@storybook/vue3-vite'

import BasketPopout from './BasketPopout.vue'
import { storyProducts } from './productStoryData'

const meta = {
  title: 'Product/BasketPopout',
  component: BasketPopout,
  decorators: [
    () => ({
      template: '<div class="relative h-[520px] max-w-md p-4"><story /></div>',
    }),
  ],
} satisfies Meta<typeof BasketPopout>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    items: storyProducts.slice(0, 3),
  },
}

export const Empty: Story = {
  args: {
    items: [],
  },
}

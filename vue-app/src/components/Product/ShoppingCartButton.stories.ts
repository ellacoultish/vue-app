import type { Meta, StoryObj } from '@storybook/vue3-vite'

import ShoppingCartButton from './ShoppingCartButton.vue'

const meta = {
  title: 'Product/ShoppingCartButton',
  component: ShoppingCartButton,
  decorators: [
    () => ({
      template: '<div class="p-4"><story /></div>',
    }),
  ],
} satisfies Meta<typeof ShoppingCartButton>

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {
    count: 0,
  },
}

export const WithItems: Story = {
  args: {
    count: 3,
  },
}

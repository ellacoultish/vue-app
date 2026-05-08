import type { Meta, StoryObj } from '@storybook/vue3-vite'

import CartPreview from './CartPreview.vue'
import { storyProducts } from './productStoryData'
import BaseButton from '../UI/BaseButton.vue'

const meta = {
  title: 'Product/CartPreview',
  component: CartPreview,
  decorators: [
    () => ({
      template: '<div class="max-w-md p-4"><story /></div>',
    }),
  ],
} satisfies Meta<typeof CartPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    compact: false,
    items: storyProducts.slice(0, 3),
    scrollable: false,
    title: 'Basket',
  },
}

export const Empty: Story = {
  args: {
    ...Primary.args,
    items: [],
  },
}

export const CompactWithActions: Story = {
  render: (args) => ({
    components: { BaseButton, CartPreview },
    setup() {
      return { args }
    },
    template: `
      <CartPreview v-bind="args">
        <template #header-action>
          <BaseButton size="sm" type="button" variant="ghost">Close</BaseButton>
        </template>

        <template #footer-action>
          <BaseButton class="w-full" type="button">Purchase</BaseButton>
        </template>
      </CartPreview>
    `,
  }),
  args: {
    compact: true,
    items: storyProducts,
    scrollable: true,
    title: 'Basket',
  },
}

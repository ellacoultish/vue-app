import type { Meta, StoryObj } from '@storybook/vue3-vite'

import BaseButton from './BaseButton.vue'

const meta = {
  title: 'UI/BaseButton',
  component: BaseButton,
} satisfies Meta<typeof BaseButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">Button</BaseButton>',
  }),
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
  },
}

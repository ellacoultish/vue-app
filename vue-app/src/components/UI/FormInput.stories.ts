import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

import FormInput from './FormInput.vue'

const meta = {
  title: 'UI/FormInput',
  component: FormInput,
  decorators: [
    () => ({
      template: '<div class="max-w-sm p-4"><story /></div>',
    }),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url'],
    },
    validator: {
      control: false,
    },
  },
} satisfies Meta<typeof FormInput>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => ({
    components: { FormInput },
    setup() {
      const value = ref(args.modelValue)

      return { args, value }
    },
    template:
      '<FormInput v-bind="args" v-model="value" @validity-change="args.onValidityChange" />',
  }),
  args: {
    id: 'form-input',
    label: 'Form Input',
    name: 'form-input',
    modelValue: '',
    type: 'text',
    autocomplete: 'off',
    required: true,
  },
}

export const WithValue: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    id: 'form-input-with-value',
    label: 'Email address',
    name: 'email',
    modelValue: 'ella@example.com',
    type: 'email',
    autocomplete: 'email',
  },
}

export const Optional: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    id: 'form-input-optional',
    label: 'Company',
    name: 'company',
    required: false,
  },
}

export const WithValidator: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    id: 'form-input-validator',
    label: 'Username',
    name: 'username',
    validator: (value: string) =>
      value.length >= 3 ? '' : 'Username must be at least 3 characters',
  },
}

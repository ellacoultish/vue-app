import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductCard from '../Product/ProductCard.vue'

describe('ProductCard', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductCard, { props: { title: 'Test Product' } })
    expect(wrapper.text()).toContain('Test Product')
  })
})

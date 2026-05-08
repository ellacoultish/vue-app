import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const orderFormFields = [
  'fullName',
  'email',
  'phone',
  'address',
  'city',
  'postcode',
] as const

export type OrderFormField = (typeof orderFormFields)[number]

export const useOrderFormStore = defineStore('orderForm', () => {
  const form = reactive<Record<OrderFormField | 'notes', string>>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    notes: '',
  })
  const orderSubmitted = ref(false)

  function setField(name: OrderFormField | 'notes', value: string) {
    form[name] = value
    orderSubmitted.value = false
  }

  function submitOrder() {
    orderSubmitted.value = true
  }

  return {
    form,
    orderSubmitted,
    setField,
    submitOrder,
  }
})

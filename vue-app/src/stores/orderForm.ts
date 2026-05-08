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

export type DeliveryType = 'standard' | 'express' | 'collection'

export interface OrderForm {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  postcode: string
  deliveryType: DeliveryType
  notes: string
  acceptedTerms: boolean
}

export const useOrderFormStore = defineStore('orderForm', () => {
  const form = reactive<OrderForm>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    deliveryType: 'standard',
    notes: '',
    acceptedTerms: false,
  })
  const orderSubmitted = ref(false)

  function setField<FieldName extends keyof OrderForm>(
    name: FieldName,
    value: OrderForm[FieldName],
  ) {
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

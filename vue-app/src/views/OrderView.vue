<template>
  <section class="mx-auto w-full max-w-6xl px-4 py-8">
    <h1 class="text-2xl font-semibold text-ink">Order details</h1>

    <div class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <form
        class="space-y-6 rounded-md border border-line bg-surface p-6 shadow-sm"
        novalidate
        @submit="submitOrder"
      >
        <div class="grid gap-4 sm:grid-cols-2">
          <FormInput
            class="sm:col-span-2"
            id="full-name"
            v-model="orderFormStore.form.fullName"
            label="Full name"
            name="fullName"
            autocomplete="name"
            required
            @validity-change="handleValidityChange"
          />

          <FormInput
            id="email"
            v-model="orderFormStore.form.email"
            label="Email"
            name="email"
            type="email"
            autocomplete="email"
            required
            @validity-change="handleValidityChange"
          />

          <FormInput
            id="phone"
            v-model="orderFormStore.form.phone"
            label="Phone"
            name="phone"
            type="tel"
            autocomplete="tel"
            required
            :validator="validatePhone"
            @validity-change="handleValidityChange"
          />

          <FormInput
            class="sm:col-span-2"
            id="address"
            v-model="orderFormStore.form.address"
            label="Address"
            name="address"
            autocomplete="street-address"
            required
            @validity-change="handleValidityChange"
          />

          <FormInput
            id="city"
            v-model="orderFormStore.form.city"
            label="City"
            name="city"
            autocomplete="address-level2"
            required
            @validity-change="handleValidityChange"
          />

          <FormInput
            id="postcode"
            v-model="orderFormStore.form.postcode"
            label="Postcode"
            name="postcode"
            autocomplete="postal-code"
            required
            :validator="validatePostcode"
            @validity-change="handleValidityChange"
          />

          <div class="sm:col-span-2">
            <label
              class="block text-sm font-medium text-ink"
              for="notes"
            >
              Delivery notes
            </label>
            <textarea
              id="notes"
              v-model="orderFormStore.form.notes"
              class="mt-1 min-h-24 w-full rounded border border-line px-3 py-2 text-ink outline-none focus:border-brand"
              name="notes"
              autocomplete="off"
              @input="orderFormStore.orderSubmitted = false"
            />
          </div>
        </div>

        <div
          class="flex flex-col gap-3 border-t border-line-soft pt-5 sm:flex-row sm:items-center"
        >
          <BaseButton
            type="submit"
            :disabled="basketItems.length === 0"
          >
            Place order
          </BaseButton>

          <p
            v-if="orderFormStore.orderSubmitted"
            class="text-sm font-medium text-brand-strong"
          >
            Order details received.
          </p>
        </div>
      </form>

      <aside
        class="h-fit lg:sticky lg:top-6"
        aria-labelledby="order-summary-title"
      >
        <BaseCard
          class="p-5"
          elevation="md"
        >
          <CartPreview
            title="Cart preview"
            title-id="order-summary-title"
            :items="basketItems"
            @remove-item="basketStore.removeFromBasket"
          >
          </CartPreview>
        </BaseCard>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  createPatternValidator,
  createPhoneValidator,
  useFormValidation,
} from '@/composables/useFormValidation'
import { useBasketStore } from '@/stores/basket'
import { orderFormFields, useOrderFormStore } from '@/stores/orderForm'
import CartPreview from '../components/Product/CartPreview.vue'
import BaseButton from '../components/UI/BaseButton.vue'
import BaseCard from '../components/UI/BaseCard.vue'
import FormInput from '../components/UI/FormInput.vue'

const basketStore = useBasketStore()
const orderFormStore = useOrderFormStore()
const { isFormValid, setFieldValidity } = useFormValidation(orderFormFields)
const basketItems = computed(() => basketStore.getBasket())
const validatePhone = createPhoneValidator()
const validatePostcode = createPatternValidator(
  /^[A-Za-z0-9][A-Za-z0-9 -]{2,10}$/,
  'Enter a valid postcode.',
)

function handleValidityChange(name: string, isValid: boolean) {
  setFieldValidity(name, isValid)
  orderFormStore.orderSubmitted = false
}

function submitOrder(event: SubmitEvent) {
  event.preventDefault()
  orderFormStore.orderSubmitted = false

  const form = event.currentTarget as HTMLFormElement

  if (!form.checkValidity() || !isFormValid.value) {
    return
  }

  orderFormStore.submitOrder()
}
</script>

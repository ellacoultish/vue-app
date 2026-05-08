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
              for="delivery-type"
            >
              Delivery type
            </label>
            <select
              id="delivery-type"
              v-model="orderFormStore.form.deliveryType"
              class="mt-1 w-full rounded border border-line bg-surface px-3 py-2 text-ink outline-none focus:border-brand"
              name="deliveryType"
              required
              @change="orderFormStore.orderSubmitted = false"
            >
              <option
                disabled
                value=""
              >
                Select a delivery type
              </option>
              <option value="standard">Standard delivery</option>
              <option value="express">Express delivery</option>
              <option value="collection">Click and collect</option>
            </select>
          </div>

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

        <div>
          <label
            class="flex items-start gap-3 rounded border bg-line-soft px-4 py-3 text-sm text-ink"
            :class="
              showTermsError ? 'border-danger' : 'border-line-soft'
            "
            for="accepted-terms"
          >
            <input
              id="accepted-terms"
              v-model="orderFormStore.form.acceptedTerms"
              class="mt-1 h-4 w-4 rounded border-line text-brand focus:ring-brand"
              name="acceptedTerms"
              required
              type="checkbox"
              :aria-invalid="showTermsError ? 'true' : 'false'"
              :aria-describedby="
                showTermsError ? 'accepted-terms-error' : undefined
              "
              @change="handleTermsChange"
              @invalid="handleTermsInvalid"
            />
            <span>
              I accept the terms and conditions.
            </span>
          </label>
          <p
            v-if="showTermsError"
            id="accepted-terms-error"
            class="mt-1 text-sm text-danger"
          >
            You need to accept the terms and conditions before placing your
            order.
          </p>
        </div>

        <div class="flex">
          <BaseButton
            class="ml-auto mr-3"
            type="submit"
            :disabled="basketItems.length === 0"
          >
            Place order
          </BaseButton>
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
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
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
const router = useRouter()
const { isFormValid, setFieldValidity } = useFormValidation(orderFormFields)
const basketItems = computed(() => basketStore.getBasket())
const hasCheckedTerms = ref(false)
const showTermsError = computed(
  () => hasCheckedTerms.value && !orderFormStore.form.acceptedTerms,
)
const validatePhone = createPhoneValidator()
const validatePostcode = createPatternValidator(
  /^[A-Za-z0-9][A-Za-z0-9 -]{2,10}$/,
  'Enter a valid postcode.',
)

function handleValidityChange(name: string, isValid: boolean) {
  setFieldValidity(name, isValid)
  orderFormStore.orderSubmitted = false
}

function handleTermsChange() {
  hasCheckedTerms.value = true
  orderFormStore.orderSubmitted = false
}

function handleTermsInvalid() {
  hasCheckedTerms.value = true
}

function submitOrder(event: SubmitEvent) {
  event.preventDefault()
  orderFormStore.orderSubmitted = false
  hasCheckedTerms.value = true

  const form = event.currentTarget as HTMLFormElement

  if (!form.checkValidity() || !isFormValid.value) {
    return
  }

  orderFormStore.submitOrder()
  basketStore.clearBasket()
  router.push('/confirmation')
}
</script>

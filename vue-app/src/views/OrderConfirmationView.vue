<template>
  <section class="mx-auto w-full max-w-2xl px-4 py-12">
    <BaseCard
      class="p-6"
      elevation="md"
    >
      <div class="space-y-5">
        <div>
          <p class="text-sm font-medium text-brand-strong">Order confirmed</p>
          <h1 class="mt-2 text-2xl font-semibold text-ink">
            Thanks{{ firstName ? `, ${firstName}` : '' }}.
          </h1>
          <p class="mt-3 text-sm leading-6 text-ink-muted">
            Your order details have been received. We will send confirmation to
            {{ orderFormStore.form.email || 'your email address' }}.
          </p>
        </div>

        <div class="rounded border border-line-soft bg-line-soft px-4 py-3">
          <p class="text-sm font-medium text-ink">Delivery to</p>
          <p class="mt-1 text-sm text-ink-muted">
            {{ deliveryAddress }}
          </p>
        </div>

        <div
          class="flex flex-col gap-3 border-t border-line-soft pt-5 sm:flex-row"
        >
          <RouterLink to="/">
            <BaseButton type="button">Continue shopping</BaseButton>
          </RouterLink>
        </div>
      </div>
    </BaseCard>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useOrderFormStore } from '@/stores/orderForm'
import BaseButton from '../components/UI/BaseButton.vue'
import BaseCard from '../components/UI/BaseCard.vue'

const orderFormStore = useOrderFormStore()

const firstName = computed(
  () => orderFormStore.form.fullName.trim().split(' ')[0],
)
const deliveryAddress = computed(() =>
  [
    orderFormStore.form.address,
    orderFormStore.form.city,
    orderFormStore.form.postcode,
  ]
    .filter(Boolean)
    .join(', '),
)
</script>

<template>
  <section class="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
    <div class="rounded border border-line bg-surface p-6 shadow-sm sm:p-8">
      <div
        class="flex flex-wrap items-center gap-2 text-xs font-bold uppercase text-brand"
      >
        <span class="rounded-full bg-line-soft px-3 py-1">Spring edit</span>
        <span>Free delivery over £50</span>
      </div>

      <div class="mt-5 max-w-3xl">
        <h1 class="text-4xl font-black tracking-normal text-ink sm:text-5xl">
          Thoughtful essentials for home, work and weekends.
        </h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-ink-subtle">
          A curated selection of products for your home, work and weekends.
        </p>
      </div>

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          href="#catalog"
          class="rounded bg-ink px-5 py-2 text-sm font-semibold text-surface transition hover:bg-ink-soft"
        >
          Browse products
        </a>
        <a
          href="#gift-cards"
          class="rounded border border-line px-5 py-2 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
        >
          Gift ideas
        </a>
      </div>
    </div>

    <aside class="rounded border border-line bg-ink p-6 text-surface shadow-sm">
      <p class="text-sm font-semibold text-surface/70">Today in store</p>
      <div class="mt-5 grid grid-cols-2 gap-4">
        <div>
          <p class="text-3xl font-black">{{ totalProducts }}</p>
          <p class="mt-1 text-sm text-surface/70">Products</p>
        </div>
        <div>
          <p class="text-3xl font-black">{{ averageRating }}</p>
          <p class="mt-1 text-sm text-surface/70">Avg rating</p>
        </div>
        <div class="col-span-2 border-t border-surface/20 pt-4">
          <p class="text-3xl font-black">{{ formattedSales }}</p>
          <p class="mt-1 text-sm text-surface/70">Mock customer purchases</p>
        </div>
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  averageRating: string
  formattedSales: string
  totalProducts: number
}>()
</script>

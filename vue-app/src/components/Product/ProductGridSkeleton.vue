<template>
  <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <article
      v-for="n in count"
      :key="n"
      class="overflow-hidden h-60 rounded-3xl border border-surface/50 bg-surface/60 shadow-sm animate-pulse"
    >
      <div class="h-30 m-3 rounded-3xl bg-surface"></div>
      <div class="h-3 m-3 rounded-3xl bg-surface"></div>
      <div class="h-3 m-3 rounded-3xl bg-surface"></div>
      <div class="h-3 m-3 rounded-3xl bg-surface"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  count?: number
}>()

const count = props.count ?? 8
</script>

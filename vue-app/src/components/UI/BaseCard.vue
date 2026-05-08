<template>
  <div
    class="overflow-hidden rounded border border-line bg-surface"
    :class="[
      elevationClasses[elevation],
      animated ? 'transition-all duration-300 hover:scale-101 hover:shadow-lg' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
type Elevation = 'sm' | 'md' | 'lg' | 'xl'

withDefaults(
  defineProps<{
    animated?: boolean
    elevation?: Elevation
  }>(),
  {
    animated: false,
    elevation: 'sm',
  },
)

const elevationClasses: Record<Elevation, string> = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
}
</script>

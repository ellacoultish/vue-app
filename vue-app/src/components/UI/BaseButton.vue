<template>
  <button
    :class="[baseClass, variantClasses[variant], sizeClasses[size]]"
    :disabled="disabled"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    disabled?: boolean
    size?: 'sm' | 'md'
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'brand' | 'ghost' | 'danger'
  }>(),
  {
    disabled: false,
    size: 'md',
    type: 'button',
    variant: 'primary',
  },
)

const baseClass =
  'rounded font-semibold outline-none cursor-pointer disabled:cursor-default disabled:bg-surface-disabled disabled:text-surface'

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-5 py-2 text-sm',
}

const variantClasses = {
  primary: 'bg-ink text-surface hover:bg-ink-soft',
  brand: 'bg-brand text-surface hover:bg-brand-strong',
  ghost: 'bg-transparent text-ink-muted hover:text-ink disabled:bg-transparent',
  danger:
    'bg-transparent text-danger hover:text-danger-strong disabled:bg-transparent',
}
</script>

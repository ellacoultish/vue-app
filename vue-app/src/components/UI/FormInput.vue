<template>
  <div>
    <label
      class="block text-sm font-medium text-ink"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      ref="input"
      class="mt-1 w-full rounded border px-3 py-2 text-ink outline-none focus:border-brand"
      :class="errorMessage ? 'border-danger' : 'border-line'"
      :type="type"
      :name="name"
      :value="modelValue"
      :autocomplete="autocomplete"
      :required="required"
      :aria-invalid="errorMessage ? 'true' : 'false'"
      :aria-describedby="errorMessage ? `${id}-error` : undefined"
      @blur="handleBlur"
      @input="handleInput"
      @invalid="handleInvalid"
    />
    <p
      v-if="errorMessage"
      :id="`${id}-error`"
      class="mt-1 text-sm text-danger"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

type Validator = (value: string) => string

const props = withDefaults(
  defineProps<{
    id: string
    label: string
    name: string
    modelValue: string
    type?: string
    autocomplete?: string
    required?: boolean
    validator?: Validator
  }>(),
  {
    modelValue: '',
    type: 'text',
    autocomplete: 'off',
    required: false,
    validator: undefined,
  },
)

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'validity-change', name: string, isValid: boolean): void
}>()

const input = ref<HTMLInputElement | null>(null)
const errorMessage = ref('')
const hasInteracted = ref(false)

onMounted(() => {
  validate()
})

function handleInput(event: Event) {
  emit('update:modelValue', (event.currentTarget as HTMLInputElement).value)
  validate(hasInteracted.value)
}

function handleBlur() {
  hasInteracted.value = true
  validate(true)
}

function handleInvalid() {
  hasInteracted.value = true
  validate(true)
}

function validate(showError = false) {
  if (!input.value) {
    return
  }

  const customMessage = props.validator?.(input.value.value.trim()) ?? ''

  input.value.setCustomValidity(customMessage)
  errorMessage.value = showError ? input.value.validationMessage : ''
  emit('validity-change', props.name, input.value.validity.valid)
}
</script>

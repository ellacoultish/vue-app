import { computed, reactive } from 'vue'

export type FieldValidator = (value: string) => string

export function useFormValidation(fieldNames: readonly string[]) {
  const fieldValidity = reactive<Record<string, boolean>>(
    Object.fromEntries(fieldNames.map((fieldName) => [fieldName, false])),
  )

  const isFormValid = computed(() => Object.values(fieldValidity).every(Boolean))

  function setFieldValidity(name: string, isValid: boolean) {
    fieldValidity[name] = isValid
  }

  return {
    fieldValidity,
    isFormValid,
    setFieldValidity,
  }
}

export function createPhoneValidator(
  message = 'Enter a phone number using at least 7 digits. Spaces, brackets, plus and hyphen are allowed.',
): FieldValidator {
  return (value: string) => {
    const digitCount = value.replace(/\D/g, '').length
    const hasValidCharacters = /^\+?[0-9 ()-]+$/.test(value)
    const isValidPhone =
      value === '' || (hasValidCharacters && digitCount >= 7)

    return isValidPhone ? '' : message
  }
}

export function createPatternValidator(
  pattern: RegExp,
  message: string,
): FieldValidator {
  return (value: string) => {
    return value === '' || pattern.test(value) ? '' : message
  }
}

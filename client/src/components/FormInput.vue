<template>
  <div class="group">
    <label :for="id" class="block text-sm font-semibold text-gray-800 mb-2">
      {{ label }}
    </label>

    <div>
      <component
        :is="isTextarea ? 'textarea' : 'input'"
        :id="id"
        :type="isTextarea ? undefined : type"
        :rows="isTextarea ? rows : undefined"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        autocomplete="off"
        class="border border-gray-600 w-full py-3 px-4 rounded-xl bg-white/10 text-gray-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 placeholder-gray-500 group-hover:border-purple-400/50 resize-none"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  modelValue: String,
  isTextarea: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: [Number, String],
    default: 4,
  },
})

defineEmits(['update:modelValue'])
</script>

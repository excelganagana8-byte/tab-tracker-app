<template>
  <div class="group">
    <label :for="id" class="block text-sm font-semibold text-gray-800 mb-2">
      {{ label }}
    </label>

    <select
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :class="[
        'border w-full py-3 px-4 rounded-xl bg-white/10 text-gray-700 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-400/50',
        error ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-purple-500',
      ]"
    >
      <option value="" disabled selected class="text-gray-900">
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        class="text-gray-900"
      >
        {{ option.label }}
      </option>
    </select>

    <p v-if="error" class="text-red-400 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  placeholder: {
    type: String,
    default: 'Select option',
  },
  modelValue: String,
  options: {
    type: Array,
    required: true,
  },
  error: String,
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="group">
    <label :for="id" class="block text-sm font-semibold text-gray-700 mb-2">
      {{ label }}
    </label>
    <div>
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :id="id"
        :placeholder="placeholder"
        autocomplete="off"
        class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300"
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
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="p-8 flex justify-center">
    <div class="text-center">
      <h2
        class="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2"
      >
        {{ title }}
      </h2>
      <p class="text-gray-500 text-sm">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>

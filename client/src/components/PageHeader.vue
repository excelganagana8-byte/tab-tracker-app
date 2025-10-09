<template>
  <div class="p-8 flex justify-center">
    <div class="text-center">
      <h2
        class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
      >
        {{ title }}
      </h2>
      <p class="text-gray-400 text-sm">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>

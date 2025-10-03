<script setup>
import { ref, reactive } from "vue";
import AuthenticationService from "@/services/AuthenticationService.js";

const email = ref("");
const password = ref("");
const errors = ref([]); // array of messages

const registerUser = async () => {
  errors.value = [];

  try {
    const response = await AuthenticationService.register({
      email: email.value,
      password: password.value
    });
    alert(response.data.message || "Registration successful!");
  } catch (err) {
    const data = err.response?.data;

    if (Array.isArray(data?.errors)) {
      // Collect all messages into errors array
      errors.value = data.errors.map(e => e.message);
    } else if (data?.message) {
      errors.value = [data.message];
    } else {
      errors.value = ["Something went wrong. Please try again."];
    }
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

      <form @submit.prevent="registerUser">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input v-model="email" type="email" id="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input v-model="password" type="password" id="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <!-- Show all error messages -->
        <ul v-if="errors.length" class="mb-4 text-red-500 text-sm list-disc pl-5">
          <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
        </ul>

        <button type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

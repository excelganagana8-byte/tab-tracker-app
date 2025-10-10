<script setup>
import Header from '@/components/Header.vue'
import BrowseButton from '@/components/BrowseButton.vue'
import { ref } from 'vue'
import AuthenticationService from '@/services/AuthenticationService'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const errors = ref([])
const router = useRouter()
const auth = useAuthStore()

const login = async () => {
  errors.value = []

  try {
    const response = await AuthenticationService.login({
      email: email.value,
      password: password.value,
    })

    // Get token and user directly from backend response
    const { token, user } = response.data

    // Store user & token in Pinia + localStorage
    auth.login(user, token)

    // Optional success alert
    alert(response.data.message || `Welcome back, ${user.name}!`)

    // Redirect to dashboard or home
    router.push('/')
  } catch (err) {
    const data = err.response?.data
    if (Array.isArray(data?.errors)) {
      errors.value = data.errors.map((e) => e.message)
    } else if (data?.message) {
      errors.value = [data.message]
    } else {
      errors.value = ['Something went wrong. Please try again.']
    }
  }
}
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col transition-colors"
  >
    <!-- Navigation Section -->
    <div class="relative mt-10 px-4 md:px-10">
      <!-- Header with increased left margin on md screens -->
      <div class="flex justify-center md:ml-[15%]">
        <Header />
      </div>

      <!-- Browse button: visible on md and up -->
      <div class="absolute right-4 top-0 hidden md:block">
        <BrowseButton />
      </div>

      <!-- Optional text link for small screens -->
      <div class="absolute right-4 top-0 md:hidden">
        <router-link
          to="/songs"
          class="text-purple-300 font-semibold hover:text-purple-200 transition-colors flex items-center space-x-1 text-sm group"
        >
          <span>Browse</span>
          <svg
            class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </router-link>
      </div>
    </div>

    <!-- Centered Card -->
    <div class="flex-1 flex items-center justify-center px-4 py-8">
      <div
        class="relative bg-white/5 backdrop-blur-lg rounded-2xl w-full max-w-md p-8 border border-white/10 transition-all duration-300 hover:border-purple-500/30"
      >
        <!-- Decorative background elements -->
        <div
          class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        ></div>
        <div
          class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl"
        ></div>

        <div class="text-center mb-8">
          <div
            class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4 shadow-purple-500/25"
          >
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              ></path>
            </svg>
          </div>
          <h2
            class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
          >
            Welcome Back
          </h2>
          <p class="text-gray-400 text-sm">Sign in to your account</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="login" class="space-y-6">
          <div class="group">
            <label for="email" class="block text-sm font-semibold text-gray-300 mb-2">
              Email Address
            </label>
            <div class="relative">
              <input
                v-model="email"
                type="email"
                id="email"
                placeholder="you@example.com"
                class="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 placeholder-gray-500 group-hover:border-purple-400/50"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  class="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="group">
            <label for="password" class="block text-sm font-semibold text-gray-300 mb-2">
              Password
            </label>
            <div class="relative">
              <input
                v-model="password"
                type="password"
                id="password"
                placeholder="••••••••"
                class="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 placeholder-gray-500 group-hover:border-purple-400/50"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  class="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Error Messages -->
          <div
            v-if="errors.length"
            class="bg-red-500/10 border border-red-500/20 rounded-xl p-4 space-y-2 transform transition-all duration-300 backdrop-blur-sm"
          >
            <div
              v-for="(err, i) in errors"
              :key="i"
              class="flex items-center space-x-2 text-red-300 text-sm"
            >
              <svg
                class="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{{ err }}</span>
            </div>
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3.5 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
          >
            <span>Sign In</span>
            <svg
              class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              ></path>
            </svg>
          </button>
        </form>

        <!-- Sign Up Link -->
        <p class="mt-8 text-center text-gray-400 text-sm">
          Don't have an account yet?
          <router-link
            to="/register"
            class="text-purple-300 font-semibold hover:text-purple-200 transition-colors flex items-center justify-center space-x-1 mt-2 group/link"
          >
            <span>Create your account</span>
            <svg
              class="w-4 h-4 transform group-hover/link:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

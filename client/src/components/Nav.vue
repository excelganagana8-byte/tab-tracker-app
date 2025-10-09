<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="border-b border-white/10">
    <div class="container mx-auto px-3 xs:px-4 sm:px-6 py-3 sm:py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2 xs:space-x-3">
          <div
            class="w-8 h-8 xs:w-10 xs:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25"
          >
            <svg
              class="w-4 h-4 xs:w-6 xs:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
          </div>
          <div>
            <h1
              class="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Tab Tracker
            </h1>
            <p class="text-[10px] xs:text-xs text-gray-400 -mt-1 xs:block">Your music companion</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-6 lg:space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="text-sm lg:text-base font-medium transition-colors pb-1"
            :class="[
              isActive(link.path)
                ? 'text-purple-300 border-b-2 border-purple-400'
                : 'text-gray-300 hover:text-purple-300',
            ]"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Desktop Buttons -->
        <div class="hidden md:flex items-center space-x-3 lg:space-x-4">
          <button
            class="px-3 lg:px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-colors text-sm lg:text-base flex items-center space-x-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span class="hidden lg:inline">Search</span>
          </button>
          <router-link
            to="/songs/create"
            class="px-3 lg:px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm lg:text-base flex items-center space-x-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span class="hidden lg:inline">New Tab</span>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-2">
          <button
            class="p-2 rounded-lg border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-colors"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
        <div class="flex flex-col space-y-4">
          <!-- Mobile Navigation Links -->
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="font-medium py-2 border-b border-white/5 text-sm transition-colors"
            :class="[
              isActive(link.path) ? 'text-purple-300' : 'text-gray-300 hover:text-purple-300',
            ]"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </router-link>

          <!-- Mobile Buttons -->
          <div class="flex flex-col space-y-3 pt-2">
            <button
              class="w-full px-4 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-colors flex items-center justify-center space-x-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Search Songs</span>
            </button>
            <router-link
              to="/songs/create"
              class="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center space-x-2"
              @click="isMobileMenuOpen = false"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Add New Song</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

// 🧩 Dynamic Nav Links
const navLinks = [
  { name: 'Dashboard', path: '/' },
  { name: 'Library', path: '/songs' },
  { name: 'Playlists', path: '/playlists' },
  { name: 'Stats', path: '/stats' },
]

// Helper: detect if current route matches or starts with link
const isActive = (path) => {
  if (path === '/') {
    // Only mark Dashboard active when exactly on the home page
    return route.path === '/'
  }
  // For other links, allow nested routes like /songs/123
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- <Nav /> -->

    <!-- Main Content -->
    <main class="container mx-auto px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-12">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <button
          @click="goBack"
          class="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors mb-6 sm:mb-8 mx-auto group"
        >
          <svg
            class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </button>

        <h1 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
          <span
            class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Tab Tracker
          </span>
        </h1>
        <p class="text-base xs:text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Everything you need to know about mastering guitar with the ultimate tab management
          platform
        </p>
      </div>

      <!-- Overview Section -->
      <div
        class="bg-white/5 backdrop-blur-lg rounded-2xl p-4 xs:p-6 sm:p-8 border border-white/10 mb-8 sm:mb-12"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h2 class="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Tab Tracker?
            </h2>
            <p class="text-gray-300 text-base xs:text-lg leading-relaxed mb-4">
              Tab Tracker is built for guitarists who want to organize their learning journey, track
              progress, and access a vast library of tabs all in one place.
            </p>
            <p class="text-gray-300 text-base xs:text-lg leading-relaxed">
              Whether you're a beginner learning your first chords or an experienced player
              mastering complex solos, Tab Tracker adapts to your needs.
            </p>
          </div>
          <div
            class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 aspect-video flex items-center justify-center"
          >
            <div class="text-center">
              <div
                class="w-16 h-16 xs:w-20 xs:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 xs:w-10 xs:h-10 text-white"
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
              <p class="text-white font-semibold text-lg xs:text-xl">5,000+ Active Guitarists</p>
              <p class="text-purple-300 text-sm xs:text-base">Growing community of musicians</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed Features -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <!-- Advanced Features -->
        <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-4 xs:p-6 border border-white/10">
          <h3 class="text-xl xs:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <svg
              class="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Advanced Features
          </h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <span class="text-green-400 text-sm">✓</span>
              </div>
              <div>
                <h4 class="text-white font-semibold">Smart Progress Tracking</h4>
                <p class="text-gray-400 text-sm">
                  Monitor your improvement with detailed analytics and practice insights
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <span class="text-green-400 text-sm">✓</span>
              </div>
              <div>
                <h4 class="text-white font-semibold">Interactive Tab Player</h4>
                <p class="text-gray-400 text-sm">
                  Play along with tabs featuring tempo control and looping sections
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <span class="text-green-400 text-sm">✓</span>
              </div>
              <div>
                <h4 class="text-white font-semibold">Chord Dictionary</h4>
                <p class="text-gray-400 text-sm">
                  Comprehensive library with finger positions and audio examples
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Learning Tools -->
        <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-4 xs:p-6 border border-white/10">
          <h3 class="text-xl xs:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <svg
              class="w-6 h-6 text-pink-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Learning Tools
          </h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <span class="text-blue-400 text-sm">🎵</span>
              </div>
              <div>
                <h4 class="text-white font-semibold">Built-in Metronome</h4>
                <p class="text-gray-400 text-sm">
                  Practice with perfect timing and gradually increase your speed
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <span class="text-blue-400 text-sm">🎸</span>
              </div>
              <div>
                <h4 class="text-white font-semibold">Digital Tuner</h4>
                <p class="text-gray-400 text-sm">
                  Always stay in tune with our accurate digital tuning tool
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              >
                <span class="text-blue-400 text-sm">📊</span>
              </div>
              <div>
                <h4 class="text-white font-semibold">Practice Analytics</h4>
                <p class="text-gray-400 text-sm">
                  Track your practice time and set achievable goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- How It Works -->
      <div
        class="bg-white/5 backdrop-blur-lg rounded-2xl p-4 xs:p-6 sm:p-8 border border-white/10 mb-8 sm:mb-12"
      >
        <h2 class="text-2xl xs:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
          How Tab Tracker Works
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 xs:w-16 xs:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white font-bold text-lg xs:text-xl">1</span>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">Sign Up & Explore</h3>
            <p class="text-gray-400 text-sm xs:text-base">
              Create your free account and browse our extensive tab library
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 xs:w-16 xs:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white font-bold text-lg xs:text-xl">2</span>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">Add Your Tabs</h3>
            <p class="text-gray-400 text-sm xs:text-base">
              Upload your own tabs or save favorites from our community collection
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 xs:w-16 xs:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white font-bold text-lg xs:text-xl">3</span>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">Track & Improve</h3>
            <p class="text-gray-400 text-sm xs:text-base">
              Use our tools to practice effectively and watch your skills grow
            </p>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-4 xs:p-6 sm:p-8 border border-white/10">
        <h2 class="text-2xl xs:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
          Frequently Asked Questions
        </h2>
        <div class="space-y-4 max-w-3xl mx-auto">
          <div class="bg-white/5 rounded-xl p-4">
            <button
              @click="toggleFAQ(0)"
              class="flex justify-between items-center w-full text-left"
            >
              <h3 class="text-white font-semibold text-lg">Is Tab Tracker really free?</h3>
              <svg
                class="w-5 h-5 text-purple-400 transform transition-transform"
                :class="{ 'rotate-180': openFAQ === 0 }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div v-if="openFAQ === 0" class="mt-3 text-gray-300">
              <p>
                Yes! Tab Tracker offers a completely free tier with access to all core features
                including:
              </p>
              <ul class="list-disc list-inside mt-2 space-y-1">
                <li>Unlimited tab storage</li>
                <li>Basic practice tools</li>
                <li>Community tab access</li>
                <li>Progress tracking</li>
              </ul>
            </div>
          </div>

          <div class="bg-white/5 rounded-xl p-4">
            <button
              @click="toggleFAQ(1)"
              class="flex justify-between items-center w-full text-left"
            >
              <h3 class="text-white font-semibold text-lg">Can I use Tab Tracker on any device?</h3>
              <svg
                class="w-5 h-5 text-purple-400 transform transition-transform"
                :class="{ 'rotate-180': openFAQ === 1 }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div v-if="openFAQ === 1" class="mt-3 text-gray-300">
              <p>Absolutely! Tab Tracker is fully available and works seamlessly on:</p>
              <ul class="list-disc list-inside mt-2 space-y-1">
                <li>Smartphones (iOS & Android)</li>
                <li>Tablets</li>
                <li>Desktop computers</li>
                <li>All modern web browsers</li>
              </ul>
              <p class="mt-2">Your data syncs automatically across all devices.</p>
            </div>
          </div>

          <div class="bg-white/5 rounded-xl p-4">
            <button
              @click="toggleFAQ(2)"
              class="flex justify-between items-center w-full text-left"
            >
              <h3 class="text-white font-semibold text-lg">What file formats are supported?</h3>
              <svg
                class="w-5 h-5 text-purple-400 transform transition-transform"
                :class="{ 'rotate-180': openFAQ === 2 }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div v-if="openFAQ === 2" class="mt-3 text-gray-300">
              <p>Tab Tracker supports various tab formats including:</p>
              <ul class="list-disc list-inside mt-2 space-y-1">
                <li>Guitar Pro files (.gp, .gp3, .gp4, .gp5)</li>
                <li>Power Tab (.ptb)</li>
                <li>Text files (.txt) with tab notation</li>
                <li>Our built-in tab editor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-8 sm:mt-12">
        <div
          class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-6 xs:p-8 border border-purple-500/20"
        >
          <h2 class="text-2xl xs:text-3xl font-bold text-white mb-3">
            Ready to Start Your Musical Journey?
          </h2>
          <p class="text-gray-300 text-base xs:text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of guitarists who are already improving their skills with Tab Tracker
          </p>
          <div class="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4">
            <button
              @click="goToSignUp"
              class="px-6 xs:px-8 sm:px-10 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Start Free Today
            </button>
            <button
              @click="goToHome"
              class="px-6 xs:px-8 sm:px-10 py-3 border border-purple-500/50 rounded-xl text-purple-300 font-semibold hover:bg-purple-500/10 transition-all text-sm sm:text-base"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const openFAQ = ref(null)

function toggleFAQ(index) {
  openFAQ.value = openFAQ.value === index ? null : index
}

function goBack() {
  router.back()
}

function goToHome() {
  router.push('/')
}

function goToSignUp() {
  router.push('/register')
}
</script>

<style scoped>
/* Smooth transitions for FAQ */
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

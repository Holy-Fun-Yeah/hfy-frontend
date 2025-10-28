<template>
  <header
    class="navbar bg-base-200 supports-[backdrop-filter]:bg-base-200/80 sticky top-0 z-50 shadow-md backdrop-blur transition-colors"
  >
    <div class="container mx-auto flex items-center justify-between px-4">
      <!-- Brand -->
      <router-link
        to="/"
        class="font-heading text-primary text-2xl font-bold transition-opacity hover:opacity-80"
      >
        BrandName
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden gap-6 text-sm font-medium md:flex">
        <router-link
          to="/"
          class="hover:text-primary transition-colors"
          :class="{ 'text-primary': isActive('/') }"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="hover:text-primary transition-colors"
          :class="{ 'text-primary': isActive('/about') }"
        >
          About
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="btn btn-ghost btn-sm md:hidden"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Nav -->
    <transition name="slide-fade">
      <div
        v-if="menuOpen"
        class="bg-base-100 border-base-300 border-t shadow-inner md:hidden"
      >
        <nav class="flex flex-col space-y-2 p-4">
          <router-link
            to="/"
            class="hover:text-primary"
            :class="{ 'text-primary': isActive('/') }"
            @click="toggleMenu"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="hover:text-primary"
            :class="{ 'text-primary': isActive('/about') }"
            @click="toggleMenu"
          >
            About
          </router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const route = useRoute()
const isActive = (path: string) => route.path === path
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

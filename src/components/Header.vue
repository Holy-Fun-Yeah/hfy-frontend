<template>
  <header class="navbar bg-base-200 shadow-md">
    <div class="container mx-auto flex items-center justify-between px-4">
      <router-link
        to="/"
        class="font-heading text-2xl font-bold"
      >
        BrandName
      </router-link>

      <nav class="hidden gap-6 text-sm font-medium md:flex">
        <router-link
          to="/"
          class="hover:text-primary transition-colors"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="hover:text-primary transition-colors"
          >About</router-link
        >
      </nav>

      <button
        class="btn btn-ghost btn-sm md:hidden"
        @click="toggleMenu"
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

    <div
      v-if="menuOpen"
      class="bg-base-100 border-t md:hidden"
    >
      <nav class="flex flex-col space-y-2 p-4">
        <router-link
          to="/"
          class="hover:text-primary"
          @click="toggleMenu"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="hover:text-primary"
          @click="toggleMenu"
          >About</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
</script>

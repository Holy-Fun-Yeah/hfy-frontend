<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
    <nav class="container mx-auto flex items-center justify-between h-14 px-4">
      <RouterLink to="/" class="font-serif text-xl">Astranova</RouterLink>
      <ul class="hidden md:flex items-center gap-6">
        <li><RouterLink to="/" class="hover:opacity-80">Home</RouterLink></li>
        <li><RouterLink to="/about" class="hover:opacity-80">About</RouterLink></li>
        <li><RouterLink to="/blog" class="hover:opacity-80">Blog</RouterLink></li>
        <li><RouterLink to="/events" class="hover:opacity-80">Events</RouterLink></li>
        <li><RouterLink to="/book" class="hover:opacity-80">Book</RouterLink></li>
      </ul>
      <button class="md:hidden" @click="open = !open" aria-label="Toggle menu">☰</button>
    </nav>
    <transition name="fade">
      <div v-if="open" class="md:hidden px-4 pb-4">
        <ul class="grid gap-2 text-lg">
          <RouterLink to="/" @click="open = false">Home</RouterLink>
          <RouterLink to="/about" @click="open = false">About</RouterLink>
          <RouterLink to="/blog" @click="open = false">Blog</RouterLink>
          <RouterLink to="/events" @click="open = false">Events</RouterLink>
          <RouterLink to="/book" @click="open = false">Book</RouterLink>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

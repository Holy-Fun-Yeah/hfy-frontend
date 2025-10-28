<template>
  <div class="bg-base-100 text-base-content font-body flex min-h-screen flex-col">
    <Header />
    <main class="container mx-auto flex-1 px-4 py-8">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

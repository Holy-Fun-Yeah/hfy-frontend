<script setup lang="ts">
import MainHeader from '@/components/organisms/MainHeader.vue'
import MainFooter from '@/components/organisms/MainFooter.vue'
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <MainHeader />
    <main class="flex-1">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>

<template>
  <footer class="bg-base-200 mt-8 border-t py-6">
    <div class="text-base-content/70 container mx-auto px-4 text-center text-sm">
      <p>&copy; {{ year }} BrandName — All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

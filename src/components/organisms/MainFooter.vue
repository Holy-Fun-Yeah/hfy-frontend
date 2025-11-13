<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
    <p>© {{ year }} Astranova. All rights reserved.</p>
  </footer>
</template>

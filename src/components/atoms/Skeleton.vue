<script setup lang="ts">
const props = defineProps<{ h?: string; w?: string }>()
</script>

<template>
  <div
    class="animate-pulse rounded-md bg-[var(--border)]"
    :style="{ height: props.h || '1rem', width: props.w || '100%' }"
  />
</template>

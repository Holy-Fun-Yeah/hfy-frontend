<script setup lang="ts">
import EmptyState from '@/components/atoms/EmptyState.vue'
import AdminTemplate from '@/components/templates/AdminTemplate.vue'
</script>

<template>
  <AdminTemplate>
    <div class="mb-4 flex items-center justify-between">
      <h1 class="font-serif text-2xl">Posts</h1>
      <button class="cursor-not-allowed rounded border border-[var(--border)] px-3 py-2 opacity-60">
        New (UI)
      </button>
    </div>
    <EmptyState />
  </AdminTemplate>
</template>

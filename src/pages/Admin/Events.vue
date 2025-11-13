<script setup lang="ts">
import EmptyState from '@/components/atoms/EmptyState.vue'
import AdminTemplate from '@/components/templates/AdminTemplate.vue'
</script>

<template>
  <AdminTemplate>
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-serif">Events</h1>
      <button class="px-3 py-2 rounded border border-[var(--border)] opacity-60 cursor-not-allowed">
        New (UI)
      </button>
    </div>
    <EmptyState />
  </AdminTemplate>
</template>

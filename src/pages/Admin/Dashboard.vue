<script setup lang="ts">
import EmptyState from '@/components/atoms/EmptyState.vue'
import AdminTemplate from '@/components/templates/AdminTemplate.vue'
</script>

<template>
  <AdminTemplate>
    <h1 class="mb-4 font-serif text-2xl">Dashboard</h1>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-[var(--radius)] border border-[var(--border)] p-4">
        Active bookings: 12
      </div>
      <div class="rounded-[var(--radius)] border border-[var(--border)] p-4">
        Upcoming events: 3
      </div>
      <div class="rounded-[var(--radius)] border border-[var(--border)] p-4">
        Pending articles: 5
      </div>
    </div>
    <EmptyState class="mt-8"
      >No entries yet. Once content is added, it will appear here automatically.</EmptyState
    >
  </AdminTemplate>
</template>

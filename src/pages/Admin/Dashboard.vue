<script setup lang="ts">
import EmptyState from '@/components/atoms/EmptyState.vue'
import AdminTemplate from '@/components/templates/AdminTemplate.vue'
</script>

<template>
  <AdminTemplate>
    <h1 class="text-2xl font-serif mb-4">Dashboard</h1>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="p-4 rounded-[var(--radius)] border border-[var(--border)]">Active bookings: 12</div>
      <div class="p-4 rounded-[var(--radius)] border border-[var(--border)]">Upcoming events: 3</div>
      <div class="p-4 rounded-[var(--radius)] border border-[var(--border)]">Pending articles: 5</div>
    </div>
    <EmptyState class="mt-8">No entries yet. Once content is added, it will appear here automatically.</EmptyState>
  </AdminTemplate>
</template>

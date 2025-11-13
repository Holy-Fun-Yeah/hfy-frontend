<script setup lang="ts">
import Card from '@/components/atoms/Card.vue'
import EmptyState from '@/components/atoms/EmptyState.vue'
import Section from '@/components/molecules/Section.vue'
import MarketingTemplate from '@/components/templates/MarketingTemplate.vue'

const events = [
  { id: 1, title: 'Solstice Sound Bath — CDMX — Dec 21' },
  { id: 2, title: 'Venus & Creativity Session — Online — Jan 10' },
  { id: 3, title: 'Full Moon Reflection Circle — Guadalajara — Jan 25' },
]
</script>

<template>
  <MarketingTemplate>
    <Section title="Gather under the stars">
      <p class="text-[var(--muted)] mb-6">
        Join guided events and experiences designed to synchronize your inner cycles with cosmic
        motion.
      </p>
      <template v-if="events.length === 0">
        <EmptyState />
      </template>
      <div v-else class="grid md:grid-cols-3 gap-4">
        <Card v-for="e in events" :key="e.id">{{ e.title }}</Card>
      </div>
    </Section>
  </MarketingTemplate>
</template>

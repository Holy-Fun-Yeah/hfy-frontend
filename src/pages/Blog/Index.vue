<script setup lang="ts">
import Card from '@/components/atoms/Card.vue'
import EmptyState from '@/components/atoms/EmptyState.vue'
import Section from '@/components/molecules/Section.vue'
import MarketingTemplate from '@/components/templates/MarketingTemplate.vue'

const items: any[] = []
</script>

<template>
  <MarketingTemplate>
    <Section title="Cosmic perspectives">
      <p class="mb-6 text-[var(--muted)]">
        Fresh articles and reflections on astrology, self-development, and cosmic alignment.
      </p>
      <template v-if="items.length === 0">
        <EmptyState>Stay tuned — our writers are aligning their stars.</EmptyState>
      </template>
      <div
        v-else
        class="grid gap-4 md:grid-cols-3"
      >
        <Card
          v-for="i in items"
          :key="i.id"
          >Post</Card
        >
      </div>
    </Section>
  </MarketingTemplate>
</template>

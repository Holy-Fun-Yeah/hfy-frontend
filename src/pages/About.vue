<script setup lang="ts">
import { onMounted } from 'vue'

import Section from '@/components/molecules/Section.vue'
import MarketingTemplate from '@/components/templates/MarketingTemplate.vue'
import { setMeta } from '@/utils/seo'

onMounted(() => setMeta({ title: 'About — Astranova', description: 'About us (placeholder)' }))
</script>

<template>
  <MarketingTemplate>
    <Section
      title="A cosmic journey reimagined."
      description="Astranova was born from the belief that astrology can be practical, poetic, and empowering."
    >
      <div class="grid gap-6 md:grid-cols-2">
        <div class="space-y-3">
          <p class="text-[var(--muted)]">
            We’re a collective of artists, technologists, and astrologers creating digital
            experiences that help people reconnect with the rhythm of the universe.
          </p>
          <p class="text-[var(--muted)]">
            Our goal is to make ancient wisdom accessible — blending modern aesthetics with
            spiritual depth. Authenticity: we honor both data and intuition. Community: connection
            over prediction. Exploration: learning through movement, art, and reflection.
          </p>
        </div>
        <div
          class="aspect-video rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]"
        />
      </div>
    </Section>
  </MarketingTemplate>
</template>

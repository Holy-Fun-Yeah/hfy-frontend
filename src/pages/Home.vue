<script setup lang="ts">
import { onMounted } from 'vue'

import BaseButton from '@/components/atoms/BaseButton.vue'
import Card from '@/components/atoms/Card.vue'
import Section from '@/components/molecules/Section.vue'
import MarketingTemplate from '@/components/templates/MarketingTemplate.vue'
import { setMeta } from '@/utils/seo'

onMounted(() => setMeta({ title: 'Home — Astranova', description: 'Provisional landing' }))
</script>

<template>
  <MarketingTemplate>
    <Section
      title="Awaken your potential under the stars."
      description="Astranova connects you with transformative experiences guided by modern astrology and ancient intuition."
    >
      <div class="flex flex-col md:flex-row items-center gap-6">
        <div class="flex-1 space-y-4">
          <p class="text-[var(--muted)]">
            Discover curated sessions, workshops, and celestial events designed to help you realign
            with your inner rhythm.
          </p>
          <div class="flex gap-3">
            <BaseButton>Book your session</BaseButton>
            <BaseButton variant="ghost">Learn more</BaseButton>
          </div>
        </div>
        <div class="flex-1">
          <Card>
            <div class="aspect-video grid place-items-center text-[var(--muted)]">
              Media placeholder
            </div>
          </Card>
        </div>
      </div>
    </Section>

    <Section
      eyebrow="Why Astranova"
      title="Guidance for the modern seeker"
      description="Each experience blends mindful science, astrology, and art to bring balance to your everyday life."
    >
      <div class="grid md:grid-cols-3 gap-4">
        <Card>
          <h3 class="font-medium mb-1">Personalized Insights</h3>
          <p class="text-[var(--muted)]">
            Get clear direction through your unique birth chart and energy patterns.
          </p>
        </Card>
        <Card>
          <h3 class="font-medium mb-1">Curated Experiences</h3>
          <p class="text-[var(--muted)]">
            Attend themed events that align with lunar and planetary cycles.
          </p>
        </Card>
        <Card>
          <h3 class="font-medium mb-1">Holistic Balance</h3>
          <p class="text-[var(--muted)]">
            Combine astrology, movement, and reflection to recharge your creative energy.
          </p>
        </Card>
      </div>
    </Section>

    <Section eyebrow="Upcoming events" title="Moments aligned with the cosmos">
      <div class="grid md:grid-cols-3 gap-4">
        <Card>New Moon Meditation — Online, Dec 3</Card>
        <Card>Planetary Reset Workshop — Mexico City, Dec 15</Card>
        <Card>The Energy Map 2026 Preview — Virtual, Jan 4</Card>
      </div>
    </Section>

    <Section eyebrow="From the blog" title="Stories written in the sky">
      <div class="grid md:grid-cols-3 gap-4">
        <Card>How planetary retrogrades actually help you grow</Card>
        <Card>Your daily rituals for Mars season</Card>
        <Card>Why Venus in Libra inspires connection</Card>
      </div>
    </Section>

    <Section max="sm" title="Start your journey today.">
      <div class="flex gap-3">
        <BaseButton>Book now</BaseButton>
        <BaseButton variant="ghost">Join the newsletter</BaseButton>
      </div>
    </Section>
  </MarketingTemplate>
</template>

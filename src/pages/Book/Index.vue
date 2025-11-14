<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue'
import Section from '@/components/molecules/Section.vue'
import MarketingTemplate from '@/components/templates/MarketingTemplate.vue'
</script>

<template>
  <MarketingTemplate>
    <Section
      title="Book your reading"
      description="Choose a path that matches your current phase."
    >
      <ol class="grid gap-4 md:grid-cols-3">
        <li class="rounded-[var(--radius)] border border-[var(--border)] p-4">
          Select your focus — Birth chart, compatibility, or yearly cycle.
        </li>
        <li class="rounded-[var(--radius)] border border-[var(--border)] p-4">
          Pick your time — Flexible sessions across time zones.
        </li>
        <li class="rounded-[var(--radius)] border border-[var(--border)] p-4">
          Share your details — Just your name, date, and intention.
        </li>
      </ol>
      <div class="mt-6 flex gap-3">
        <BaseButton>Continue</BaseButton>
        <BaseButton variant="ghost">Cancel</BaseButton>
      </div>
    </Section>
  </MarketingTemplate>
</template>

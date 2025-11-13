<script setup lang="ts">
const props = defineProps<{
  title?: string
  eyebrow?: string
  description?: string
  max?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <section class="py-12 border-b border-[var(--border)]">
    <div
      class="mx-auto px-4"
      :class="{
        'max-w-screen-sm': props.max === 'sm',
        'max-w-screen-md': props.max === 'md',
        'max-w-5xl': !props.max || props.max === 'lg',
      }"
    >
      <p v-if="eyebrow" class="text-sm text-[var(--muted)] mb-2">{{ eyebrow }}</p>
      <h2 v-if="title" class="font-serif text-3xl mb-3">{{ title }}</h2>
      <p v-if="description" class="text-base text-[var(--muted)] mb-6">{{ description }}</p>
      <slot />
    </div>
  </section>
</template>

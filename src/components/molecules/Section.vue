<script setup lang="ts">
const props = defineProps<{
  title?: string
  eyebrow?: string
  description?: string
  max?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <section class="border-b border-[var(--border)] py-12">
    <div
      class="mx-auto px-4"
      :class="{
        'max-w-screen-sm': props.max === 'sm',
        'max-w-screen-md': props.max === 'md',
        'max-w-5xl': !props.max || props.max === 'lg',
      }"
    >
      <p
        v-if="eyebrow"
        class="mb-2 text-sm text-[var(--muted)]"
      >
        {{ eyebrow }}
      </p>
      <h2
        v-if="title"
        class="mb-3 font-serif text-3xl"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mb-6 text-base text-[var(--muted)]"
      >
        {{ description }}
      </p>
      <slot />
    </div>
  </section>
</template>

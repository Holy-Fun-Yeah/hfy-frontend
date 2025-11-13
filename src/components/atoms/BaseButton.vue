<script setup lang="ts">
type Variant = 'primary' | 'ghost'

const props = defineProps<{
  variant?: Variant
  as?: 'button' | 'a'
  href?: string
  disabled?: boolean
}>()

const Comp = props.as ?? 'button'
</script>

<template>
  <component
    :is="Comp"
    :href="href"
    class="inline-flex items-center justify-center px-4 py-2 rounded-[var(--radius)] border border-[var(--border)] transition hover:opacity-90 focus:outline-none focus-visible:ring data-[v=primary]:bg-[var(--primary)] data-[v=primary]:text-black data-[v=ghost]:bg-transparent data-[v=ghost]:text-[var(--fg)]"
    :data-v="props.variant ?? 'primary'"
    :disabled="Comp === 'button' ? disabled : undefined"
  >
    <slot />
  </component>
</template>

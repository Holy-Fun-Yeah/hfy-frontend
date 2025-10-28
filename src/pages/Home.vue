<template>
  <DefaultLayout>
    <section class="py-16 text-center">
      <h1 class="font-heading mb-4 text-4xl font-bold md:text-5xl">
        Welcome to <span class="text-primary">BrandName</span>
      </h1>
      <p class="text-base-content/70 mx-auto max-w-2xl">
        A clean starting point for your client’s content. This section can later be managed from the
        CMS or GrapesJS editor.
      </p>
      <div class="mt-6">
        <router-link
          to="/about"
          class="btn btn-primary"
          >Learn more</router-link
        >
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

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
      <p class="text-base-content/80 p-4 text-justify indent-6 text-base leading-relaxed md:p-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas est nibh, ornare eget
        sapien ut, consequat vehicula mi. Mauris faucibus auctor rutrum. Nullam accumsan sem nec
        eros posuere malesuada. In sit amet arcu ligula. Cras vel tortor vel sapien maximus ultrices
        eu non diam. Curabitur cursus vehicula felis. Nunc vitae ipsum vulputate, dapibus libero sit
        amet, dapibus nunc. Duis consectetur sed dui at condimentum. Suspendisse ultrices vulputate
        urna nec vulputate. Aliquam erat volutpat. Fusce sodales purus nec velit commodo aliquet.
        Quisque eget enim at libero pharetra tincidunt sit amet sed odio. Nulla aliquet purus vitae
        nisl finibus finibus. Etiam rhoncus leo at dui dignissim posuere. Pellentesque eget dolor ac
        quam mattis fermentum. Donec at vehicula felis.
      </p>

      <p class="text-base-content/80 p-4 text-justify indent-6 text-base leading-relaxed md:p-6">
        Curabitur accumsan felis non mauris luctus, in posuere elit rhoncus. Aliquam erat volutpat.
        Maecenas tempor posuere elit sed cursus. Integer scelerisque vel ipsum ut commodo. Sed
        iaculis massa pulvinar nibh consectetur, eu blandit urna commodo. Donec at velit at sem
        blandit mollis. Nam eget nunc finibus, pulvinar justo a, maximus est. Proin ut consectetur
        nisi. Donec convallis nulla eu leo fringilla laoreet. Suspendisse dapibus felis nisi, non
        imperdiet magna blandit in. Curabitur ullamcorper lectus quis metus interdum pellentesque.
        Aliquam nec pellentesque lectus. Sed euismod nisl consectetur felis pulvinar luctus. Integer
        at posuere mi. Praesent libero lorem, scelerisque sit amet condimentum vel, eleifend eget
        lacus. Aenean posuere scelerisque sapien a finibus.
      </p>
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

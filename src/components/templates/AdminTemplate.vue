<template>
  <div class="grid min-h-dvh md:grid-cols-[240px_1fr]">
    <aside class="border-r border-[var(--border)] p-4">
      <nav class="space-y-2">
        <RouterLink
          to="/admin"
          class="block hover:opacity-80"
          >Dashboard</RouterLink
        >
        <RouterLink
          to="/admin/posts"
          class="block hover:opacity-80"
          >Posts</RouterLink
        >
        <RouterLink
          to="/admin/events"
          class="block hover:opacity-80"
          >Events</RouterLink
        >
        <RouterLink
          to="/admin/appointments"
          class="block hover:opacity-80"
          >Appointments</RouterLink
        >
      </nav>
    </aside>
    <main class="p-6">
      <slot />
    </main>
  </div>
</template>

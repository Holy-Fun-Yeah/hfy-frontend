import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/pages/Home.vue') },
    { path: '/about', component: () => import('@/pages/About.vue') },
    { path: '/blog', component: () => import('@/pages/Blog/Index.vue') },
    { path: '/blog/:slug', component: () => import('@/pages/Blog/[slug].vue') },
    { path: '/events', component: () => import('@/pages/Events/Index.vue') },
    { path: '/events/:id', component: () => import('@/pages/Events/[id].vue') },
    { path: '/book', component: () => import('@/pages/Book/Index.vue') },
    { path: '/book/success', component: () => import('@/pages/Book/Success.vue') },
    { path: '/book/cancel', component: () => import('@/pages/Book/Cancel.vue') },
    { path: '/admin', component: () => import('@/pages/Admin/Dashboard.vue') },
    { path: '/admin/posts', component: () => import('@/pages/Admin/Posts.vue') },
    { path: '/admin/events', component: () => import('@/pages/Admin/Events.vue') },
    { path: '/admin/appointments', component: () => import('@/pages/Admin/Appointments.vue') },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

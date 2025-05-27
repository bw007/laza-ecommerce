import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BaseLayout',
      component: () => import('@/layouts/BaseLayout.vue'),
      children: routes
    }
  ]
})

export default router

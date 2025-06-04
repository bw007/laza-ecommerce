export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      icon: 'House',
      bottomNav: true,
      showInSidebar: false
    }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/views/CategoriesView.vue'),
    meta: {
      icon: 'Tags',
      bottomNav: true,
      showInSidebar: false
    }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('@/views/FavoritesView.vue'),
    meta: {
      icon: 'Heart',
      bottomNav: true,
      showInSidebar: false
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/CartView.vue'),
    meta: {
      icon: 'ShoppingCart',
      bottomNav: true,
      showInSidebar: false
    }
  }
]
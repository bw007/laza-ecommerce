export default [
  {
    path: 'new-arravial',
    name: 'NewArravial',
    component: () => import('@/views/product/NewArrivalView.vue'),
    meta: {
      title: 'Products'
    }
  },
  {
    path: 'best-selling',
    name: 'BestSelling',
    component: () => import('@/views/product/BestSellingView.vue'),
    meta: {
      title: 'Best Selling'
    }
  },
  {
    path: 'special-offers',
    name: 'SpecialOffers',
    component: () => import('@/views/product/SpecialOffersView.vue'),
    meta: {
      title: 'Special Offers'
    }
  },
  {
    path: ':id',
    name: 'ProductDetail',
    component: () => import('@/views/product/ProductDetail.vue'),
    meta: {
      title: 'Product Detail'
    }
  }
]

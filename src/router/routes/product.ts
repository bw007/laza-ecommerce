export default [
  {
    path: 'new-arravials',
    name: 'NewArravial',
    component: () => import('@/views/products/NewArrivalView.vue'),
    meta: {
      title: 'Products'
    }
  },
  // {
  //   path: ':id',
  //   name: 'ProductDetail',
  //   component: () => import('@/pages/product/ProductDetail.vue'),
  //   meta: {
  //     title: 'Product Detail'
  //   }
  // }
]

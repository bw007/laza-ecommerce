import main from "./routes/main";
import product from "./routes/product";

export const routes = [
  {
    path: '',
    name: 'MainLayout',
    meta: {
      layout: 'main'
    },
    children: main
  },
  {
    path: 'products',
    name: 'ProductsGridLayout',
    meta: {
      layout: 'products-grid'
    },
    children: product
  }
]
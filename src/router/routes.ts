import main from "./routes/main";

export const routes = [
  {
    path: '',
    name: 'MainLayout',
    meta: {
      layout: 'main'
    },
    children: main
  }
]
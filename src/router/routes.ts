import main from "./routes/main";

export const routes = [
  {
    path: '',
    meta: {
      layout: 'main'
    },
    children: main
  }
]
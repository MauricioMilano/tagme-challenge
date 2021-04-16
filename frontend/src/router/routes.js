
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: { requiresAuth: true } },
      {
        path: 'receitas', component: () => import('pages/Receitas.vue'), meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/login', component: () => import('pages/Login.vue')
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

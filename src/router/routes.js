
const routes = [
  {
    path: '/', component: () => import('pages/login.vue'),
   
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/dashboard', component: () => import('pages/Index.vue'),
        path: '/register', component: () => import('pages/register.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

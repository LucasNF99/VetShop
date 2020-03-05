
const routes = [
  {
    path: '/',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'estoque', name: 'estoque', component: () => import('pages/estoque.vue') },
    ],
  },
  {
    path: '/cliente',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/cliente.vue') },
    ],
  },
  {
    path: '/estoque-produto-medicamento',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/produto.vue') },
    ],
  },
  {
    path: '/caixa',
    component: () => import('layouts/noHeaderIndex.vue'),
    children: [
      { path: '', component: () => import('pages/caixa.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/noHeaderIndex.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/login.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;


const routes = [
  {
    path: '/',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/noHeaderIndex.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') },
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


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
    path: '/gerencia',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/gerencia.vue') },
    ],
  },
  {
    path: '/estoque-medicamento',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/medicamento.vue') },
    ],
  },
  {
    path: '/gerencia-funcionario',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/list-employee.vue') },
    ],
  },
  {
    path: '/estoque-produto',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/produto.vue') },
    ],
  },
  {
    path: '/listar-clientes',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/list-cli.vue') },
    ],
  },
  {
    path: '/listar-paciente',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/list-patient.vue') },
    ],
  },
  {
    path: '/listar-consultas',
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', component: () => import('pages/list-appointment.vue') },
    ],
  },
  {
    path: '/caixa',
    component: () => import('layouts/index.vue'),
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

import store from '../store';

function requireAuth(to, from, next) {
  if (!store().state.auth.isUserLogged) {
    next({ name: 'login' });
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    beforeEnter: requireAuth,
    component: () => import('layouts/index.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'estoque', name: 'estoque', component: () => import('pages/estoque.vue') },
      { path: 'cliente', component: () => import('pages/cliente.vue') },
      { path: 'gerencia', component: () => import('pages/gerencia.vue') },
      { path: 'estoque-medicamento', component: () => import('pages/medicamento.vue') },
      { path: 'gerencia-funcionario', component: () => import('pages/list-employee.vue') },
      { path: 'gerencia-venda', component: () => import('pages/list-sale.vue') },
      { path: 'estoque-produto', component: () => import('pages/produto.vue') },
      { path: 'listar-clientes', component: () => import('pages/list-cli.vue') },
      { path: 'listar-paciente', component: () => import('pages/list-patient.vue') },
      { path: 'listar-consulta', component: () => import('pages/list-appointment.vue') },
      { path: 'listar-prontuario', component: () => import('pages/list-record.vue') },
      { path: 'caixa', component: () => import('pages/caixa.vue') },
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

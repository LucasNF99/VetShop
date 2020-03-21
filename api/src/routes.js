import { Router } from 'express';

import ProdutoController from './app/controllers/ProdutoController';
import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

routes.post('/produto', ProdutoController.store);
routes.post('/usuario', UsuarioController.store);

routes.put('/produto', ProdutoController.update);
routes.put('/usuario', UsuarioController.update);

export default routes;

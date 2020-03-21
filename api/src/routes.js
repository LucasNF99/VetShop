import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import ProdutoController from './app/controllers/ProdutoController';
import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/produto', ProdutoController.store);
routes.post('/usuario', UsuarioController.store);

routes.put('/produto', ProdutoController.update);
routes.put('/usuario', UsuarioController.update);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
})

export default routes;

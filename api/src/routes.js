import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import ProdutoController from './app/controllers/ProdutoController';
import UsuarioController from './app/controllers/UsuarioController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/produto', ProdutoController.store);
routes.post('/usuario', UsuarioController.store);
routes.post('/files', upload.single('file'), FileController.store);


routes.put('/produto', ProdutoController.update);
routes.put('/usuario', UsuarioController.update);

routes.get('/produto', ProdutoController.index);
routes.get('/produto/:id', ProdutoController.show);

routes.delete('/produto/:id', ProdutoController.delete);

export default routes;

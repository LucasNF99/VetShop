import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import ProdutoController from './app/controllers/ProdutoController';
import UsuarioController from './app/controllers/UsuarioController';
import FileController from './app/controllers/FileController';
import MedicamentoController from './app/controllers/MedicamentoController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/produto', ProdutoController.store);
routes.post('/medicamento', MedicamentoController.store);
routes.post('/usuario', UsuarioController.store);
routes.post('/files', upload.single('file'), FileController.store);


routes.put('/produto', ProdutoController.update);
routes.put('/medicamento', MedicamentoController.update);
routes.put('/usuario', UsuarioController.update);

routes.get('/produto', ProdutoController.index);
routes.get('/produto/:id', ProdutoController.show);
routes.get('/medicamento', MedicamentoController.index);
routes.get('/medicamento/:id', MedicamentoController.index);


routes.delete('/medicamento/:id', MedicamentoController.delete);
routes.delete('/produto/:id', ProdutoController.delete);

export default routes;

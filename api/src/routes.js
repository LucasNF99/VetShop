import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import ProdutoController from './app/controllers/ProdutoController';
import UsuarioController from './app/controllers/UsuarioController';
import FileController from './app/controllers/FileController';
import MedicamentoController from './app/controllers/MedicamentoController';
import VendaController from './app/controllers/VendaController';
import ClienteController from './app/controllers/ClienteController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/produto', ProdutoController.store);
routes.post('/medicamento', MedicamentoController.store);
routes.post('/usuario', UsuarioController.store);
routes.post('/cliente', ClienteController.store);
routes.post('/venda', VendaController.store);
routes.post('/files', upload.single('file'), FileController.store);


routes.put('/produto', ProdutoController.update);
routes.put('/medicamento', MedicamentoController.update);
routes.put('/cliente', ClienteController.store);
routes.put('/usuario', UsuarioController.update);
routes.put('/venda', VendaController.update);

routes.get('/produto', ProdutoController.index);
routes.get('/produto/:id', ProdutoController.show);
routes.get('/medicamento', MedicamentoController.index);
routes.get('/medicamento/:id', MedicamentoController.show);
routes.get('/venda', VendaController.index);
routes.get('/venda/:id', VendaController.show);
routes.get('/cliente', ClienteController.index);
routes.get('/cliente/:id', ClienteController.show);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);



routes.delete('/medicamento/:id', MedicamentoController.delete);
routes.delete('/produto/:id', ProdutoController.delete);
routes.delete('/venda/:id', VendaController.delete);
routes.delete('/cliente/:id', ClienteController.delete);
routes.delete('/usuario/:id', UsuarioController.delete);



export default routes;

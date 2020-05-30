import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

const { Router } = express;

import ProdutoController from './app/controllers/ProdutoController';
import UsuarioController from './app/controllers/UsuarioController';
import FileController from './app/controllers/FileController';
import MedicamentoController from './app/controllers/MedicamentoController';
import VendaController from './app/controllers/VendaController';
import ClienteController from './app/controllers/ClienteController';
import PacienteController from './app/controllers/PacienteController';
import ProntuarioController from './app/controllers/ProntuarioController';
import ConsultaController from './app/controllers/ConsultaController';

const routes = new Router();
const upload = multer(multerConfig);

//Post
routes.post('/produto', ProdutoController.store);
routes.post('/medicamento', MedicamentoController.store);
routes.post('/usuario', UsuarioController.store);
routes.post('/cliente', ClienteController.store);
routes.post('/paciente', PacienteController.store);
routes.post('/venda', VendaController.store);
routes.post('/prontuario', ProntuarioController.store);
routes.post('/consulta', ConsultaController.store);

routes.post('/files', upload.single('file'), FileController.store);

//Put
routes.put('/produto', ProdutoController.update);
routes.put('/medicamento', MedicamentoController.update);
routes.put('/cliente', ClienteController.update);
routes.put('/usuario', UsuarioController.update);
routes.put('/venda', VendaController.update);
routes.put('/paciente', PacienteController.update);
routes.put('/prontuario', ProntuarioController.update);
routes.put('/consulta', ConsultaController.update);


//Get
routes.get('/produto', ProdutoController.index);
routes.get('/produto/:id', ProdutoController.show);
routes.get('/medicamento', MedicamentoController.index);
routes.get('/medicamento/:id', MedicamentoController.show);
routes.get('/venda', VendaController.index);
routes.get('/venda/:id', VendaController.show);
routes.get('/cliente', ClienteController.index);
routes.get('/cliente/:id', ClienteController.show);
routes.get('/paciente', PacienteController.index);
routes.get('/paciente/:id', PacienteController.show);
routes.get('/prontuario', ProntuarioController.index);
routes.get('/prontuario/:id', ProntuarioController.show);
routes.get('/consulta', ConsultaController.index);
routes.get('/consulta/:id', ConsultaController.show);
routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);

//Delete
routes.delete('/medicamento/:id', MedicamentoController.delete);
routes.delete('/produto/:id', ProdutoController.delete);
routes.delete('/venda/:id', VendaController.delete);
routes.delete('/cliente/:id', ClienteController.delete);
routes.delete('/usuario/:id', UsuarioController.delete);
routes.delete('/paciente/:id', PacienteController.delete);
routes.delete('/prontuario/:id', ProntuarioController.delete);
routes.delete('/consulta/:id', ConsultaController.delete);



export default routes;

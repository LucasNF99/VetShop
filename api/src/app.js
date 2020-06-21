import express from 'express';
import 'express-async-errors';
import routes from './routes';
import handleError from '../middlewares/handlerError';
import cors from 'cors';

import './database'

class App {
  constructor() {
    this.server = express();
    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
    //this.server.use(handleError);
  }
}

export default new App().server;
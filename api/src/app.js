import express from 'express'
import routes from './routes'

var cors = require('cors')
var app = express()

import './database'

app.use(cors())

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server;
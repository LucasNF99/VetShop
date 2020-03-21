import Sequelize from 'sequelize';

import Produto from '../app/models/Produto';
import Usuario from '../app/models/Usuario';

import databaseConfig from '../config/database';

const models = [Produto, Usuario];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
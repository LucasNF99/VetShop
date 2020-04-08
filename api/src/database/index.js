import Sequelize from 'sequelize';

import Produto from '../app/models/Produto';
import Usuario from '../app/models/Usuario';
import File from '../app/models/File';
import Medicamento from '../app/models//Medicamento';

import databaseConfig from '../config/database';

const models = [Produto, Usuario, File, Medicamento];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
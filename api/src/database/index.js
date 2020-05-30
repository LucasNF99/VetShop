import Sequelize from 'sequelize';

import Produto from '../app/models/Produto';
import Usuario from '../app/models/Usuario';
import File from '../app/models/File';
import Medicamento from '../app/models/Medicamento';
import Venda from '../app/models/Venda';
import Cliente from '../app/models/Cliente';
import Paciente from '../app/models/Paciente';
import Prontuario from '../app/models/Prontuario';
import Consulta from '../app/models/Consulta';

import databaseConfig from '../config/database';

const models = [Produto, Usuario, File, Medicamento, Venda, Cliente, Paciente, Prontuario, Consulta];

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
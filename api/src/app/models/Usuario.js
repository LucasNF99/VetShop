import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.INTEGER,
        senha: Sequelize.STRING,
        telefone: Sequelize.STRING,
        bairro: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.STRING,
        cpf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Usuario;

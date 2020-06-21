import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        telefone: Sequelize.STRING,
        bairro: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.STRING,
        cpf: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Cliente;

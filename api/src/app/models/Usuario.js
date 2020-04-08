import Sequelize, { Model } from 'sequelize';

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

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id' });
  }

}

export default Usuario;

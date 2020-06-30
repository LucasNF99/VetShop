import Sequelize, { Model } from 'sequelize';

class Prontuario extends Model {
  static init(sequelize) {
    super.init(
      {
        laudo: Sequelize.STRING,
        exame: Sequelize.STRING,
        prescricao: Sequelize.STRING,
        queixas: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Consult, { foreignKey: 'consulta_id' });
  }
}

export default Prontuario;

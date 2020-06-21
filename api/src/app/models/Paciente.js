import Sequelize, { Model } from 'sequelize';

class Paciente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        especie: Sequelize.STRING,
        raca: Sequelize.STRING,
        peso: Sequelize.STRING,
        altura: Sequelize.STRING,
        dataNascimento: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id' });
  }

}
export default Paciente;

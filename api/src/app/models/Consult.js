import Sequelize, { Model } from 'sequelize';

class Consult extends Model {
  static init(sequelize) {
    super.init(
      {
        data: Sequelize.STRING,
        hora: Sequelize.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'consult',
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Paciente, { foreignKey: 'paciente_id' });
  }


}

export default Consult;

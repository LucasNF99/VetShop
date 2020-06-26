import Sequelize, { Model } from 'sequelize';

class Venda extends Model {
  static init(sequelize) {
    super.init(
      {
        data: Sequelize.STRING,
        valor: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Medicamento, { foreignKey: 'medicamento_id' });
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    this.belongsTo(models.Produto, { foreignKey: 'produto_id' });
  }

}

export default Venda;

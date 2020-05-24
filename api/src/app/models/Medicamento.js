import Sequelize, { Model } from 'sequelize';

class Medicamento extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        quantidade: Sequelize.INTEGER,
        descricao: Sequelize.STRING,
        precoCompra: Sequelize.FLOAT,
        precoVenda: Sequelize.FLOAT,
        fornecedor: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Medicamento;

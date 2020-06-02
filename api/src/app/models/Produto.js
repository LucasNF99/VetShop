import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        quantidade: Sequelize.INTEGER,
        descricao: Sequelize.STRING,
        precoCompra: Sequelize.FLOAT,
        precoVenda: Sequelize.FLOAT,
        fornecedor: Sequelize.STRING,
        classe: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Produto;

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Produtos', {
      idProduto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      precoCompra: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      precoVenda: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      fornecedor: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });

  },

  down: queryInterface => {
    return queryInterface.dropTable('produtos');

  }
};

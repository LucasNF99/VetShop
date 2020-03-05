'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      idProduto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {

      },
      quantidade: {

      },
      descricao: {

      },
      precoCompra: {

      },
      precoVenda: {

      },
      fornecedor: {

      }
    });

  },

  down: queryInterface => {
    return queryInterface.dropTable('produtos');

  }
};

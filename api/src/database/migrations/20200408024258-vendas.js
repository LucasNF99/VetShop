'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data: {
        type: Sequelize.DATE,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      medicamento_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medicamentos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      produto_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'produtos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },


      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  down: queryInterface => {
    return queryInterface.dropTable('vendas');

  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('prontuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      laudo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      exame: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      prescricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      queixas: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('prontuarios');

  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('prontuarios', 'consulta_id', {
      type: Sequelize.INTEGER,
      references: { model: 'consultas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('prontuarios', 'consulta_id');
  },
};
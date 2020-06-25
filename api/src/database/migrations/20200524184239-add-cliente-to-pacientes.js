module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('pacientes', 'cliente_id', {
      type: Sequelize.INTEGER,
      references: { model: 'clientes', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('pacientes', 'cliente_id');
  },
};
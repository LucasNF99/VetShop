module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('consultas', 'paciente_id', {
      type: Sequelize.INTEGER,
      references: { model: 'pacientes', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('consultas', 'paciente_id');
  },
};

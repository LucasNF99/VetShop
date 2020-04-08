module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('vendas', 'medicamento_id', {
      type: Sequelize.INTEGER,
      references: { model: 'medicamentos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('vendas', 'medicamento_id');
  },
};

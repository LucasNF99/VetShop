module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('vendas', 'usuario_id', {
      type: Sequelize.INTEGER,
      references: { model: 'usuarios', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('vendas', 'usuario_id');
  },
};
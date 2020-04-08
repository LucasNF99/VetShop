module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('vendas', 'produto_id', {
      type: Sequelize.INTEGER,
      references: { model: 'produtos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('vendas', 'produto_id');
  },
};
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('produtos', 'classe', {
      type: Sequelize.STRING,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('produtos', 'classe');
  },
};
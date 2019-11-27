'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('FinancialTransactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      providerId: { 
        type: Sequelize.INTEGER
      },
      groupId: {
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.STRING(255)
      },
      paymentType: {
        type: Sequelize.STRING(50)
      },
      paymentCategory: {
        type: Sequelize.STRING(50)
      },
      transactionType: {
        type: Sequelize.STRING(50)
      },
      username: {
        type: Sequelize.STRING(50)
      },
      skin: {
        type: Sequelize.STRING(50)
      },
      transactionId: {
        type: Sequelize.STRING(50)
      },
      debit: {
        type: Sequelize.DECIMAL
      },
      credit: {
        type: Sequelize.DECIMAL
      },
      dateTime: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: queryInterface => {
    return queryInterface.dropTable('Transactions');
  }
};
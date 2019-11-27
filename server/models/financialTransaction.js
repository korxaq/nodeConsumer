'use strict';
module.exports = (sequelize, DataTypes) => {

  const financialTransaction = sequelize.define('FinancialTransactions', {
    providerId: { 
      type: DataTypes.INTEGER
    },
    groupId: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    paymentType: {
      type: DataTypes.STRING
    },
    paymentCategory: {
      type: DataTypes.STRING
    },
    transactionType: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    skin: {
      type: DataTypes.STRING
    },
    transactionId: {
      type: DataTypes.STRING
    },
    debit: {
      type: DataTypes.DECIMAL
    },
    credit: {
      type: DataTypes.DECIMAL
    },
    dateTime: {
      type: DataTypes.DATE
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    }
  });

  return financialTransaction;
};
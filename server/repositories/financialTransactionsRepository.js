const accountingConfig = require('../config/accountingConfig.json');

module.exports.create = function(kafkaRecord) {
  const financialTransactions = require('../models').FinancialTransactions;

  return financialTransactions.create({
    providerId: kafkaRecord.transactionNumber,
    groupId: kafkaRecord.gameNumber,
    description: "Game Type: " + kafkaRecord.gameType +
                  " Table Name: " + kafkaRecord.tableNumber +
                  " messageType: " + kafkaRecord.type,
    paymentType: accountingConfig.paymentType,
    paymentCategory: accountingConfig.paymentCategory,
    transactionType: accountingConfig.transactionType,
    username: kafkaRecord.playerNumber,
    skin: "XXX",
    transactionId: "",
    debit: kafkaRecord.debit ? kafkaRecord.debit.value : 0,
    credit: kafkaRecord.credit ? kafkaRecord.credit.value : 0,
    dateTime: kafkaRecord.dateTime
  });
}

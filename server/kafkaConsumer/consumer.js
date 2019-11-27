module.exports = function (consumerId) {
  var ConsumerGroup = require('kafka-node').ConsumerGroup;

  var consumerOptions = require('../config/consumerConfig.json');

  var topics = ['CashGames'];

  return new ConsumerGroup(Object.assign({ id: consumerId }, consumerOptions), topics );
};
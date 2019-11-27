let async = require('async');

let consumerGroup  = require("./server/kafkaConsumer/consumer") ("consumer");

consumerGroup.on('error', err => { 
  console.error(err); 
});

consumerGroup.on('message', onMessage);

function onMessage (message) {
  // this is just a reminder of the different data in the kafka message
  // message.topic, message.partition, message.offset, message.value
  var kafkaMessage = JSON.parse(message.value);
  if (kafkaMessage.type !== "HandCompleted") {
    let finalcialTransactionsRepo = require('./server/repositories/financialTransactionsRepository');
    finalcialTransactionsRepo.create(kafkaMessage)
      .then(result => {
        if (result) {
          consumerGroup.commit();
        }
      }, err => { 
        console.error(err); 
      });
  }
}

process.on('SIGINT', () => {
  async.each([consumerGroup], (consumer, callback) => {
    consumer.close(true, callback);
  });
});

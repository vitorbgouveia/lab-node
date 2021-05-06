
const { Kafka } = require('kafkajs');
const { v4: uuidv4 } = require('uuid');
const { KAFKA_CONNECTION_STRING: connectionString, KAFKA_CLIENT_ID } = process.env;

const kafka = {
  watchMessage: async topicName => {
    const kafkaClient = new Kafka({
        clientId: KAFKA_CLIENT_ID,
        brokers: [connectionString]
    });
    
    const createTopic  = async () => {
        const admin = kafkaClient.admin();
        await admin.connect();

        const foundTopic = (await admin.listTopics()).some(topic => topic === topicName );
        if (!foundTopic) {
            await admin.createTopics({
                topics: [
                    { topic: topicName }
                ],
            });
        }

        await admin.disconnect();   
    };
    await createTopic();

    const processConsumer  = async () => {
        const groupId = uuidv4();

        const notificationsConsumer = kafkaClient.consumer({ groupId });
        await notificationsConsumer.connect();
        await notificationsConsumer.subscribe({ topic: topicName });
        
        console.log(' [*] Waiting for messages Kafka', groupId);

        await notificationsConsumer.run({
            eachMessage: async ({ message }) => {
                console.log(' [*] Recived Kafka', groupId, message.value.toString());
            },
        });

    };

    processConsumer();
  },
  sendMessage: (topicName, msg) => {
    msg = JSON.stringify(msg);
    const kafkaClient = new Kafka({
        clientId: KAFKA_CLIENT_ID,
        brokers: [connectionString]
    });

    const processProducer  = async () => {
        const producer = kafkaClient.producer();
        await producer.connect();
        await producer.send({
            topic: topicName,
            messages: [ { value: msg } ],
        });
    };

    processProducer().then(() => console.log(" [x] Send message to kafka %s", msg) );
  },
};

module.exports = {
    kafka,
};
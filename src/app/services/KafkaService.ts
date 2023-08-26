import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { Consumer, Kafka } from 'kafkajs';
import { OperationType } from '@/app/domains/DTOs/OperationType';

@Injectable()
export class KafkaService implements OnApplicationShutdown, OnApplicationBootstrap {
    private readonly kafka: Kafka;

    private consumer: Consumer;

    constructor() {
        // const ip = execSync(`hostname -I | cut -d " " -f 1`).toString().replace('\n', '');
        const ip = 'localhost';
        this.kafka = new Kafka({
            brokers: [`${ip}:9092`],
        });
    }

    async onApplicationBootstrap(): Promise<void> {
        const { groups } = await this.kafka.admin().listGroups();
        groups.forEach((group) => {
            console.log({ group });
        });
        const groupDescriptions = await this.kafka.admin().describeGroups(groups.map((group) => group.groupId));
        groupDescriptions.groups.forEach((groupDescription) => {
            console.log({ groupDescription });
        });
        await this.listen();
    }

    async onApplicationShutdown(): Promise<void> {
        await this.consumer.disconnect();
    }

    private async listen(): Promise<void> {
        try {
            const consumer = this.kafka.consumer({
                groupId: 'console-consumer-24440',
            });
            this.consumer = consumer;

            await consumer.connect();
            await consumer.subscribe({ topics: ['cdc-using-debezium-topic.public.User'], fromBeginning: true });

            await consumer.run({
                eachMessage: async ({ topic, message }) => {
                    if (!message.value) {
                        return;
                    }
                    const parsedMessage = JSON.parse(message.value.toString());
                    const eventPayload = {
                        topic,
                        database: parsedMessage.payload.source.db,
                        table: parsedMessage.payload.source.table,
                        operationType: OperationType[parsedMessage.payload.op],
                        data: parsedMessage.payload.after,
                        previousData: parsedMessage.payload.before,
                    };
                    console.log({ eventPayload });
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
}

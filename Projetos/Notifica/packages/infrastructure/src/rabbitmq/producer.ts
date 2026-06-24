import amqplib from 'amqplib';

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost';

let channel: amqplib.Channel;

export async function connectProducer(): Promise<void> {
  const conn = await amqplib.connect(RABBITMQ_URL);
  channel = await conn.createChannel();
  await channel.assertQueue('notifications', { durable: true });
}

export function publish(queue: string, message: object): void {
  if (!channel) throw new Error('RabbitMQ not connected');
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { persistent: true });
}

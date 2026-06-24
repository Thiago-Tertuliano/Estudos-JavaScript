import amqplib from 'amqplib';

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost';

export async function startConsumer(
  queue: string,
  onMessage: (msg: any) => void
): Promise<void> {
  const conn = await amqplib.connect(RABBITMQ_URL);
  const channel = await conn.createChannel();
  await channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => {
    if (msg) {
      const content = JSON.parse(msg.content.toString());
      onMessage(content);
      channel.ack(msg);
    }
  });
}

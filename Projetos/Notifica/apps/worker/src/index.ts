import { startConsumer } from '@notifica/infrastructure';

console.log('[Worker] Starting RabbitMQ consumer...');

startConsumer('notifications', (msg) => {
  console.log('[Worker] Processing notification:', msg.title);
  if (msg.userId) {
    console.log(`[Worker] Sending push notification to user ${msg.userId}: ${msg.title}`);
  }
});

console.log('[Worker] Listening for messages...');

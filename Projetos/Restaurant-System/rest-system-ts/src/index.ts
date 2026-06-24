import express from 'express';
import { authController } from './controllers/authController';
import { tableController } from './controllers/tableController';
import { categoryController, menuItemController } from './controllers/menuController';
import { orderController } from './controllers/orderController';
import { paymentController } from './controllers/paymentController';
import { reservationController } from './controllers/reservationController';
import { authMiddleware } from './services/AuthService';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/auth', authController);
app.use('/tables', authMiddleware, tableController);
app.use('/categories', authMiddleware, categoryController);
app.use('/menu-items', authMiddleware, menuItemController);
app.use('/orders', authMiddleware, orderController);
app.use('/payments', authMiddleware, paymentController);
app.use('/reservations', reservationController);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal error' });
});

app.listen(PORT, () => console.log(`Restaurant System (TS) running on port ${PORT}`));

export default app;

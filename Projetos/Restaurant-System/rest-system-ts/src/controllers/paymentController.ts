import { Router, Request, Response } from 'express';
import { PaymentService } from '../services/PaymentService';
import { PaymentRequest } from '../dto/payments/PaymentRequest';

const router = Router();
const paymentService = new PaymentService();

router.get('/', (req: Request, res: Response) => res.json(paymentService.list()));
router.post('/', (req: Request, res: Response) => { try { const d = new PaymentRequest(req.body.orderId, req.body.amount, req.body.method); d.validate(); res.status(201).json(paymentService.create(d)); } catch (e: any) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/confirm', (req: Request, res: Response) => { try { res.json(paymentService.confirm(Number(req.params.id))); } catch (e: any) { res.status(400).json({ error: e.message }); } });
router.post('/:id/refund', (req: Request, res: Response) => { try { res.json(paymentService.refund(Number(req.params.id))); } catch (e: any) { res.status(400).json({ error: e.message }); } });

export { router as paymentController };

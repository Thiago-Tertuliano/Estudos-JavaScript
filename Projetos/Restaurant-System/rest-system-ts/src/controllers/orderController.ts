import { Router, Request, Response } from 'express';
import { OrderService } from '../services/OrderService';

const router = Router();
const orderService = new OrderService();

router.get('/', (req: Request, res: Response) => res.json(orderService.list()));
router.get('/:id', (req: Request, res: Response) => { try { res.json(orderService.getById(Number(req.params.id))); } catch (e: any) { res.status(404).json({ error: e.message }); } });
router.post('/', (req: Request, res: Response) => { try { res.status(201).json(orderService.create((req as any).userId, req.body)); } catch (e: any) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/status', (req: Request, res: Response) => { try { res.json(orderService.updateStatus(Number(req.params.id), req.body.status)); } catch (e: any) { res.status(400).json({ error: e.message }); } });

export { router as orderController };

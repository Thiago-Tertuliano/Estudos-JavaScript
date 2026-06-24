import { Router, Request, Response } from 'express';
import { ReservationService } from '../services/ReservationService';
import { ReservationRequest } from '../dto/reservations/ReservationRequest';

const router = Router();
const reservationService = new ReservationService();

router.get('/', (req: Request, res: Response) => res.json(reservationService.list()));
router.post('/', (req: Request, res: Response) => { try { const d = new ReservationRequest(req.body.guestName, req.body.guestPhone, req.body.tableId, req.body.date, req.body.time, req.body.guests); d.validate(); res.status(201).json(reservationService.create(d)); } catch (e: any) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/confirm', (req: Request, res: Response) => { try { res.json(reservationService.confirm(Number(req.params.id))); } catch (e: any) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/cancel', (req: Request, res: Response) => { try { res.json(reservationService.cancel(Number(req.params.id))); } catch (e: any) { res.status(400).json({ error: e.message }); } });

export { router as reservationController };

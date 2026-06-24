import { Router, Request, Response } from 'express';
import { TableService } from '../services/TableService';
import { TableRequest } from '../dto/tables/TableRequest';

const router = Router();
const tableService = new TableService();

router.get('/', (req: Request, res: Response) => res.json(tableService.list()));
router.get('/:id', (req: Request, res: Response) => { try { res.json(tableService.getById(Number(req.params.id))); } catch (e: any) { res.status(404).json({ error: e.message }); } });
router.post('/', (req: Request, res: Response) => { try { const d = new TableRequest(req.body.number, req.body.capacity); d.validate(); res.status(201).json(tableService.create(d)); } catch (e: any) { res.status(400).json({ error: e.message }); } });
router.put('/:id', (req: Request, res: Response) => { try { res.json(tableService.update(Number(req.params.id), req.body)); } catch (e: any) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/status', (req: Request, res: Response) => { try { res.json(tableService.updateStatus(Number(req.params.id), req.body.status)); } catch (e: any) { res.status(400).json({ error: e.message }); } });
router.delete('/:id', (req: Request, res: Response) => { try { tableService.delete(Number(req.params.id)); res.status(204).end(); } catch (e: any) { res.status(400).json({ error: e.message }); } });

export { router as tableController };

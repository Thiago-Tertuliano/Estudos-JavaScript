import { Router, Request, Response } from 'express';
import { MenuService } from '../services/MenuService';
import { CategoryRequest } from '../dto/categories/CategoryRequest';
import { MenuItemRequest } from '../dto/menuItems/MenuItemRequest';

const menuService = new MenuService();

const categoryRouter = Router();
const menuItemRouter = Router();

categoryRouter.get('/', (req: Request, res: Response) => res.json(menuService.listCategories()));
categoryRouter.post('/', (req: Request, res: Response) => { try { const d = new CategoryRequest(req.body.name, req.body.description); d.validate(); res.status(201).json(menuService.createCategory(d)); } catch (e: any) { res.status(400).json({ error: e.message }); } });

menuItemRouter.get('/', (req: Request, res: Response) => res.json(menuService.listMenuItems()));
menuItemRouter.post('/', (req: Request, res: Response) => { try { const d = new MenuItemRequest(req.body.name, req.body.price, req.body.categoryId, req.body.description); d.validate(); res.status(201).json(menuService.createMenuItem(d)); } catch (e: any) { res.status(400).json({ error: e.message }); } });
menuItemRouter.put('/:id', (req: Request, res: Response) => { try { res.json(menuService.updateMenuItem(Number(req.params.id), req.body)); } catch (e: any) { res.status(400).json({ error: e.message }); } });
menuItemRouter.patch('/:id/toggle', (req: Request, res: Response) => { try { res.json(menuService.toggleAvailability(Number(req.params.id))); } catch (e: any) { res.status(400).json({ error: e.message }); } });

export { categoryRouter as categoryController, menuItemRouter as menuItemController };

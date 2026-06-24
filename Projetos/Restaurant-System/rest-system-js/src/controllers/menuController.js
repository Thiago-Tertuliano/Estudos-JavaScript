const { Router } = require('express');
const MenuService = require('../services/MenuService');
const CategoryRequest = require('../dto/categories/CategoryRequest');
const MenuItemRequest = require('../dto/menuItems/MenuItemRequest');

const menuService = new MenuService();

const categoryRouter = Router();
const menuItemRouter = Router();

categoryRouter.get('/', (req, res) => res.json(menuService.listCategories()));
categoryRouter.post('/', (req, res) => { try { const data = new CategoryRequest(req.body); data.validate(); res.status(201).json(menuService.createCategory(data)); } catch (e) { res.status(400).json({ error: e.message }); } });

menuItemRouter.get('/', (req, res) => res.json(menuService.listMenuItems()));
menuItemRouter.post('/', (req, res) => { try { const data = new MenuItemRequest(req.body); data.validate(); res.status(201).json(menuService.createMenuItem(data)); } catch (e) { res.status(400).json({ error: e.message }); } });
menuItemRouter.put('/:id', (req, res) => { try { res.json(menuService.updateMenuItem(Number(req.params.id), req.body)); } catch (e) { res.status(400).json({ error: e.message }); } });
menuItemRouter.patch('/:id/toggle', (req, res) => { try { res.json(menuService.toggleAvailability(Number(req.params.id))); } catch (e) { res.status(400).json({ error: e.message }); } });

module.exports = { menuController: categoryRouter, menuItemController: menuItemRouter };

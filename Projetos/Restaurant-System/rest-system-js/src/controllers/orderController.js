const { Router } = require('express');
const OrderService = require('../services/OrderService');
const OrderRequest = require('../dto/orders/OrderRequest');

const router = Router();
const orderService = new OrderService();

router.get('/', (req, res) => res.json(orderService.list()));
router.get('/:id', (req, res) => { try { res.json(orderService.getById(Number(req.params.id))); } catch (e) { res.status(404).json({ error: e.message }); } });
router.post('/', (req, res) => { try { const data = new OrderRequest(req.body); data.validate(); res.status(201).json(orderService.create(req.userId, data)); } catch (e) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/status', (req, res) => { try { res.json(orderService.updateStatus(Number(req.params.id), req.body.status)); } catch (e) { res.status(400).json({ error: e.message }); } });
router.post('/:id/items', (req, res) => { try { res.json(orderService.addItem(Number(req.params.id), req.body)); } catch (e) { res.status(400).json({ error: e.message }); } });

module.exports = { orderController: router };

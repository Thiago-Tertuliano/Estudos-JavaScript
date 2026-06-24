const { Router } = require('express');
const TableService = require('../services/TableService');
const TableRequest = require('../dto/tables/TableRequest');

const router = Router();
const tableService = new TableService();

router.get('/', (req, res) => res.json(tableService.list()));
router.get('/:id', (req, res) => { try { res.json(tableService.getById(Number(req.params.id))); } catch (e) { res.status(404).json({ error: e.message }); } });
router.post('/', (req, res) => { try { const data = new TableRequest(req.body); data.validate(); res.status(201).json(tableService.create(data)); } catch (e) { res.status(400).json({ error: e.message }); } });
router.put('/:id', (req, res) => { try { res.json(tableService.update(Number(req.params.id), req.body)); } catch (e) { res.status(400).json({ error: e.message }); } });
router.delete('/:id', (req, res) => { try { tableService.delete(Number(req.params.id)); res.status(204).end(); } catch (e) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/status', (req, res) => { try { res.json(tableService.updateStatus(Number(req.params.id), req.body.status)); } catch (e) { res.status(400).json({ error: e.message }); } });

module.exports = { tableController: router };

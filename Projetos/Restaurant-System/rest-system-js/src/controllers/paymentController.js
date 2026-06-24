const { Router } = require('express');
const PaymentService = require('../services/PaymentService');
const PaymentRequest = require('../dto/payments/PaymentRequest');

const router = Router();
const paymentService = new PaymentService();

router.get('/', (req, res) => res.json(paymentService.list()));
router.post('/', (req, res) => { try { const data = new PaymentRequest(req.body); data.validate(); res.status(201).json(paymentService.create(data)); } catch (e) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/confirm', (req, res) => { try { res.json(paymentService.confirm(Number(req.params.id))); } catch (e) { res.status(400).json({ error: e.message }); } });
router.post('/:id/refund', (req, res) => { try { res.json(paymentService.refund(Number(req.params.id))); } catch (e) { res.status(400).json({ error: e.message }); } });

module.exports = { paymentController: router };

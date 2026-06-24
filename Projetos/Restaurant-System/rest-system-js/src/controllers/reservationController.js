const { Router } = require('express');
const ReservationService = require('../services/ReservationService');
const ReservationRequest = require('../dto/reservations/ReservationRequest');

const router = Router();
const reservationService = new ReservationService();

router.get('/', (req, res) => res.json(reservationService.list()));
router.post('/', (req, res) => { try { const data = new ReservationRequest(req.body); data.validate(); res.status(201).json(reservationService.create(data)); } catch (e) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/confirm', (req, res) => { try { res.json(reservationService.confirm(Number(req.params.id))); } catch (e) { res.status(400).json({ error: e.message }); } });
router.patch('/:id/cancel', (req, res) => { try { res.json(reservationService.cancel(Number(req.params.id))); } catch (e) { res.status(400).json({ error: e.message }); } });

module.exports = { reservationController: router };

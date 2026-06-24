const express = require('express');
const propertyRoutes = require('./features/properties/propertyRoutes');
const guestRoutes = require('./features/guests/guestRoutes');
const bookingRoutes = require('./features/bookings/bookingRoutes');
const paymentRoutes = require('./features/payments/paymentRoutes');
const { errorHandler } = require('./common/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/properties', propertyRoutes);
app.use('/guests', guestRoutes);
app.use('/bookings', bookingRoutes);
app.use('/payments', paymentRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`ReservEasy running on port ${PORT}`));

module.exports = app;

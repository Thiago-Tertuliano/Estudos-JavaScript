const IOrderService = require('./IOrderService');
const { orderRepository, orderItemRepository, productRepository } = require('../repositories');
const OrderRequest = require('../dto/OrderRequest');
const OrderResponse = require('../dto/OrderResponse');
const OrderStatus = require('../models/OrderStatus');
const db = require('../data/database');

class OrderService extends IOrderService {
  list() {
    const orders = orderRepository.findAll();
    return orders.map(o => {
      const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(o.id);
      return new OrderResponse({ ...o, items });
    });
  }

  getById(id) {
    const order = orderRepository.findById(id);
    if (!order) throw new Error('Order not found');
    const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(order.id);
    return new OrderResponse({ ...order, items });
  }

  create(userId, data) {
    const request = new OrderRequest(data);
    request.validate();

    const createOrder = db.transaction(() => {
      let total = 0;
      const orderItems = [];

      for (const item of request.items) {
        const product = productRepository.findById(item.productId);
        if (!product) throw new Error(`Product ${item.productId} not found`);
        if (product.stock < item.quantity) {
          throw new Error(`Insufficient stock for product ${product.name}. Available: ${product.stock}`);
        }
        const unitPrice = product.price;
        total += unitPrice * item.quantity;
        orderItems.push({ productId: item.productId, quantity: item.quantity, unitPrice });
        productRepository.update(product.id, { stock: product.stock - item.quantity });
      }

      const order = orderRepository.create({
        userId,
        total,
        status: OrderStatus.PENDING,
      });

      for (const oi of orderItems) {
        orderItemRepository.create({ orderId: order.id, ...oi });
      }

      return order;
    });

    const order = createOrder();
    const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(order.id);
    return new OrderResponse({ ...order, items });
  }

  updateStatus(id, status) {
    if (!Object.values(OrderStatus).includes(status)) {
      throw new Error('Invalid order status');
    }
    const order = orderRepository.findById(id);
    if (!order) throw new Error('Order not found');
    const updated = orderRepository.update(id, { status });
    const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(updated.id);
    return new OrderResponse({ ...updated, items });
  }

  cancel(id) {
    return this.updateStatus(id, OrderStatus.CANCELLED);
  }
}

module.exports = OrderService;

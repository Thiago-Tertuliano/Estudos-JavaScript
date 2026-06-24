const Repository = require('./Repository');
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');

const userRepository = new Repository('users', User);
const categoryRepository = new Repository('categories', Category);
const productRepository = new Repository('products', Product);
const orderRepository = new Repository('orders', Order);
const orderItemRepository = new Repository('order_items', OrderItem);

module.exports = {
  userRepository,
  categoryRepository,
  productRepository,
  orderRepository,
  orderItemRepository,
};

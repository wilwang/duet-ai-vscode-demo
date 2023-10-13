const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

router.post('/', orderController.createOrder);
router.get('/:orderId', orderController.getOrder);
router.post('/:orderId/items', orderController.addItem);
router.delete('/:orderId/items/:itemId', orderController.removeItem);
router.post('/:orderId/checkout', orderController.checkOut);

module.exports = router;

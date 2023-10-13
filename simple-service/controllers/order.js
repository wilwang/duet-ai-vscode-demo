const orderService = require ('../services/order.js');

const createOrder = (req, res, next) => {
  const {userId} = req.body;
  console.log(`controller creating order for user ${userId}`)

  try {
    console.log(userId);
    const order = orderService.createOrder(userId);
    console.log("my order", order);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

const getOrder = (req, res, next) => {
  const orderId = parseInt(req.params.orderId);
  console.log(`controller getting order ${orderId}`)

  try {
    const order = orderService.getOrder(orderId);
    res.status(200).send(order);
    next();
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

const addItem = (req, res, next) => {
  const orderId = parseInt(req.params.orderId);
  const {item} = req.body;

  console.log(`controller adding item ${item} to order ${orderId}`)

  try {
    const order = orderService.addItem(orderId, item);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

const removeItem = (req, res, next) => {
  const orderId = parseInt(req.params.orderId);
  const itemId = parseInt(req.params.itemId);
  console.log(`controller removing item ${itemId} from order ${orderId}`)

  try {
    const order = orderService.removeItem(orderId, itemId);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

const checkOut = (req, res, next) => {
  const orderId = parseInt(req.params.orderId);
  console.log(`controller checking out order ${orderId}`)

  try {
    const order = orderService.checkOut(orderId);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

module.exports = {
  createOrder,
  getOrder,
  addItem,
  removeItem,
  checkOut
}
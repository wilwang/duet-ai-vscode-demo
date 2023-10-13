

let incrementer = 1;
let orderDb = [];

const createOrder = function(userId) {
  const order = {
    id: incrementer++,
    userId: userId,
    items: []
  };

  orderDb.push(order);

  console.log(`service creating order ${order.id}`)
  console.log(orderDb);

  return order;
}

const getOrder = function(orderId) {
  console.log(`service getting order ${orderId}`);

  const order = orderDb.find(order => order.id === orderId);
  if (!order) {
    throw new Error(`order ${orderId} not found`);
  }
  return order;
}

const addItem = function(orderId, item) {
  console.log(`service adding item ${item.id} to order ${orderId}`);

  const order = orderDb.find(order => order.id === orderId);
  if (!order) {
    throw new Error(`order ${orderId} not found`);
  }

  order.items.push(item);
  return order;
}

const removeItem = function(orderId, itemId) {
  console.log(`service removing item ${itemId} to order ${orderId}`);

  const order = orderDb.find(order => order.id === orderId);
  if (!order) {
    throw new Error(`order ${orderId} not found`);
  }

  order.items = order.items.filter(item => item.id !== itemId);
  return order;
}

const checkOut = function(orderId) {
  console.log(`service checking out order ${orderId}`);

  const order = orderDb.find(order => order.id === orderId);
  // TODO: If order does not exist, throw an error that the orderId was not found

  // prompt: can this be written more optimally?
  let total = 0;
  for (let i = 0; i < order.items.length; i++) {
    total += order.items[i].price;
  }

  // highlight the following line and prompt or click "Explain"
  //const total = order.items.reduce((acc, item) => acc + item.price, 0);

  const invoice = {
    orderId: order.id,
    total: total
  };

  console.log(invoice);

  orderDb = orderDb.filter(order => order.id !== orderId);
  return invoice;
}

// Start writing function "const getOrderByCustomerId" and have DuetAI auto-complete

module.exports = {
  createOrder,
  getOrder,
  addItem,
  removeItem,
  checkOut
}
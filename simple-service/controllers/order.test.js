jest.mock('../services/order.js');

const orderService = require('../services/order.js');
const orderController = require('./order.js');

describe('Create new order', () => {
  let resStatus;
  let resJson;
  let resSend;
  let res;

  beforeEach(() => {
    orderService.createOrder.mockReset();
    resStatus = jest.fn();
    resJson = jest.fn();
    resSend = jest.fn();
    res = {
      status: resStatus,
      json: resJson,
      send: resSend
    };
    resStatus.mockImplementation(()=> res);
    resJson.mockImplementation(()=> res);
    resSend.mockImplementation(()=> res);    
  });

  test('should call createOrder and return order with status 200', () => {
    const mockCreateOrder = jest.spyOn(orderService, 'createOrder');
    mockCreateOrder.mockImplementation(jest.fn(()=> {
      return {
        orderId: 1,
        userId: 1,
        items: []
      }
    }));

    const req = {
      body: {
        userId: 1
      }
    };
    
    orderController.createOrder(req, res);

    expect(mockCreateOrder).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      orderId: 1,
      userId: 1,
      items:[]
    });
  });

  test('should call createOrder and return error with status 500', () => {
    const mockCreateOrder = jest.spyOn(orderService, 'createOrder');
    mockCreateOrder.mockImplementation(jest.fn(()=> {
      throw new Error('Error creating order');
    }));

    const req = {
      body: {
        userId: 1
      }
    };
    
    orderController.createOrder(req, res);

    expect(mockCreateOrder).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Error: Error creating order');
  });
});

// TODO: Write unit test suite for getOrder

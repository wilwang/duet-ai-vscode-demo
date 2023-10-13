# Objective
Examine how Duet AI can help increase developer productivity.

We will use Duet AI to (1) create a basic Orders service and (2) examine code completion and assistance on existing code base

# Duet Assisted Order Service
Demonstrate using prompts to set up a basic Orders service.

### Prompts
*make sure to run these prompts while in the code files NOT while in the README.md*
```
> create a simple nodejs and express server
> my app returns an error saying it can't find module 'express'
> create a package.json
> create a route module for 'orders'
```

Copy the code in `simple-service/routes/orders.js` to the new orders route module.

```
> create the orderController module
> create my order model
> update my package.json for new dependencies

```

# Simple Service 
Use Duet AI to write some unit tests, debug some code, and assist in development.

### Code completion
Open `simple-service/services/orders.js` and go to the `checkOut` function and find the line:
```
// TODO: If order does not exist, throw an error that the orderId was not found
```
Highlight the comment and click Ctrl+Enter to auto generate the code.
If it doesn't work (it's a little spotty), just go to next line and start typing "if"

### Rewrite code
Open `simple-service/services/orders.js` and highlight in the `checkOut` function:
```
let total = 0;
for (let i = 0; i < order.items.length; i++) {
  total += order.items[i].price;
}
```
and ask Duet AI:
```
> can this be written more optimally?
```

### Explain code
Open `simple-service/services/orders.js` and highlight in the `checkOut` function and then click **Explain**
```
const total = order.items.reduce((acc, item) => acc + item.price, 0);
```

### Coding style/pattern based on your existing code
Open `simple-service/services/orders.js` and go to the bottom of the file right before module exports and start typing: 
```
const getOrderByCustomerId
```

### Generate Unit Tests
Open `simple-service/controllers/orders.test.js` and find the comment:
```
// TODO: Write unit test suite for getOrder
```
Highlight the line and try clicking Ctrl+Enter. If it does not work, go to the prompt and ask it to create a unit test for getOrder.

Check if the unit test actually works, by running:
```
> npm run test
```


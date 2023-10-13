const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/order');

app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

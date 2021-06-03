const Orders = require('../models/orders');
// eslint-disable-next-line import/order
const router = require('express').Router();

router.post('/sendorder', req => {
  Orders.create({
    username: req.body.username,
    orders: req.body.orders,
    date: Date()
  }).then(() => {
    console.warn('created new order');
  })
    .catch(err => {
      console.error(err);
    });
});


module.exports = router;

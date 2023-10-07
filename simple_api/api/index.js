const router = require('express').Router();
const { drinks, reviews, users } = require('./mock');
const { reply, getById } = require('./utils');

router.get('/drinks', (req, res, next) => {
  reply(res, drinks);
});

router.get('/reviews', (req, res, next) => {
  const { drinkId } = req.query;
  let result = reviews;
  if (drinkId) {
    const drink = getById(drinks)(drinkId);
    if (drink) {
      result = drink.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.get('/users', (req, res, next) => {
  reply(res, users);
});

router.get('/images', (req, res, next) => {
  reply(res, images);
});

module.exports = router;

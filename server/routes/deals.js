const express = require('express');

const router = new express.Router();

const Deal = require('../models/deal');

router.route('/:zipcode')
  .get((req, res) => {
    const zipcode = req.params.zipcode;
    Deal.getZipcodeDeals(zipcode, res.handle);
  });

router.route('/:states/:city')
  .get((req, res) => {
    const states = req.params.states;
    const city = req.params.city;
    const params = { states, city };
    Deal.getCityDeals(params, res.handle);
  });

module.exports = router;

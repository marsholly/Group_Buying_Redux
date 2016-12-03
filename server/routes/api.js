const express = require('express');

const router = new express.Router();

router.use('/deals', require('./deals'));

module.exports = router;

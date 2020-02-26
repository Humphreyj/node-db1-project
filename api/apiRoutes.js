const express = require('express');

const router = express.Router();

const accountsRouter = require('../routers/accountsRouter');

router.use('/accounts',accountsRouter);

module.exports = router;
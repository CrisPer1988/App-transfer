const express = require('express');

const routerTransfer = express.Router();

const transferController = require('../controllers/transfer.controller');

routerTransfer.post('/', transferController.sendTransfer);

module.exports = routerTransfer;

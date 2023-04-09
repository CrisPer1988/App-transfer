const express = require('express');

const routerAuth = express.Router();

const authController = require('../controllers/auth.controller');

routerAuth.post('/signup', authController.signup);

routerAuth.post('/signin', authController.signin);

routerAuth.get('/:id/history', authController.findOneUser);

module.exports = routerAuth;

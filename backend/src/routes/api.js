const express = require('express');
const router = express.Router();

const accountsController = require('../controllers/controller');

// GET /api/accounts - list all accounts (currently returns mock data)
router.get('/accounts', accountsController.getAccounts);

// POST /api/accounts - create a new account (currently echoes mock data)
router.post('/accounts', accountsController.createAccount);

// GET /api/accounts/:id/balance - get balance + currency for a single account
router.get('/accounts/:id/balance', accountsController.getAccountBalance);

module.exports = router;

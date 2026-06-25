const Account = require('../models/ModelName');

// Mock data used by the current implementation. Your task is to
// replace uses of this mock array with real MongoDB queries via Mongoose.
const mockAccounts = [
  {
    _id: 'mock-1',
    userId: 'user-mock-001',
    name: 'Mock User One',
    email: 'mock.one@example.com',
    balance: 1000,
    currency: 'INR',
    status: 'active'
  },
  {
    _id: 'mock-2',
    userId: 'user-mock-002',
    name: 'Mock User Two',
    email: 'mock.two@example.com',
    balance: 500,
    currency: 'USD',
    status: 'inactive'
  }
];

// GET /api/accounts
// Currently returns a hardcoded list of mock accounts.
// Replace the mock response with a Mongoose query such as Account.find().
exports.getAccounts = async (req, res, next) => {
  try {
    // TODO: Replace mockAccounts with real data from MongoDB using Account.find().
    return res.json(mockAccounts);
  } catch (err) {
    return next(err);
  }
};

// POST /api/accounts
// Currently returns the body combined with a fake _id.
// Replace this with a Mongoose create/save operation.
exports.createAccount = async (req, res, next) => {
  try {
    const { userId, name, email, balance, currency, status } = req.body || {};

    // Very basic validation for the mock implementation.
    if (!userId || !name || !email || balance == null || !currency) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // TODO: Replace this mock implementation with something like:
    // const account = new Account({ ... }); await account.save();
    const mockCreated = {
      _id: 'mock-created-id',
      userId,
      name,
      email,
      balance,
      currency,
      status: status || 'active'
    };

    return res.status(201).json(mockCreated);
  } catch (err) {
    return next(err);
  }
};

// GET /api/accounts/:id/balance
// Currently reads from the mockAccounts array. Replace this with
// a Mongoose findById (or similar) query and return only balance & currency.
exports.getAccountBalance = async (req, res, next) => {
  try {
    const accountId = req.params.id;

    // TODO: Replace this lookup with Account.findById(accountId).
    const account = mockAccounts.find((acc) => acc._id === accountId);

    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    return res.json({ balance: account.balance, currency: account.currency });
  } catch (err) {
    return next(err);
  }
};

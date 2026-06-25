const mongoose = require('mongoose');

// Account model represents a user's Skill Wallet inside Utkrusht.
// Each account tracks a balance of learning credits in a given currency.

const accountSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  balance: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

// A basic index is already created in init_database.js on email.
// Candidates can additionally add an index here (for example, on userId)
// using accountSchema.index({ userId: 1 }) if needed.

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
